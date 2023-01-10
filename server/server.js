// Loading libraries
const path = require('path');
var ObjectId = require('mongoose').Types.ObjectId; 
const express = require('express');
const {ONGs, loginF, Users, Subscriptions, connection, asyncDBConnect} = require('./database.js');
var nodemailer = require('nodemailer');
const loggedin = require('./schemas/loggedin.js');

// Setup server details
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.get("/api/changeL", (req, res) => {
    const filter = req.query.Email;
    console.log(filter);
    asyncDBConnect("localhost:27017", "proiect", () => {
        loginF.findOneAndUpdate({_id: 1}, {is: true, email: filter}, function(err, users) {
            if(connection) connection.close();
            if(err) console.log(err);
            else {
                res.json({is: users.is});
            }
        });
    });
 });

 app.get("/api/decon", (req, res) => {
    asyncDBConnect("localhost:27017", "proiect", () => {
        loginF.findOneAndUpdate({_id: 1}, {is: false, email:"null"}, function(err, users) {
            if(connection) connection.close();
            if(err) console.log(err);
            else {
                res.json({is: users.is});
            }
        });
    });
 });

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

app.get("/api/denumiri", (req, res) => {
    asyncDBConnect("localhost:27017", "proiect", () => {
        loggedin.find({_id: 1}, function(err, users) { 
            let e = users[0]['email'];

            Users.find({email: e}, function(err, users4) { 

                Subscriptions.find({email: e}, function(err, users2){

                    if(err) console.log(err);
                    else {
                        let lista = new Set();

                        for(const i of users2){
                            lista.add(i["denumireONG"]);
                        }

                        res.json({denumiri: Array.from(lista), who: users4, is: users});
                    }

                    if(connection) connection.close();
                });

            });

        });
    });
});

app.post("/send_mail", (req, res) => {
    console.log(req.body.ONG);

    var email3;

    asyncDBConnect("localhost:27017", "proiect", () => {
        loginF.find({_id: 1}, function(err, users) {
            if(err) console.log(err);
            else {
                email3 = users[0]["email"];

                newData = new Subscriptions({email: email3, denumireONG: req.body.ONG});
                newData.save(function(err, users) {
                    if(connection) connection.close();
                    if(err) console.log(err);
                });

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'ongPlatform55@gmail.com',
                        pass: 'ktjdmodohbdgrets'
                    }
                });
                  
                var mailOptions = {
                    from: 'ongPlatform55@gmail.com',
                    to: email3,
                    subject: 'Confirmation for subscription',
                    text: 'You have just subscribed to a new ONG! This mail is automatic. Please do not reply to it.'
                };
                  
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                if(connection) connection.close();

            }
        });
    });

    res.writeHead(301, {
        Location: `/`
    }).end();
});

app.post("/send_mail2", (req, res) => {
    ///console.log(req.body.numePers);

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'ongPlatform55@gmail.com',
                        pass: 'ktjdmodohbdgrets'
                    }
                });
                  
                var mailOptions = {
                    from: 'ongPlatform55@gmail.com',
                    to: req.body.email,
                    subject: 'Confirmation',
                    text: 'We have received your contact information. Someone from our team will soon contact you. This replay is automatic. Please do not reply to it.'
                };
                  
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

                var transporter2 = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'ongPlatform55@gmail.com',
                        pass: 'ktjdmodohbdgrets'
                    }
                });
                  
                var string = "Email :" + req.body.email + " nr tel: " + req.body.tel + " nume pers: " + req.body.numePers + " nume ONG: " + req.body.numeONG;
                console.log(string);
                var mailOptions2 = {
                    from: 'ongPlatform55@gmail.com',
                    to: 'ongPlatform55@gmail.com',
                    subject: 'Someone wants to claim an ONG',
                    text: string
                };
                  
                transporter2.sendMail(mailOptions2, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

    res.writeHead(301, {
        Location: `/`
    }).end();
});

app.get("/api/is", (req, res) => {
    asyncDBConnect("localhost:27017", "proiect", () => {
        loginF.find({_id: 1}, function(err, users) {
            if(connection) connection.close();
            if(err) console.log(err);
            else {
                res.json({is: users[0]});
            }
        });
    });
 });




app.get("/api/conectare", (req, res) => {
    const filter = req.query.Email;
    const filter2 = req.query.Pass;
    
    asyncDBConnect("localhost:27017", "proiect", () => {
        Users.find({email: filter, password: filter2}, function(err, users){
            if(connection) connection.close();
            if(err) console.log(err);
            else {
                res.json({data: users});
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
