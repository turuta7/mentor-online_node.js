var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bfbd21312c776d",
  password: "e81997a8",
  database: "heroku_7f92291dbf7c306",
  port: '3306'
});

function insert_user(a,b,c,d,e) {

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO user (login, password, first_name, last_name, e_mail) VALUES ?";
  var post = [
    [a,b,c,d,e]
  ];
  con.query(sql, [post], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    con.end();
  });
});
}


const a ="Turuta7 ";
const b = 'tur098';
const c = 'Alex';
const d = 'Turuta';
const e = 'turuta@2mcl.com';


insert_user(a,b,c,d,e);