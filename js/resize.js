
$(document).ready(function(){
  if ($(window).width() > 415) {
    $('.preview-one-slider').addClass('width252');
  }
  $('.block-one-slider .preview-one-slider').width($(window).width()); 
  $('.one-section').height($(window).width()/2.47);
  $('.block-around-one-section ').height($('.block-around-one-section').width());
  $('.block-one-slider').offset({ top: $('.one-section').height()/1.05});
  $('.block-desciption-one-section').offset({ top: $('.one-section').height()/2.8});
  $('.block-around-one-section ').offset({ top: $('.one-section').height()/1.5});
  $('.b-district').height($(window).width()/7.5);
  $('.slider').height($('.slider').width()/1.5);
  $('.slider .bx-wrapper .bx-viewport').height($('.slider').height());
  $('.b-about .bx-wrapper img').height($('.slider').height());
  $('.b-about .bx-wrapper img').width($('.slider').width());
  $('.map').height($('.map-options').height());
  $('.b-info').height($('.b-info').width()/1.38);
  $('.b-percents').width($(window).width()/5.34);
  $('.b-percents').height($('.b-percents').width()/2.21);
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
    $('.one-section').height($(window).width()/2.47);
    $('.block-around-one-section ').height($('.block-around-one-section').width());
    $('.block-one-slider').offset({ top: $('.one-section').height()/1.05});
    $('.block-desciption-one-section').offset({ top: $('.one-section').height()/2.8});
    $('.block-around-one-section ').offset({ top: $('.one-section').height()/1.5});
    $('.b-district').height($(window).width()/7.5);
    $('.slider').height($('.slider').width()/1.5);
    $('.slider .bx-wrapper .bx-viewport').height($('.slider').height());
    $('.b-about .bx-wrapper img').height($('.slider').height());
    $('.b-about .bx-wrapper img').width($('.slider').width());
    $('.map').height($('.map-options').height());
    $('.b-info').height($('.b-info').width()/1.38);
    $('.b-percents ').width($(window).width()/5.34);
    $('.b-percents').height($('.b-percents').width()/2.21);
    
  });
  
});

