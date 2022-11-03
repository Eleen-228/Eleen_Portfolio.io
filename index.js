window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var n = 0; n < reveals.length; n++) {
    var windowHeight = window.innerHeight;
    // console.log(`windowheight: ${windowHeight}`);
    var revealTop = reveals[n].getBoundingClientRect().top;
    // console.log(`revealtop: ${revealTop}`);
    let revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[n].classList.add('active');
    } else {
      reveals[n].classList.remove('active');
    }
  }
}

// Preloader Js
let loader = document.querySelector('.loader');
window.addEventListener('load', vanish);
function vanish() {
  setTimeout(() => {
    loader.classList.add('disappear');
    document.body.classList.remove('scrollDisabled');
  }, 6500);
}
