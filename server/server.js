const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const Quote = require('inspirational-quotes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(cors());
// parse application/json
app.use(bodyParser.json());
//create database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
//connect to database
pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
    connection.release();
});
//add new user
app.post('/students',(req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    conn.query("INSERT INTO students (firstname, lastname, email, password) VALUES(?, ?, ?, ?)", [firstName, lastName, email, password],
    (err, result) => {
        res.send(result);
        console.log("name is" +JSON.stringify({firstName, lastName, email, password}));
        console.log(result);
    })
});
//loging in a user
app.post('/login',(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    conn.query("SELECT * FROM students WHERE email = ? AND password = ?",  [email, password],
    (err, result) => {
        if (err) {
            console.log("ERROR MY GUY")
            req.send({err: err});
            
        }
        if (result.length > 0) {
            console.log(result.firstname);
            res.send({result});
        } else {
            res.send({message: "Wrong username / password combination"})
        }
        
    })
});
// Job application processing
app.post('/jobapplications', (req, res) => {
    const name = req.body.Name;
    const email = req.body.email;
    const coverletter = req.body.email;
    const resume = req.body.resume;
    const jobtitle = req.body.option.value;

    conn.query("INSERT INTO jobapplications (name, email, coverletter, resume, jobtitle) VALUES(?, ?, ?, ?, ?)", [name, email, coverletter, resume, jobtitle],
    (err, result) => {
        res.send(result);
        console.log("name is" +JSON.stringify({name, email, coverletter, resume, jobtitle}));
        console.log(result);
    })
})

app.post('/enrollment', (req, res) => {
    const fullName = req.body.FullName;
    const dob = req.body.dob;
    const city = req.body.city;
    const address = req.body.address;
    const guardianFullName = req.body.guardianFullName;
    const relationship = req.body.relationship;
    const email = req.body.email;
    const contact = req.body.phoneNumber;

    conn.query("INSERT INTO enrollment (fullName, dob, city, address, guardianFullName, relationship, email, contact) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", [fullName, dob, city, address, guardianFullName, relationship, email, contact],
    (err, result) => {
        res.send(result);
        console.log("name is" +JSON.stringify({fullName, dob, city, address, guardianFullName, relationship, email, contact}));
        console.log(result);
    })
})

    app.listen(5000, () => {
        console.log("Server running successfully on 5000");
    });

