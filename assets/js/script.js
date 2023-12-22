// Swiper-1
var swiper = new Swiper(".business-swiper", {
  slidesPerView: 3,
      spaceBetween: 30,
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     
      mousewheel: true,
      keyboard: true,
    });



// Swiper-2
var swiper = new Swiper(".expert-swiper", {
  slidesPerView: 3,
      spaceBetween: 30,
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      mousewheel: true,
      keyboard: true,
    });


// Swiper-3
var swiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});



