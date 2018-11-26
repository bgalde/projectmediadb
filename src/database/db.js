var mysql      = require('mysql');
var database = "projectmediadb";
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'admin',
    password : 'Secur3Passw0rd',
    database : database
});

module.exports=connection;
