var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'admin',
    password : 'Secur3Passw0rd',
    database : 'projectmediadb'
});
module.exports=connection;