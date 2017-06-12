console.log('script sourced');

var app = angular.module('app', []);

app.controller('GalleryController', function(){
  console.log('gallery controller loaded');
  var gallery = this;
  gallery.photos = placeholder.data;
  gallery.hideShow = hideShow;

  function hideShow(entry) {
    console.log(entry);
    entry.showText = !entry.showText;
  }
});
