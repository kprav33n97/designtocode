/* Custom JS File */
	jQuery(document).ready(function($) {
	// Menu close js	
	$("#menu-close-button").click(function(){
		$(".main-navigation.toggled").removeClass("toggled");
		$("#menu-button").removeClass("change");
		$(this).addClass("change");
	});
	// paroller js
	$('.wpem_yoga_theme-parallax-effect').paroller();
	// Magnafic Popup js
	$(document).ready(function() {
		$('.popup-youtube').magnificPopup({
	    type: 'iframe'
	  });
	});
    // Testimonial slider 
	$('.theme-testimonials-slider').slick({
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
    // Slider 
	$('.slider-items').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	  });
}); 