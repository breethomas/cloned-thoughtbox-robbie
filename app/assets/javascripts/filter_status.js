$(document).ready(function() {
  $('#show-all-filter').on('click', function () {
    var $links = $('.link-container').show();
  });

  $('#show-read-filter').on('click', function () {
    var $links = $('.link-container').show();
    var $links = $('.link-container').find(".read-false").parents(".link-container").hide();
  });

  $('#show-unread-filter').on('click', function () {
    var $links = $('.link-container').show();
    var $links = $('.link-container').find(".read-true").parents(".link-container").hide();
  });
});
