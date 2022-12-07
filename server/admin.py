from pymongo import MongoClient
import random

client = MongoClient("mongodb://localhost:27017")
db = client["proiect"]
colAdmin = db["admin"]
colUser = db["utilizator"]

admin = 1
while admin:
    print("1.Logare\n2.Iesire")

    optiune = 0
    while int(optiune) < 1 or int(optiune) > 2:
        print("Selecteaza optiunea: ")
        optiune = int(input())

    if optiune == 1:
        print("--- LOGARE ---\n")

        log = 1

        email = input("E-mail: ", )
        parola = input("Parola: ", )

        result_email = colAdmin.find_one({'e-mail': email})
        result_pass = colAdmin.find_one({'password': parola})

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
            print("1.Adauga un admin\n2.Actualizeaza lista de nevoi\n3.Iesire")

            opt_admin = 0
            while int(opt_admin) < 1 or int(opt_admin) > 3:
                print("Selecteaza optiunea: ")
                opt_admin = int(input())

            if opt_admin == 1:
                print("--- ADAUGA ADMIN NOU ---\n")

                id = random.randint(1000, 9999)
                while colAdmin.find_one({'id': id}) != None:
                    id = random.randint(1000, 9999)

                nume = input("Nume: ", )
                prenume = input("Prenume: ", )
                email_nou = input("Email: ", )
                while colUser.find_one({'e-mail': email_nou}) != None:
                    print("Acest admin exista deja!")
                    email_nou = input("Email: ", )
                parola_noua = input("Parola: ", )

                colAdmin.insert_one({"id":id, "firstName": nume, "lastName": prenume, "e-mail": email_nou, "password": parola_noua})
                colUser.insert_one({"id": id, "firstName": nume, "lastName": prenume, "e-mail": email_nou, "password": parola_noua, "isAdmin": True})

            if opt_admin == 2:
                print("--- ACTUALIZEAZA LISTA DE NEVOI ---\n")

            if opt_admin == 3:
                log = 0

    if optiune == 2:
        admin = 0
