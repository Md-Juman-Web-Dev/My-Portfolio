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

/* let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav .navLink');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY; // স্ক্রল অবস্থান
    let offset = sec.offsetTop - 150; // সেকশন শুরু
    let height = sec.offsetHeight; // সেকশনের উচ্চতা
    let id = sec.getAttribute('id'); // সেকশনের আইডি

    // সেকশনটির মধ্যে স্ক্রল অবস্থান থাকলে
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active'); // আগের active ক্লাস মুছে ফেলো
        document
          .querySelector(`header nav a[href*='${id}']`) // সম্পর্কিত লিঙ্ক খুঁজে বের করো
          .classList.add('active'); // নতুন active ক্লাস যোগ করো
      });
    }
  });
};
 */
