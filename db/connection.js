const mysql = require('mysql2');

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees"
});

dbConnect.connect(function(err) {
    if (err) throw err;
    console.log("Success")
});

module.exports = dbConnect;