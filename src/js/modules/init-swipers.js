// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function swiperInit() {
  offersSwiper();
  testimonialSwiper();
}

function offersSwiper() {
  const sectionOffers = document.querySelector('.offers');
  if (sectionOffers) {
    const swiper1 = new Swiper('#offers-swiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 30,

      breakpoints: {
        820: {
          centeredSlides: false,
          slidesOffsetBefore: 20,
          spaceBetween: 20,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '#offers-btn-next',
        prevEl: '#offers-btn-prev',
      },
    });
  }
}

function testimonialSwiper() {
  const sectionTestimonials = document.querySelector('.testimonials');
  if (sectionTestimonials) {
    const swiper2 = new Swiper('#testimonials-swiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 24,

      breakpoints: {
        820: {
          slidesPerView: 1,
        },
        1221: {
          centeredSlides: false,
          slidesPerView: 2,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '#testimonials-btn-next',
        prevEl: '#testimonials-btn-prev',
      },
    });
  }
}

export default swiperInit;
