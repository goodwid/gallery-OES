/* globals page slideshowController aboutController */

(function(module) {
  const routes = {};

  routes.setRouteMappings = function() {
    page.base('/');

    page('/', slideshowController.index);
    page('slideshow', slideshowController.index);
    page('about', aboutController.index);

    page();
  };

  routes.setRouteMappings();

  module.routes = routes;

})(window);
