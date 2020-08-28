(function (jQuery) {
  "use strict";

  /*-------------------------------------------------------------------------------
  Navbar 
  -------------------------------------------------------------------------------*/

  // function navbarFixed() {
  //   if (jQuery(".header_area").length) {
  //     jQuery(window).scroll(function () {
  //       var scroll = $(window).scrollTop();
  //       if (scroll) {
  //         jQuery(".header_area").addClass("navbar_fixed");
  //       } else {
  //         jQuery(".header_area").removeClass("navbar_fixed");
  //       }
  //     });
  //   }
  // }
  // navbarFixed();

  function offcanvasActivator() {
    if (jQuery(".bar_menu").length) {
      jQuery(".bar_menu").on("click", function () {
        jQuery("#menu").toggleClass("show-menu");
      });
      jQuery(".close_icon").on("click", function () {
        jQuery("#menu").removeClass("show-menu");
      });
    }
  }
  offcanvasActivator();

  jQuery(".offcanfas_menu .dropdown").on("show.bs.dropdown", function (e) {
    jQuery(this).find(".dropdown-menu").first().stop(true, true).slideDown(400);
  });
  jQuery(".offcanfas_menu .dropdown").on("hide.bs.dropdown", function (e) {
    jQuery(this).find(".dropdown-menu").first().stop(true, true).slideUp(500);
  });

  /*-------------------------------------------------------------------------------
  mCustomScrollbar js
  -------------------------------------------------------------------------------*/
  jQuery(window).on("load", function () {
    if (jQuery(".mega_menu_two .scroll").length) {
      jQuery(".mega_menu_two .scroll").mCustomScrollbar({
        mouseWheelPixels: 50,
        scrollInertia: 0,
      });
    }
  });

  /*-------------------------------------------------------------------------------
  case_studies_slider js
  -------------------------------------------------------------------------------*/
  // function caseStudies() {
  //   var CSlider = $(".case_studies_slider");
  //   if (CSlider.length) {
  //     CSlider.owlCarousel({
  //       loop: true,
  //       margin: 0,
  //       items: 3,
  //       autoplay: true,
  //       smartSpeed: 1000,
  //       responsiveClass: true,
  //       nav: false,
  //       dots: true,
  //       responsive: {
  //         0: {
  //           items: 1,
  //         },
  //         650: {
  //           items: 2,
  //         },
  //         776: {
  //           items: 3,
  //         },
  //         1199: {
  //           items: 3,
  //         },
  //       },
  //     });
  //   }
  // }
  // caseStudies();

  /*-------------------------------------------------------------------------------
  tooltip js
  -------------------------------------------------------------------------------*/
  if (jQuery('[data-toggle="tooltip"]').length) {
    jQuery('[data-toggle="tooltip"]').tooltip();
  }
  /*-------------------------------------------------------------------------------
  active dropdown
  -------------------------------------------------------------------------------*/
  function active_dropdown() {
    if (jQuery(window).width() < 992) {
      jQuery(".menu li.submenu > a").on("click", function (event) {
        event.preventDefault();
        jQuery(this).parent().find("ul").first().toggle(700);
        jQuery(this).parent().siblings().find("ul").hide(700);
      });
    }
  }
  active_dropdown();

  /*-------------------------------------------------------------------------------
  hamberger menu
  -------------------------------------------------------------------------------*/
  function hamberger_menu() {
    if (jQuery(".burger_menu").length) {
      jQuery(".burger_menu").on("click", function () {
        jQuery(this).toggleClass("open");
        jQuery("body").removeClass("menu-is-closed").addClass("menu-is-opened");
      });
      jQuery(".close, .click-capture").on("click", function () {
        jQuery("body").removeClass("menu-is-opened").addClass("menu-is-closed");
      });
    }
  }
  hamberger_menu();

  /*---------------navbar js ---------------*/
  jQuery("#landing_page ul li a,.scrolls,.menu_top").on("click", function (
    event
  ) {
    var $anchor = $(this);
    jQuery("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 75,
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Closes responsive menu when a scroll trigger link is clicked
  jQuery("#landing_page ul .nav-item:not(.dropdown) .nav-link").on(
    "click",
    function () {
      jQuery(".navbar-collapse").collapse("hide");
    }
  );

  function fAqactive() {
    jQuery(".faq_accordian_two .card").on("click", function () {
      jQuery(".faq_accordian_two .card").removeClass("active");
      jQuery(this).addClass("active");
    });
  }
  fAqactive();
})($);
