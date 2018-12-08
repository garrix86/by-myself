

!function ($) {
    $(function(){
        $('#myCarousel.slide').carousel({
            interval: 3500,
            pause: "hover"
        });
    });
}(window.jQuery)

$('input').focus(function(){
    $("#myCarousel").pause()
}) /* Will worry about restarting carousel on mouseout if I could get this pause working */

//Big logo
$(window).on("scroll", function() {
  var logo = $(".logo");

  logo.clearQueue();
  logo.stop();

  if ($(this).scrollTop() > 90) {
    logo.animate({opacity: 0}, 120);
  } else {
    logo.animate({opacity: 1}, 120);
  }
});

//Small logo
$(window).on("scroll", function() {
  var logo = $("#logo2");

  logo.clearQueue();
  logo.stop();

  if ($(this).scrollTop() > 128) {
    logo.animate({opacity: 1}, 120);
  } else {
    logo.animate({opacity: 0}, 50);
  }
});

//red button
$(document).ready(function () {
    $("#activate").click(function () {
            $("#activate").text(($("#activate").text() == 'Close') ? 'Read More' : 'Close');

    })

    $('#activate').click(function () {
        $('#test2').stop(true).slideToggle("slow");
    })
});

/* Fade title on div*/

$(function() {
  $('#grid .one').hover(function() {
    $('.one h4').fadeOut(150);
      }, function() {
    $('.one h4').fadeIn();
  });
});

$(function() {
  $('#grid .two').hover(function() {
    $('.two h4').fadeOut(150);
      }, function() {
    $('.two h4').fadeIn();
  });
});

$(function() {
  $('#grid .three').hover(function() {
    $('.three h4').fadeOut(150);
      }, function() {
    $('.three h4').fadeIn();
  });
});

$(function() {
  $('#grid .four').hover(function() {
      $('.four h4').fadeOut(150);
    }, function() {
      $('.four h4').fadeIn();
  });
});

/***chevron-up***/

$(document).ready(function(){
    var offset = 450;


    $(window).scroll(function(){
      if($(this).scrollTop() > offset){
        $('.to-top').fadeIn();
      } else {
        $('.to-top').fadeOut();
      }
    });

    $('.to-top').click(function(){
      $('html,body').animate({scrollTop:0}, 1500)
    });

    $('#logo2').click(function(){
      $('html,body').animate({scrollTop:0}, 1500)
    });
});

//Navbar scrolling
$(document).ready(function(){

  const nav = document.querySelector('#main');
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if(window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
});
// Nav bar offset
$(document).ready(function(){


//nav bar
  $("body").click(function(event) {
          // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
           if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
              $('.navbar-collapse').collapse('toggle');
          }
    });

});

$(document).ready(function(){
  // Smooth scrolling
  var scrollLink = $('.scroll');


  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top -60//offset nav bar!important
    }, 1500 );
  });

  // Active link switching
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){

      var sectionOffset = $(this.hash).offset().top -70 ;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })

})
