const express = require("express")
const mysql = require('mysql')

//create connection

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: "nfl"

});

//connect to MySQL
db.connect(err => {
    if(err) {
        throw err
    }
    console.log("MySQL Connected")
});

const app = express();

//Create Database
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE NFL"
    db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send("Database Created");
    });
});

//Create Table
app.get('/createteams', (req, res) => {
    let sql = 'CREATE TABLE Teams(Team_Name VARCHAR(30), Wins TINYINT UNSIGNED NOT NULL DEFAULT 0, Losses TINYINT UNSIGNED NOT NULL DEFAULT 0, Draws TINYINT UNSIGNED NOT NULL DEFAULT 0, Superbowl_Wins TINYINT UNSIGNED NOT NULL DEFAULT 0, Season SMALLINT UNSIGNED, PRIMARY KEY(Team_Name, Season))'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("Teams table created")
    })
})

//Create Table
app.get('/createplayers', (req, res) => {
    let sql = 'CREATE TABLE Player (Player_Name	VARCHAR(30),Birthday date, Jersey_Number	TINYINT UNSIGNED NOT NULL,Touchdowns SMALLINT UNSIGNED DEFAULT 0, Passing_Yards MEDIUMINT SIGNED DEFAULT  0, Rushing_Yards MEDIUMINT SIGNED DEFAULT  0,Sacks SMALLINT UNSIGNED DEFAULT 0,Turnovers SMALLINT UNSIGNED DEFAULT 0,Tackles SMALLINT UNSIGNED DEFAULT 0,Position VARCHAR(2),Season SMALLINT UNSIGNED,Team_Name VARCHAR(25),PRIMARY KEY (Player_Name, Season))'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("Players table created")
    })
})

//Create Table
app.get('/createcoaches', (req, res) => {
    let sql = 'CREATE TABLE Head_Coach (Coach_Name VARCHAR(30), Wins  SMALLINT UNSIGNED NOT NULL DEFAULT 0,Loses SMALLINT UNSIGNED NOT NULL DEFAULT 0,Superbowl_Wins   TINYINT UNSIGNED NOT NULL DEFAULT 0,Season SMALLINT UNSIGNED NOT NULL,Team_Name  VARCHAR(25),PRIMARY KEY(Coach_Name, Season))'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("Coaches table created")
    })
})


//select Team
app.get('/getteam', (req, res) => {
    let sql = 'SELECT * FROM Teams'
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        console.log(results)
        res.send('Team details fetched')
    })
})



app.listen('5000', () => {
    console.log("Server Started on port 5000");
})