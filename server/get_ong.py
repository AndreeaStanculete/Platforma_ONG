import pandas as pd
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["proiect"]
coll = db["ong"]

dataframe = pd.DataFrame(list(coll.find()))  #convert entire collection to Pandas dataframe

ong_list = dataframe["Denumire"].tolist()

for i in range(5):
    print(ong_list[i])