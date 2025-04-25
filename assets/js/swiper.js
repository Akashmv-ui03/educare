// BANNER TEXT SLIDER

const bannerTextSwiper = new Swiper(".banner-text-slider", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   BANNER LOGO SLIDER

const bannerLogoSwiper = new Swiper(".banner-logo-slider", {
    slidesPerView: 3, 
    spaceBetween: 30, 
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
  });


  // TEACHING

const teachinfSecSlider = new Swiper(".teaching-sec-slider", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// PROGRAMS SLIDER
const programsSlider = new Swiper(".programs-sec-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// SUBJECTS SLIDER
const subjectsSlider = new Swiper(".subjects-sec-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});


// COURSE SLIDER
const coursesSlider = new Swiper(".course-sec-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});


// TESTIMONIAL SLIDER
const testimonialSlider = new Swiper(".testimonial-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
