var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bfbd21312c776d",
  password: "e81997a8",
  database: "heroku_7f92291dbf7c306",
  port: '3306'
});

function delet_user() {
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DELETE FROM user WHERE login = 'adfgfgfdh'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    con.end();
  });
});
}

delet_user();