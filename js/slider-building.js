
$(document).ready(function(){
  if ($(window).width() > 415) {
    $('.preview-one-slider').addClass('width252');
  }
  $('.block-one-slider .preview-one-slider').width($(window).width()); 
  $('.slider').height($('.slider').width()/1.9);
  $('.slider .bx-wrapper .bx-viewport').height($('.slider').height());
  $('.b-about .bx-wrapper img').height($('.slider').height());
  $('.menu-toggle').click(function() {
    $('ul').toggleClass('opening');
    $(this).toggleClass('open');
  });
  $(window).resize(function(){
    if ($(window).width() > 415) {
     $('.preview-one-slider').addClass('width252');
    }
    else {
     $('.block-one-slider .preview-one-slider').width($(window).width());
    } 
    $('.slider').height($('.slider').width()/1.9);
    $('.slider .bx-wrapper .bx-viewport').height($('.slider').height());
    $('.b-about .bx-wrapper img').height($('.slider').height());
   
    
  });
  
});

