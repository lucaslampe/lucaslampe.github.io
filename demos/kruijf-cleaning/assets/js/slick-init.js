$(document).ready(function(){
    $('.slider-area').slick({
      centerMode: true,
      slidesToShow: 1,
      autoplay: true,
      variableWidth: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
          {
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
          }
          }
      ]
      });
  });