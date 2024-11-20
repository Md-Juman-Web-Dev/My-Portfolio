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

let sideBar = document.querySelector('.sideber');

document.addEventListener('click', function (event) {
  if (sideBar.classList.contains('show')) {
    if (!sideBar.contains(event.target)) {
      sideBar.classList.remove('show');
    }
  }
});

let body = document.querySelector('body');
let darkMode = document.querySelector('.switch input');

darkMode.addEventListener('change', function () {
  if (darkMode.checked) {
    body.classList.add('derkMode');
  } else {
    body.classList.remove('derkMode');
  }
});
