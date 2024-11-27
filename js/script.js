var typed = new Typed('.typing', {
  strings: ['Web Designer', 'Web Developer', 'UI/UX Designer'],
  typeSpeed: 80,
  backSpeed: 80,
});

//* Back To Top Button

let backTop = document.querySelector('.backtop');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    backTop.classList.add('show');
    backTop.classList.remove('hide');
  } else {
    backTop.classList.add('hide');
    backTop.classList.remove('show');
  }
});
backTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// *Sid Bar

let sideBar = document.querySelector('.sideber');
document.addEventListener('click', function (event) {
  if (sideBar.classList.contains('show')) {
    if (!sideBar.contains(event.target)) {
      sideBar.classList.remove('show');
    }
  }
});

//*Dark Mode And Light Mode

let body = document.querySelector('body');
let darkMode = document.querySelector('.switch input');
darkMode.addEventListener('change', function () {
  if (darkMode.checked) {
    body.classList.add('derkMode');
  } else {
    body.classList.remove('derkMode');
  }
});

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $('nav').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
  }
});

$(window).on('load', function () {
  $('#preloader').fadeOut();
});
