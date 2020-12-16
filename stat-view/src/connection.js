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
app.get('/createop', (req, res) => {
    let sql = 'CREATE TABLE Offensive_Player (Player_Name	      VARCHAR(30),Birthday	      date,Jersey_Number	  TINYINT UNSIGNED NOT NULL,Touchdowns        SMALLINT UNSIGNED DEFAULT 0,Passing_Yards     MEDIUMINT SIGNED DEFAULT  0, Rushing_Yards     MEDIUMINT SIGNED DEFAULT  0,Turnovers         SMALLINT UNSIGNED DEFAULT 0,Position          VARCHAR(20),Season	          SMALLINT UNSIGNED, Team_Name         VARCHAR(30),PRIMARY KEY (Player_Name, Birthday, Season), FOREIGN KEY (Team_Name) REFERENCES Team(Team_Name))'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("OP table created")
    })
})

//Create Table
app.get('/createteam', (req, res) => {
let sql = 'CREATE TABLE Team (Team_Name VARCHAR(30), Wins TINYINT UNSIGNED NOT NULL DEFAULT 0, Losses TINYINT UNSIGNED NOT NULL DEFAULT 0, Draws TINYINT UNSIGNED NOT NULL DEFAULT 0, Superbowl_Wins TINYINT UNSIGNED NOT NULL DEFAULT 0, Season	SMALLINT UNSIGNED, PRIMARY KEY(Team_Name, Season))'    
db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("OP table created")
    })
})

//Create Table
app.get('/createdp', (req, res) => {
    let sql = 'CREATE TABLE Defensive_Player (Player_Name	      VARCHAR(30),Birthday	      date,Jersey_Number	  TINYINT UNSIGNED NOT NULL,Touchdowns        SMALLINT UNSIGNED DEFAULT 0,Rushing_Yards     MEDIUMINT SIGNED DEFAULT  0,Sacks             SMALLINT UNSIGNED DEFAULT 0,Tackles           SMALLINT UNSIGNED DEFAULT 0,Interceptions     SMALLINT UNSIGNED DEFAULT 0,Position          VARCHAR(20),Season	          SMALLINT UNSIGNED,Team_Name         VARCHAR(30),PRIMARY KEY (Player_Name, Birthday, Season),FOREIGN KEY (Team_Name) REFERENCES Team(Team_Name))'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("DPlayers table created")
    })
})

//Create Table
app.get('/createcoaches', (req, res) => {
let sql = 'CREATE TABLE Head_Coach (Coach_Name VARCHAR(30), Superbowl_Wins   TINYINT UNSIGNED  NOT NULL DEFAULT 0, Season SMALLINT UNSIGNED NOT NULL,Team_Name VARCHAR(30), PRIMARY KEY(Coach_Name, Season), FOREIGN KEY(Team_Name) REFERENCES Team(Team_Name))'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("Coaches table created")
    })
})

//Create quaterback table

app.get('/createqb', (req, res) => {
    let sql = "CREATE TABLE Quarterback(Player_Name	VARCHAR(30),Birthday	date,Jersey_Number	TINYINT UNSIGNED NOT NULL,Passing_Yards     MEDIUMINT SIGNED DEFAULT  0, Rushing_Yards     MEDIUMINT SIGNED DEFAULT  0,Times_Sacked      SMALLINT UNSIGNED DEFAULT 0,Interceptions     SMALLINT UNSIGNED DEFAULT 0,Fumbles           SMALLINT UNSIGNED DEFAULT 0,Passing_TD        SMALLINT UNSIGNED DEFAULT 0,Rushing_TD        SMALLINT UNSIGNED DEFAULT 0, Completion_Perc   SMALLINT UNSIGNED DEFAULT 0,Passes_Attempted  SMALLINT UNSIGNED DEFAULT 0,Passes_Completed  SMALLINT UNSIGNED DEFAULT 0,Position          VARCHAR(20),Season	          SMALLINT UNSIGNED,Team_Name         VARCHAR(30),PRIMARY KEY (Player_Name, Birthday, Season), FOREIGN KEY(Team_Name) REFERENCES Team(Team_Name))"
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send("Quarterback table created")
    })
})

//select Team
app.get('/getteam', (req, res) => {
    let sql = 'SELECT * FROM Offensive_Player Where Team_Name = "Seattle Seahawks" AND Season = 2020'
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        console.log(results)
        res.send('Team details fetched')
        console.log(results[1]['Player_Name'])

    })
})



app.listen('5000', () => {
    console.log("Server Started on port 5000");
})