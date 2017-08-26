/* globals Art slideshow slideshowView  */
(function(module) {
  var slideshowController = {};

  Art.fetchAll();

  slideshowController.index = function() {
    $('main > section').hide();
    $('#slideshow').show();
    slideshow.populateSlideshow(Art.all);
    slideshowView.changeImage(1000);
  };

  module.slideshowController = slideshowController;
})(window);
