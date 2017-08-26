/* globals artworkView */

(function(module) {

  function Art (opts) {
    const pathPrefix = 'https://s3-us-west-2.amazonaws.com/rossellestudios/';
    // const pathPrefix = '/sized-images/';

    this.title = opts.title;
    this.media = opts.media;
    this.show = opts.show;
    this.year = opts.year;
    this.path = pathPrefix + opts.filename;
  }

  Art.all = [];

  Art.initShows = () => {
    return Art.all;
  };

  Art.loadAll = data => {
    Art.all = data.map(el => {
      return new Art(el);
    });
  };

  Art.fetchAll = () => {
    var url = '/data/artwork.json';

    var jqXHR = $.ajax({
      url: url,
      type: 'HEAD',
      dataType: 'json',
      success () {
        var eTag = jqXHR.getResponseHeader('ETag');
        if ((localStorage.eTag === eTag) && (localStorage.rawData)) {
          Art.loadAll(JSON.parse(localStorage.rawData));
          Art.shows = Art.initShows();
          artworkView.initIndexPage();
        } else {
          $.getJSON(url)
          .done(function(data) {
            localStorage.rawData = JSON.stringify(data);
            localStorage.eTag = eTag;

            Art.loadAll(data);
            Art.shows = Art.initShows();
            artworkView.initIndexPage();
          })
          .fail(function() {
            console.log('getJSON failed, check JSON format or file presence.');
          });
        }
      }
    });
  };

  module.Art = Art;
}(window));