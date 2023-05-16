const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "database-1.cv0rss6qngwy.ap-southeast-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "Plmokn123",
  database: "user_informations",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
