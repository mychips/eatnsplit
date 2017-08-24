var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('Eat & Split');
})

app.listen(7000, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);
	console.log('Escuchando en el puerto 7000');
})