var yo = require('yo-yo');

module.exports = yo`<div class="carousel">
  <a class="carousel-item" href="#one!"><img src="rodizio.png"></a>
  <a class="carousel-item" href="#two!"><img src="Jangada.png"></a>
  <a class="carousel-item" href="#three!"><img src="bostons.png"></a>
  <a class="carousel-item" href="#four!"><img src="tratoria.jpg"></a>
  <a class="carousel-item" href="#five!"><img src="meson-del-angel.jpg"></a>
</div>`

$(document).ready(function(){
    $('.carousel').carousel();
});

// <div class="row">
//   <div class="col s12 m7">
//     <div class="card">
//       <div class="card-image">
//         <img class="activator" src="rodizio.png">
//         <span class="card-title">Card Title</span>
//       </div>
//       <div class="card-content">
//         <p>Aqui tendremos la información del restaurante incluso le podremos 
//         agregar ubicación y detalles pequeños pero importantes para el usuario.</p>
//       </div>
//       <div class="card-action">
//         <a href="#">This is a link</a>
//       </div>
//     </div>
//   </div>
// </div>`