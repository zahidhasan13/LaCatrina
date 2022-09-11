// javascript to make navbar responsive
const navbar = document.querySelector(".navbar");
const menuBars = document.querySelector(".fa-bars");
console.log(menuBars);
menuBars.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// crousal

$(document).ready(function (e) {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    margin: 10,
    autoplay: false,
    smartSpeed: 500,
    nav: true,
    dots: false,
    navText: [
      '<img src="./images/prev.png" alt="">',
      '<img src="./images/next.png" alt="">',
    ],
    lazyLoad: true,
    responsive: {
      0: {
        stagePadding: 0,
        loop: true,
        responsiveClass: true,
        dots: true,
        autoHeight: true,
        nav: false,
        items: 1,
      },
      479: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  });
});
