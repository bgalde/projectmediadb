// express.Router() is used for routing traffic 
const routes = require('express').Router();
// db_query provides our SQL queries to the MySQL database
const db_query = require('../database/db_query');

// May not be needed
routes.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

// Function that will return a json of the tables in the database.
// [{'name': 'table_one'},{'name': 'table_two'}]
routes.get('/api/db/getTables', (req, res) => { 
    db_query.gettables((err, rows) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
});

// function that will get the contents of a table.
routes.get('/api/db/table/:table_name', (req, res) => {
    table_name = req.params.table_name;
    console.log('Getting contents for table ' + table_name);
    db_query.gettable((err, rows, table_name) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
});

// function that will get the description of a table.
routes.get('/api/db/tableDesc/:table_name', (req, res) => {
    table_name = req.params.table_name;
    console.log('Getting description for table ' + table_name);
    db_query.gettabledesc((err, rows, table_name) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
});


module.exports = routes;
