import pandas as pd
from pymongo import MongoClient
import json

import excel_processing

client = MongoClient("mongodb://localhost:27017")
db = client["proiect"]
coll = db["ong"]

coll.delete_many({})
print(coll)

df = pd.read_excel("./ong.xlsx", index_col=None)

json_file = json.loads(df.T.to_json()).values()

coll.insert_many(json_file)
