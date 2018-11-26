 db = require('./db');

var db_query = {
    gettables: function(callback) 
    {
        return db.query('SHOW tables;', callback);
    }
}

module.exports=db_query;