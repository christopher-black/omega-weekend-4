console.log('script sourced');

var app = angular.module('app', []);

app.controller('GalleryController', function(){
  console.log('gallery controller loaded');
  var gallery = this;
  gallery.photos = placeholder.data;
  gallery.hideShow = hideShow;
  gallery.like = like;
  gallery.addComment = addComment;

  function hideShow(entry) {
    console.log(entry);
    entry.showText = !entry.showText;
    if(entry.showText) {
      entry.views++;
    }
  }

  function addComment(entry, newcomment) {
    entry.comments.push(newcomment);
    entry.newComment = '';
  }

  function like(entry) {
    entry.likes++;
  }
});
