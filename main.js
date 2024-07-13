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
	  responsive: [
		{
		breakpoint: 993,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		}
	  }
	]
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


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});