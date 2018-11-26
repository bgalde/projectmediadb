 db = require('./db');

var db_query = {
    gettables: function(callback, db_name=db.config.connectionConfig.database) 
    {
	console.log(db_name);
        return db.query('SELECT TABLE_NAME AS name FROM information_schema.TABLES WHERE TABLE_SCHEMA = "' + db_name + '";', callback);
    }
}

module.exports=db_query;
