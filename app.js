var mysql = require('mysql');
var faker = require('faker');
 
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});
 
 
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();

//making a simple route for connection in the backend using express
var express = require('express');
var app = express();
 
app.get("/", function(req, res){
 res.send("HELLO FROM OUR WEB APP!");
});
 
app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
