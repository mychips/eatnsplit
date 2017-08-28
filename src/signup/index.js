var page = require('page');
var empty = require('empty-element');
var template = require('./template');

page('/signup', function (ctx, next) {
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
})