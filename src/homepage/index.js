var page = require('page');

page('/', function (ctx, next) {
	var main = document.getElementById('main-container');
	main.innerHTML = '<a href="/signup">Signup</a>';
})