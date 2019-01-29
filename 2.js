var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bfbd21312c776d",
  password: "e81997a8",
  database: "heroku_7f92291dbf7c306",
  port: '3306'
  
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    con.end();
    });
    
});
 