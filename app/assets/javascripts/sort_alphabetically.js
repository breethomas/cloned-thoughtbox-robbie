$(document).ready(function() {
  var originalOrderLinks = $(".all-links").html();
  var $links = $('.link-container');

  $('#sort-alphabetically').on('click', function () {
    if ($(this).is(':checked')) {
      var alphabetizedLinks = alphabetize($links);

      $(".all-links").html(alphabetizedLinks);
    } else {
      $(".all-links").html(originalOrderLinks);
    }
  });
});

function alphabetize(links) {
  return links.sort(function (a, b) {
    return $(a).find(".title").text() > $(b).find(".title").text();
  });
};
