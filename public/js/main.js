// global variables
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var navbarHeight = $('.navbar').height();
var firstSecPadding = (windowWidth > 640 ? 75 : 50);

// mobile nav menu: close menu upon clicking on link
$('a[href*=#]:not([href=#])').click(function() {
  $('.navbar-collapse').removeClass('in');
});

// scroll transitions
$(window).scroll(function() {
  var yOffset = $(this).scrollTop();

  if (yOffset > windowHeight){
    $('#nav').addClass("navbar-fixed-top").removeClass("navbar-static-top");
    $('#about-us').css("padding-top", "100px");
    if (windowWidth > 640) {
      $('#back-to-top').fadeIn();
    }
  } else {
    $('#nav').addClass("navbar-static-top").removeClass("navbar-fixed-top");
    $('#about-us').css("padding-top", firstSecPadding);
    if (windowWidth > 640) {
      $('#back-to-top').fadeOut();
    }
  }

  // dynamically changing active navbar links
  $('.link').each(function (event) {
    if (yOffset >= $($(this).attr('href')).offset().top - navbarHeight) {
      $('.link').not(this).removeClass('active');
      $(this).addClass('active');
    }
  });
});

// smooth scrolling: Intro Button
$('#intro-btn').click(function() {
  $("html, body").animate({ scrollTop: windowHeight }, 1000);
});

// smooth scrolling: brand
$('.navbar-brand').click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

// smooth scrolling: Back to Top
$('#back-to-top').click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

// smooth scrolling: hash links
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      if (this.hash == "#about-us") {
        $('#about-us').css("padding-top", firstSecPadding);
        $('html, body').animate({ scrollTop: target.offset().top }, 1000);
      } else {
        $('html, body').animate({ scrollTop: (target.offset().top - navbarHeight + 1) }, 1000);
      }
    }
  }
});
