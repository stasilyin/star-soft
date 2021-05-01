new Swiper('.swiper-container', {
  slideClass: 'swiper-slide',
  wrapperClass: 'swiper-wrapper',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: 1,
});

export default Swiper;