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
    },
    insertdata: function(callback)
    {
        var insert = "INSERT INTO " + table_name + "(";
        var columns = column_names.split('+');
        var values = row_data.split('+');
        count = 0;
        columns.forEach(function(column) {
            insert += column;
            if (count < columns.length -1) {
                insert += ", ";
            }
            count++;
        });
        insert += ") values(";
        count = 0;
        values.forEach(function(value) {
            if(!isNaN(value)) {
                insert += value;
            }
            else {
                insert += "'" + value + "'";
            }
            if (count < values.length -1) {
                insert += ", ";
            }
            count++;
        });
        insert += ");";
        console.log(insert);
        return db.query(insert);
    }
}

module.exports=db_query;
