$(document).ready(function(){
  // свойства слайдера
  $('.slider').slick({
    arrows: false,           // показывать кнопки переключения
    dots: true,             // показывать точки
    // adaptiveHeight: true,   // меняется высота в зависимости от высоты слайда
    // slidesToShow: 3,        // сколько показывать слайдов одновремено
    // slidesToScroll: 1,      // по сколько сладов пролистывать
    // speed: 900,             // скорость присвистывания слайдов
    // easing: 'ease',         // тип анимации
    // infinite: true,         // будет ли слайдер бесконечным
    // initialSlide: 0,        // первый слайд

    // autoplay: true,         // автоматическое проигрывание слайдов
    // autoplaySpeed: 2000,     // через какое время пролистывать слайд
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // pauseOnDotsHover: true,

    // draggable: true,         // перелистывание при свайпе на дектопах
    // swipe: true,             // перелистывание при свайпе на мобилках
    // touchThreshold: 5,       // усилие при котором сработает свайп
    // touchMove: true,         // возможность передвигать мышкой или свайпом

    // waitForAnimate: true,    // позволяет не ждать пока пролиснется слайд

    // centerMode: false,       // выделяет центральный слайд, дает ему класс - slick-center
    // variableWidth: false,    // слайды слипаются

    // rows: 1,
    // slidesPerRow: 1,

    // vertical: false,          //вертикальный слайдер
    // verticalSwiping: false,   // вертикальный свайп

    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ],
    // mobileFirst: false,

    // appendArrows: $(element),     // переместить стрелки в другой элемент
    // appendDots: $(element),       // переместить точки в другой элемент
  });

  // // события слайдера
  // $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide){
  //   console.log(currentSlide);
  // });

  // $('.slider').on('afterChange', function (event, slick, currentSlide){
  //   console.log(currentSlide);
  // });

  // // методы слайдера
  // $('.slider').slick('setPosition');

});
