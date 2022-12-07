## Dependinte

Cand instalezi proiectul, este suficient sa se ruleze odata **npm install** in directorul principal
si in directorul **my-app** pentru a instala dependintele atat pentru server cat si pentru react.

## Cum compilez / pornesc site-ul

Pentru a compila site-ul se ruleaza comanda :
```
npm run build
```

Odata compilat, server-ul se porneste folosind :
```
npm start
```
iar site-ul poate fi accesat din browser la url-ul **localhost:3001**

## Structura de directoare

- **my-app**
  Aici se afla pagina de react si tot ce este aferent front-endului (partea vizuala). Pentru codul
  sursa vezi fisierul **src**.

- **node_modules**
  Aici sunt librariile pentru server (nu se modifica nimic)

- **server**
  Aici este codul pentru server.

  - server.js
    Contine codul principal pentru server. Defineste anumite rute si realizeaza conexiunea cu baza de date.

  - database.js
    Contine functii pentru accesarea bazei de date si importa toate schemele bazei de date

  - **schemas**
    Contine definitiile tuturor schemelor de baze de date.