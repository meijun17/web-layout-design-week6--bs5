$(function() {
  const swiperProgram = new Swiper(".swiper-program", {
    slidesPerView: 4,
    spaceBetween: 8,
    //多欄
    breakpoints: {
        768: {
            slidesPerView: 8,
            spaceBetween: 8,
        },
        992: {
            slidesPerView: 14,
            spaceBetween: 16,
        }
    },
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000
    },
  });


    var feedbackSwiper = new Swiper(".feedbackSwiper", {
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".material-icons-next",
        prevEl: ".material-icons-prev",
      },
      pagination: {
        el: ".material-icons-pagination",
        clickable: true,
      },
    });


  // 課程輪播
  const classSwiper = new Swiper('.swiper-class', {
    loop: false,
    breakpoints: {
      360: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 16
      },
    },
    autoplay: {
      disableOnInteraction: false,
      delay: 3000
    },
  });

});

