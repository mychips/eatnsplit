var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
	<div class="row">
		<div class="signup-box">
			<h1 class="eatnsplit">Eat&Split</h1>
			<form class="signup-form">
				<h2>Regístrate para vivir la mejor experiencia en restaurantes</h2>
				<div class="section">
					<a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
					<a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar sesión</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input class="email" type="text" name="email" placeholder="Correo electrónico" />
					<input class="text" type="text" name="name" placeholder="Nombre completo" />
					<input class="text"  type="text" name="username" placeholder="Nombre de usuario" />
					<input class="password" type="text" name="password" placeholder="Contraseña" />
					<button class="btn waves-effect waves-light btn-flat btn-signup" type="submit">Regístrate</button>
				</div>
			</form>	
		</div>
	</div>
	<div class="row">
		<div class="login-box">
			¿Tienes una cuenta? <a href="/signin" class="l-signin">Entrar</a>
		</div>
	</div>
</div>`;

module.exports = landing(signupForm);