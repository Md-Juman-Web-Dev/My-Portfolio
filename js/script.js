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
