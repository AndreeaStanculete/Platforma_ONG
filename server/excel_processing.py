import pandas as pd
import openpyxl
from pymongo import MongoClient
import unicodedata as ud

import download_excel

def rmdiacritics(string):
    char_array = [char for char in string]
    new_array = []

    for ch in char_array:
        try:
            desc = ud.name(ch)
            cutoff = desc.find(' WITH ')
            if cutoff != -1:
                desc = desc[:cutoff]
                try:
                    ch = ud.lookup(desc)
                except KeyError:
                    pass  # removing "WITH ..." produced an invalid name
        except ValueError:
            pass
        new_array.append(ch)
    new_string = ""
    for i in new_array:
        new_string += i
    return new_string


#connection to database
client = MongoClient("mongodb://localhost:27017")
db = client["proiect"]
coll = db["ong"]

df = pd.read_excel("./ong.xlsx")

data = df.to_dict(orient="records") # lista

for elem in data:
    for key in elem.keys():
        key = rmdiacritics(str(key))
        if elem[key] == "nan":         # __ eq __ means ==
            elem[key] = ""
        else:
            elem[key] = rmdiacritics(str(elem[key]))

df = pd.DataFrame.from_dict(data, orient='columns', dtype=None, columns=None)

df.to_excel("./ong.xlsx", sheet_name="Sheet1", header=True, index=False)

#delete unused columns

exc_file = openpyxl.load_workbook("./ong.xlsx")
exc_sheet = exc_file['Sheet1']

exc_sheet.delete_cols(idx=10, amount=16)
exc_sheet.delete_cols(idx=4)

exc_file.save("./ong.xlsx")


#delete rows that contain "radiata"

excel = pd.read_excel("./ong.xlsx")
df = excel.drop(excel[excel['Starea actuala'] == "radiata"].index)

df.to_excel("./ong.xlsx", sheet_name="Sheet1", header=True, index=False)







