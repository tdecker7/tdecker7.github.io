// document.addEventListener('DOMContentLoaded', () => {
//   let elems = document.querySelectorAll('.parallax'),
//   instances = M.Parallax.init(elems, {}),
//   loader = document.getElementById('loader');

//   loader.classList = "shrink";
//   document.querySelectorAll('#content')[0].scrollIntoView({
//     behavior: 'smooth'
//   });

//   document.querySelectorAll('a[href="#about"]')[0].addEventListener('click', (event) => {
//     event.preventDefault();
//     document.querySelector('#about').scrollIntoView({
//       behavior: 'smooth'
//     });
//   });

// });

window.onload = function() {
  var content = document.getElementById('content')
  content.style.opacity = 1;
  content.style.display = 'inherit';
  content.scrollIntoView({ behavior: 'smooth' });
}
