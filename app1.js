var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'join_us'   // the name of your db
});


app.get("/" , function(req , res){
	var q = "select count(*) as count from users ";
	connection.query(q , function(err , results){
		if (err) throw err;
		var count = results[0].count;
		res.send("We have " + count + " users in our database");
	});
});


app.get("/joke" , function(req , res){
	var joke = "what do you call a dog tht does magic tricks? a labracadabrador.";
	res.send(joke);
});


app.get("/random_num", function(req, res){
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});

app.listen(3000 , function(){
	console.log("Server running on 3000!");
});
