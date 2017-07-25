// import http package
var http = require("http");
var PORTgood = 7000;
var PORTbad = 7500;
var niceThings = ["Your smile is ok", "You smell decent", "Your eyebrows are managed"];
var meanThings = ["You do not deserve true love", "Your voice could not be more boring", "Why do you even exist"];
var randomInd;

function compliment(request, response) {
	randomInd = Math.floor((Math.random() * niceThings.length));
	response.end(niceThings[randomInd]);
}

function belittle(request, response) {
	randomInd = Math.floor((Math.random() * meanThings.length));
	response.end(meanThings[randomInd]);
}

var serverGood = http.createServer(compliment);

serverGood.listen(PORTgood, function() {
	console.log("Server listening on : https://localhost:%s", PORTgood);
});

var serverBad = http.createServer(belittle);

serverBad.listen(PORTbad, function() {
	console.log("Server listening on : https://localhost:%s", PORTbad);
});