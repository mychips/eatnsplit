var page = require('page');
var yo = require('yo-yo');

var main = document.getElementById('main-container');

page('/', function (ctx, next) {
	main.innerHTML = '<a href="/signup">Signup</a>'
})

page('/signup', function (ctx, next) {
	var el = yo`<div class="container">
			<div class="row">
				<div class="col s10 push-s1">
					<div class="row">
						<div class="col m5 hide-on-small-only">
							<img class="iphone" src="iphone.png" />
						</div>
						<div class="col s12 m7">
							<div class="row">
								<div class="signup-box">
									<h1 class="eatnsplit">Eat&Split</h1>
									<form class="signup-form">
										<h2>Regístrate para vivir la mejor experiencia en restaurantes</h2>
										<div class="section">
											<a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
											<a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
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
								¿Tienes una cuenta? <a href="/signin" class="l-signin">Entrar</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;

	main.appendChild(el);
})

page();