$(document).ready(function() {
  $('#sort-alphabetically').on('click', function () {
    var $links = $('.link-container');

    if ($(this).is(':checked')) {
      $(".all-links").html(alphabetize($links));
    } else {
      $(".all-links").html(sortByID($links));
    }
  });
});

function alphabetize(links) {
  return links.sort(function (a, b) {
    return $(a).find(".title").text() > $(b).find(".title").text();
  });
};

function sortByID(links) {
  return links.sort(function (a, b) {
    return $(a).data("id") > $(b).data("id");
  });
};
