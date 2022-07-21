var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));

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
		//res.send("We have " + count + " users in our database");
		res.render("home", {data : count} );
	});
});


app.post('/register', function(req,res){
 var person = {email: req.body.email};
 connection.query('INSERT INTO users SET ?', person, function(err, result) {
 console.log(err);
 console.log(result);
 res.redirect("/");
 });
})

app.listen(3000 , function(){
	console.log("Server running on 3000!");
});
