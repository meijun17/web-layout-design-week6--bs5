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



  (function () {
    Datepicker.locales['zh-TW'] = {
      days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      daysShort: ["日", "一", "二", "三", "四", "五", "六"],
      daysMin: ["日", "一", "二", "三", "四", "五", "六"],
      months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      today: "Today",
      clear: "Clear",
      titleFormat: "y年MM月",
      format: "yyyy/mm/dd",
      weekStart: 0
    }
  })();
  
  
  const elem = document.querySelector('input[name="datepicker"]');
  const datepicker = new Datepicker(elem, {
    language: 'zh-TW',
    prevArrow: '<span class="material-icons">keyboard_double_arrow_left</span>',
    nextArrow: '<span class="material-icons">keyboard_double_arrow_right</span>',
    autohide: true,
  }); 

});

