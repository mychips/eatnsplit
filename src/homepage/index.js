var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
	title('Eat & Split');
	var main = document.getElementById('main-container');
	
	var pictures = [
		{
			user: {
				username: 'Rodizio'
				
			}
		}
	];

	empty(main).appendChild(template(pictures));
})