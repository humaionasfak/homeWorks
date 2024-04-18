$(function () {
  //* jquery start
  $(".banner_slider").slick({
    prevArrow: `.right_arrows`,
    nextArrow: `.left_arrows`,
    dots: true,
    dotsClass: "bannerDots container",
  });
  //* jquery end
  $(".sm_banner_slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  //* jquery end
});
