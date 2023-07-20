/* Custom JS File */
	jQuery(document).ready(function($) {
  // Testimonial slider 
	$('.theme_works_slider-container').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	  autoplay: true,
      autoplaySpeed: 2000,
	  responsive: [
	  	{
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	});
  // Slider 
	$('.slider-items').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	  autoplay: true,
      autoplaySpeed: 2000,
	  });
	  
	// Logo Slider 
	$('.theme_logo_slider').slick({
	  infinite: true,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	  autoplay: true,
      autoplaySpeed: 2000,
	  });
}); 

/* Custom JS File */
jQuery(document).ready(function($) {
$('.testimonials-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
      {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  }); 
});