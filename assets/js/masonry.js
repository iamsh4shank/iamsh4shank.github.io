$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 14,
    percentPosition: true,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
