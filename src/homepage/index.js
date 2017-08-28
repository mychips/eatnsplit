var page = require('page');
var

page('/', function (ctx, next) {
	var main = document.getElementById('main-container');
	main.innerHTML = '<a href="/signup">Signup</a>';
})