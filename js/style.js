document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  }) 


  // banner
  $('.ban-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    autoplaySpeed: 1500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });
  // banner





  // gallery slider
  $('.gallery-card').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    centerMode:true,
    centerPadding:0,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });
  // gallery


  // why choose us
  $('.choose-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    autoplaySpeed: 1500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });
  // why choose us


  //testimonial slider

  $('.test-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:'.t-left',
    nextArrow:'.t-right',

  });

  //back to top
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
  //back to top


  //fixed menu

    let menu = document.getElementById('menu');
    let offset = menu.offsetHeight;
    window.onscroll = function() {
        if (window.scrollY > offset-20) {
            menu.classList.add("sticky");
        } else if(window.scrollY < offset-30) {
            menu.classList.remove("sticky");
        }
    }
  //fixed menu



  // before/after image slider

  document.querySelector(".compare #compare-ip").addEventListener("input", function(e){
    document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
  })
  
  document.querySelector(".compare #compare-ip").addEventListener("change", function(e){
    document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
  })
  
  //2nd item
  document.querySelector(".compare2 #compare-ip").addEventListener("input", function(e){
    document.querySelector(".compare2 .before .after").style.width = (+e.target.value) + "px";
  })
  
  document.querySelector(".compare2 #compare-ip").addEventListener("change", function(e){
    document.querySelector(".compare2 .before .after").style.width = (+e.target.value) + "px";
  })
  //1st item
  document.querySelector(".compare1 #compare-ip").addEventListener("input", function(e){
    document.querySelector(".compare1 .before .after").style.width = (+e.target.value) + "px";
  })
  
  document.querySelector(".compare1 #compare-ip").addEventListener("change", function(e){
    document.querySelector(".compare1 .before .after").style.width = (+e.target.value) + "px";
  })
 
  //4th
  document.querySelector(".compare3 #compare-ip").addEventListener("input", function(e){
    document.querySelector(".compare3 .before .after").style.width = (+e.target.value) + "px";
  })
  
  document.querySelector(".compare3 #compare-ip").addEventListener("change", function(e){
    document.querySelector(".compare3 .before .after").style.width = (+e.target.value) + "px";
  })

  
  //gallery
  const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);



//counter
// (function ($) {
// 	$.fn.countTo = function (options) {
// 		options = options || {};
		
// 		return $(this).each(function () {
// 			// set options for current element
// 			var settings = $.extend({}, $.fn.countTo.defaults, {
// 				from:            $(this).data('from'),
// 				to:              $(this).data('to'),
// 				speed:           $(this).data('speed'),
// 				refreshInterval: $(this).data('refresh-interval'),
// 				decimals:        $(this).data('decimals')
// 			}, options);
			
// 			// how many times to update the value, and how much to increment the value on each update
// 			var loops = Math.ceil(settings.speed / settings.refreshInterval),
// 				increment = (settings.to - settings.from) / loops;
			
// 			// references & variables that will change with each update
// 			var self = this,
// 				$self = $(this),
// 				loopCount = 0,
// 				value = settings.from,
// 				data = $self.data('countTo') || {};
			
// 			$self.data('countTo', data);
			
// 			// if an existing interval can be found, clear it first
// 			if (data.interval) {
// 				clearInterval(data.interval);
// 			}
// 			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
// 			// initialize the element with the starting value
// 			render(value);
			
// 			function updateTimer() {
// 				value += increment;
// 				loopCount++;
				
// 				render(value);
				
// 				if (typeof(settings.onUpdate) == 'function') {
// 					settings.onUpdate.call(self, value);
// 				}
				
// 				if (loopCount >= loops) {
// 					// remove the interval
// 					$self.removeData('countTo');
// 					clearInterval(data.interval);
// 					value = settings.to;
					
// 					if (typeof(settings.onComplete) == 'function') {
// 						settings.onComplete.call(self, value);
// 					}
// 				}
// 			}
			
// 			function render(value) {
// 				var formattedValue = settings.formatter.call(self, value, settings);
// 				$self.html(formattedValue);
// 			}
// 		});
// 	};
	
// 	$.fn.countTo.defaults = {
// 		from: 0,               // the number the element should start at
// 		to: 0,                 // the number the element should end at
// 		speed: 1000,           // how long it should take to count between the target numbers
// 		refreshInterval: 100,  // how often the element should be updated
// 		decimals: 0,           // the number of decimal places to show
// 		formatter: formatter,  // handler for formatting the value before rendering
// 		onUpdate: null,        // callback method for every time the element is updated
// 		onComplete: null       // callback method for when the element finishes updating
// 	};
	
// 	function formatter(value, settings) {
// 		return value.toFixed(settings.decimals);
// 	}
// }(jQuery));

// jQuery(function ($) {
//   // custom formatting example
//   $('.count-number').data('countToOptions', {
// 	formatter: function (value, options) {
// 	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
// 	}
//   });
  
//   // start all the timers
//   $('.timer').each(count);  
  
//   function count(options) {
// 	var $this = $(this);
// 	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
// 	$this.countTo(options);
//   }
// });

//more

// $('.more_slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows:false,
//   dots:true
// });



// $('.more_slider2').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows:false,
//   dots:true
// });


//CLIPPING PAGE GALLERY
// const imgContent2 = document.querySelectorAll('.img-content-hover2');

// function showImgContent(e) {
//   for(var i = 0; i < imgContent.length; i++) {
//     x = e.pageX;
//     y = e.pageY;
//     imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
//   }
// };

// document.addEventListener('mousemove', showImgContent);
  





 