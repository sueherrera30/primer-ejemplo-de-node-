/*importamos express y path*/
var express = require("express");
var path = require("path");
/*iniciamos express*/
var app = express();
/*declaramos endpoint*/
app.get('/', function(req,res){
	res.sendFile(__dirname + "/index.html");
});

 /*creamos ruta estatica */
app.use("/static", express.static(path.join(__dirname,"node_modules")));
app.use("/static", express.static(path.join(__dirname,"assets")));

/*escuchamos en puerto 8080*/
app.listen(8080);