$(document).ready(function() {
  var originalOrder = $(".all-links").html();
  var $links = $('.link-container');

  $('#sort-alphabetically').on('click', function () {
    if ($(this).is(':checked')) {
      var alphabetical = $links.sort(function (a, b) {
        console.log($(a).find(".title").text())
        return $(a).find(".title").text() > $(b).find(".title").text();
      });

      $(".all-links").html(alphabetical);
    } else {
      $(".all-links").html(originalOrder);
    }
  });
});
