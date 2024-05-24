$(function () {
  //* jquery start
  $(".banner_slider").slick({
    prevArrow: `.right_arrows`,
    nextArrow: `.left_arrows`,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "bannerDots ",
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
  });
  //* jquery end
  $(".sm_banner_slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  //* jquery end
});
// hero section end

// tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// home page product img

$(".slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: ".left_arrow",
  nextArrow: ".right_arrow",
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//? offer slider
$(".offer_card").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: false,
  nextArrow: false,
  dotsClass: "slick-dod container",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    ,
  ],
});

// News section slider
$(".news_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  dotsClass: "slick-dod container",
  slidesToScroll: 2,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// home page end

// about page start
$(".about-slider-one").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// customer slider
$(".customar-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  prevArrow: false,
  nextArrow: false,
  dotsClass: "container aboutPage-slick-dod",
  autoplay: true,
  autoplaySpeed: 3000,
});
// user slider
$(".user-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dotsClass: "container aboutPage-slick-dod",
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
// about page end
// shop page start
// shop details

$(".small-img-grop").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  infinite: true,
  prevArrow: ".left-arrow",
  nextArrow: ".right-arrow",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// shop page end

// related product section start
$(".related-product-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  prevArrow: ".left-arrow",
  nextArrow: ".right-arrow",
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// custom scroll bar
$(function () {
  $(".table").mCustomScrollbar({
    theme: "rounded-dots-dark",
  });
});

// blog section start

$(".blog-sider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".left-arrow",
  nextArrow: ".right-arrow",
  autoplay: true,
  autoplaySpeed: 4000,
});
