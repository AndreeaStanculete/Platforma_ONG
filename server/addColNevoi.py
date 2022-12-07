import pandas as pd
from pymongo import MongoClient
import json
import openpyxl
import unicodedata as ud

client = MongoClient("mongodb://localhost:27017")
db = client["proiect"]
coll = db["ong"]

coll.getCollection("ong").update({}, {set: {"Haine Copii": False}},false,true);