const routes = require('express').Router();
const db_query = require('../database/db_query');

routes.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

routes.get('/api/db', (req, res) => { 
    db_query.gettables((err, rows) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
});

module.exports = routes;