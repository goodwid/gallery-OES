(function(module) {
  var routes = {};

  routes.setRouteMappings = function() {
    page.base('/');

    page('/', slideshowController.index);
    page('slideshow', slideshowController.index);
    page('about', aboutController.index);
    page('contact', contactController.index);

    page();
  };

  routes.setRouteMappings();

  module.routes = routes;

})(window);
