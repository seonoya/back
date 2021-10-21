//엄격한 코드 검사
'use strict';

/************* include library **************/
var express = require('express');
var api     = express();
var mysql   = require('mysql');

// npm install mysql
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'rs00mk',
    database : 'smart_farm'
});


/************* Routing **************/
//api Index
api.get('/', (req, res, next) => {

    connection.connect();

    connection.query('select * from first_table',function (error, results, fields){
        if(error){
            console.log(error);
        }

        console.log(results);
    });

    connection.end();
    res.send("Welcome is API Fucntion TEST");
});

/************* Routing **************/
//api Index
api.get('/hello', (req, res, next) => {
    res.send("HTTP GET > Hello Nodejs");
});

api.post('/hello', (req, res, next) => {
    res.send("HTTP POST > Hello Nodejs");
});

//Query String
// ex) http://localhost/api/echo?param1=123&param2=321
api.get('/query_echo', (req, res, next) => {
    res.send(req.query);
});


module.exports = api;
