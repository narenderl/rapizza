
(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
        settings = $.extend({
            format: "dropdown",
            sticky: false
        }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function() {
                var mediasize = 768;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function($) {
    $(document).ready(function() {
        $("#cssmenu").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);


$(document).ready(function() {
    $('.cart-text').removeClass('has-sub');
    $('.cart-text span').removeClass('submenu-button');
});


var currentX = '';
var currentY = '';
var movementConstant = .050;
$('.mouse').mousemove(function(e) {
  if(currentX == '') currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
   if(currentY == '') currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY; 
  $('.mouse').each(function(i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
	  var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
	  var newY = $(el).position().top + movementy;
      $(el).css('left', newX + 'px');
	  $(el).css('top', newY + 'px');
  });
});

$(document).ready(function() {
    $('.prdct-slider').owlCarousel({
        loop: true,
        autoplay:true,
        nav: false,
        margin: 10,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })
})

    $(document).ready(function () {
        $('.product-inner').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: false,
                    dots: true,
                    margin: 20
                }
            }
        })
    });


// Header Fixed //

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 250){  
//         $('.navigtaion').addClass("sticky");
//     }
//     else{
//         $('.navigtaion').removeClass("sticky");
//     }
// });

$(document).ready(function() {
    $('.clients-logo').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    responsiveClass: true,
    responsive: {
    0: {
    items: 2,
    nav: false
    },
    600: {
    items: 4,
    nav: false
    },
    1000: {
    items:6,
    nav: true,
    margin: 30
    }
    }
})
})