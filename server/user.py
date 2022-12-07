from pymongo import MongoClient
import random

client = MongoClient("mongodb://localhost:27017")
db = client["proiect"]
colUser = db["utilizator"]

user = 1
while user:
    print("1.Autentificare\n2.Logare\n3.Iesire")

    optiune = 0
    while int(optiune) < 1 or int(optiune) > 3:
        print("Selecteaza optiunea: ")
        optiune = int(input())

    if optiune == 1:
        print("--- AUTENTIFICARE ---\n")

        id = random.randint(1000, 9999)
        while colUser.find_one({'id': id}) != None:
            id = random.randint(1000, 9999)

        nume = input("Nume: ", )
        prenume = input("Prenume: ", )
        email_nou = input("Email: ", )
        while colUser.find_one({'e-mail': email_nou}) != None:
            print("Acest email exista deja!")
            email_nou = input("Email: ", )
        parola_noua = input("Parola: ", )

        colUser.insert_one({"id": id, "firstName": nume, "lastName": prenume, "e-mail": email_nou, "password": parola_noua, "isAdmin": False})

    if optiune == 2:
        print("--- LOGARE ---\n")

        log = 1

        email = input("E-mail: ", )
        parola = input("Parola: ", )

        result_email = colUser.find_one({'e-mail': email})
        result_pass = colUser.find_one({'password': parola})

        if result_email is None:
            print("E-mail inexistent\n")
            log = 0
        else:
            if result_pass is None:
                print("Parola gresita\n")
                log = 0

        if log == 1:
            print("Te-ai logat cu succes!\n")

        while log:
            print("1.Cauta un ong\n2.Bookmark/ Subscribe\n3.Iesire")

            opt_user = 0
            while int(opt_user) < 1 or int(opt_user) > 3:
                print("Selecteaza optiunea: ")
                opt_user = int(input())

            if opt_user == 1:
                print("--- CAUTA UN ONG ---\n")

            if opt_user == 2:
                print("--- BOOKMARK/ SUBSCRIBE ---\n")

            if opt_user == 3:
                log = 0

    if optiune == 3:
        user = 0