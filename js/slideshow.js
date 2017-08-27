(function(module) {

  const slideshow = {};
  const slideshowView = {};

  slideshow.gridsize = 8;
  slideshow.current = 0;
  slideshow.images = [];
  slideshow.$image = $('#slideshow-image');
  slideshow.$data = $('#info');


  slideshow.populateSlideshow = function(rawData) {
    slideshow.images = rawData;
  };

  slideshowView.changeImage = function(num) {
    slideshow.current += num;
    if (slideshow.current > slideshow.images.length - 1) {
      slideshow.current = 0;
    }
    if (slideshow.current <= -1) {
      slideshow.current = slideshow.images.length - 1;
    }
    // const data = slideshow.images[slideshow.current].title + ', ' +
    //            slideshow.images[slideshow.current].show + ',  ' +
    //            slideshow.images[slideshow.current].year;
    // slideshow.$data.text(data);
    for (let i = 0;i < slideshow.gridsize; i++) {
      $(`#i${i+1}`).css('background-image', `url(${slideshow.images[slideshow.current+i].path || ''})`);
    }
  };

  slideshowView.handleButtons = function() {
    $('#button-left').on('click', function() {
      slideshowView.changeImage(-slideshow.gridsize);
    });
    $(' #button-right').on('click', function() {
      slideshowView.changeImage(slideshow.gridsize);
    });
    $(document).keydown(function(e) {
      switch(e.which) {
      case 37: {
        slideshowView.changeImage(-slideshow.gridsize);
        break;
      }
      case 39:{
        slideshowView.changeImage(slideshow.gridsize);
        break;
      }
      default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
  };

  slideshowView.init = function(show) {
    slideshowView.handleButtons();
    slideshow.populateSlideshow(show);
    slideshowView.changeImage(0);
  };

  module.slideshow = slideshow;
  module.slideshowView = slideshowView;
}(window));
