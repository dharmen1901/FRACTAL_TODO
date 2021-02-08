var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test",
    database: "testTODO"
});

module.exports = con;