var express = require('express');
var app = express();

app.get("/" , function(req , res){
	console.log("Someone requested us!");
	res.send("You've reached the home page!")
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
