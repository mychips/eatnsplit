var yo = require('yo-yo');
var layout = require('../layout');
var carrusel = require('../res-carrusel');

module.exports = function (pictures) {
	var el = yo`<div class="container timeline">
		<div class="row">
			<div class="col s12 m10 offset-m1 l6 offset-l3">
				${pictures.map(function () {
					return carrusel;
				})}
			</div>
		</div>
	</div>`;

	return layout(el);
}