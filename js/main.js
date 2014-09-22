// global variables
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var navbarHeight = $('.navbar').height();
// smooth scrolling: Intro Button
$('#intro-btn').click(function() {
  $("html, body").animate({ scrollTop: windowHeight }, 1000);
  return false;
});

// smooth scrolling: hash links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if (this.hash == "#about-us") {
          $('#about-us').css("padding-top", "70px");
          $('html,body').animate({ scrollTop: (target.offset().top)+1}, 1000);
        } else {
          $('html,body').animate({ scrollTop: (target.offset().top)-navbarHeight }, 1000);
        }
        return false;
      }
    }
  });
});

// smooth scrolling: Back to Top
$('.back-to-top').click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

$(window).scroll(function() {

  // parallax
  var bg = document.getElementById("bg");
  var speed = 3;
  var yOffset = window.pageYOffset;
  bg.style.backgroundPosition = "0px "+ (yOffset / speed) * -1 + "px";

  // scroll transitions
  if($(this).scrollTop() > windowHeight){
    $('#nav').addClass("navbar-fixed-top");
    $('#nav').removeClass("navbar-static-top");
    $('#about-us').css("padding-top", "140px");

    if (windowWidth > 768) {
      $('.back-to-top').fadeIn();
    }
  } else {
    $('#nav').addClass("navbar-static-top");
    $('#nav').removeClass("navbar-fixed-top");
    $('#about-us').css("padding-top", "70px");
    if (windowWidth > 768) {
      $('.back-to-top').fadeOut();
    }
  }
  return false;
});

// mobile nav menu: close menu upon clicking on link
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    $('.navbar-collapse').removeClass('in');
  });
});
