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
      slideshow.current = slideshow.images.length - slideshow.gridsize;
    }
    // const data = slideshow.images[slideshow.current].title + ', ' +
    //            slideshow.images[slideshow.current].show + ',  ' +
    //            slideshow.images[slideshow.current].year;
    // slideshow.$data.text(data);
    for (let i = 0;i < slideshow.gridsize; i++) {
      const image = slideshow.current+i < slideshow.images.length ? `url(${slideshow.images[slideshow.current+i].path})` : 'none';
      $(`#i${i+1}`).css('background-image', image);
    }
  };

  slideshowView.handleButtons = function() {
    $('#left-side,#button-left').on('click', function() {
      slideshowView.changeImage(-slideshow.gridsize);
    });
    $('#right-side,#button-right').on('click', function() {
      slideshowView.changeImage(slideshow.gridsize);
    });
    $(document).keydown(function(e) {
      e.preventDefault();
      switch(e.which) {
      case 37: {
        slideshowView.changeImage(-slideshow.gridsize);
        break;
      }
      case 39:{
        slideshowView.changeImage(slideshow.gridsize);
        break;
      }
      default: return;
      }
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
