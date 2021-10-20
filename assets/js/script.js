$(document).ready(function() {
/*=======================Slider========================*/
	$('.example__slider').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		dots: true,
  		prevArrow: $('.example__arrow_prev'),
		nextArrow: $('.example__arrow_next'),
		responsive: [
     {
       breakpoint: 769,
      settings: {
        infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		dots: true,
  		prevArrow: $('.example__arrow_prev'),
		nextArrow: $('.example__arrow_next'),
		}
      },
      {
       breakpoint: 547,
      settings: {
        infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		dots: true,
  		prevArrow: $('.example__arrow_prev'),
		nextArrow: $('.example__arrow_next'),
		}
      },
      {
       breakpoint: 415,
      settings: {
        infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		prevArrow: $('.example__arrow_prev'),
		nextArrow: $('.example__arrow_next'),
		}
      }
  ]
	});

/*=======================/slider========================*/
});