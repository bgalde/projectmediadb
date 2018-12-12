// import our database connection
db = require('./db');

// variable that will hold all the functions that will explicitly communicate with the database
var db_query = {
    gettables: function(callback, db_name=db.config.connectionConfig.database) 
    {
        return db.query('SELECT TABLE_NAME AS name FROM information_schema.TABLES WHERE TABLE_SCHEMA = "' + db_name + '";', callback);
    },
    gettable: function(callback)
    {
        console.log(callback);
        return db.query('SELECT * from ' + table_name, callback);
    },
    gettabledesc: function(callback)
    {
        console.log(callback);
        return db.query('DESCRIBE ' + table_name, callback);
    }
}

module.exports=db_query;
