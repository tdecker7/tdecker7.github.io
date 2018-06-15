document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.parallax'),
  instances = M.Parallax.init(elems, {});

  document.querySelectorAll('a[href="#about"]')[0].addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });
})
