var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
	title('Eat & Split');
	var main = document.getElementById('main-container');
	
	var pictures = [
		1, 2, 3, 4, 5
	];

	empty(main).appendChild(template(pictures));
})