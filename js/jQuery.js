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
