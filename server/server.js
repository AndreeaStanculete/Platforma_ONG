// Loading libraries
const path = require('path');
const express = require('express');
const {ONGs, connection, asyncDBConnect} = require('./database.js');

// Setup server details
const PORT = process.env.PORT || 3001;
const app = express();

// Defining Database API endpoint
app.get("/api/onglist", (req, res) => {
    const filter = req.query.Oras;
    
    asyncDBConnect("localhost:27017", "proiect", () => {
        ONGs.find({ Localitate: filter}, function(err, users){
            if(connection) connection.close();
            if(err) console.log(err);
            else {
                res.json({ongs: users});
            }
        });
    });
});

app.get("/api/localitati", (req, res) => {
    asyncDBConnect("localhost:27017", "proiect", () => {
        ONGs.find({}, function(err, users){
            if(connection) connection.close();
            if(err) console.log(err);
            else {
                let Orase = new Set();

                for(const orase of users) {
                    Orase.add(orase.Localitate);
                }
                res.json({orase: Array.from(Orase)});
            }
        });
    });
});

// Returning REACT page on any other request
app.use(express.static(path.resolve(__dirname, "../my-app/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../my-app/build', 'index.html'));
});

// Starting server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
