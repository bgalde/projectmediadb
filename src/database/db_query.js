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
    },
    //this.editResults = this.http.get(this.url + "/update/" + this.table + "/set/" + col + "/" + res.replace(/\s/g, "%20") + "/" + this.primaryField + "/" + value);
    /*
     *UPDATE Customers
     *SET ContactName='Alfred Schmidt', City='Frankfurt'
     *WHERE CustomerID=1;
     */
    updatedata: function(callback)
    {
        var updateRecord = "UPDATE " + table_name + " ";
        var set = "SET ";
        var where = " WHERE ";
        var columns = column_names.split('+');
        var values = row_data.split('+');
        var primaryKey = key_field;
        var primaryValue = key_value;
        var setRecord ="";
        var ignore;
        var updateQuery;

        for(var i = 0; i < columns.length; i++){
                if(columns[i] != primaryKey){
                    if(!isNaN(values)){
                        setRecord += columns[i] + "=" + values[i];
                    } else {
                        setRecord += columns[i] + "=" + "'" + values[i] + "'";
                    }
                    if(i < values.length -1){
                        setRecord += ", ";
                    }
                }
        }

        where += primaryKey + "=" + primaryValue + ';';
        updateQuery = updateRecord + set + setRecord + where;
        console.log(updateQuery);
        return db.query(updateQuery);
    },
    deletedata: function(callback)
    {
        var deleteRecord = "Delete from " + table_name + " where " + column_name + " = " + key_value + ";";
        console.log(deleteRecord);
        return db.query(deleteRecord);
    }
}

module.exports=db_query;
