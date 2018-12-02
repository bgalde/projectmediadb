// import driver for mysql
var mysql      = require('mysql');
// set database name, this could potentially be set from the browser..
var database = "projectmediadb";
// Login for the database
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'admin',
    password : 'Secur3Passw0rd',
    database : database
});

module.exports=connection;
