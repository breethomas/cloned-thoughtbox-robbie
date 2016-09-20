$(document).ready(function() {
  $('#sort-alphabetically').on('click', function () {
    $(".all-links").html(alphabetize($('.link-container')));
  });

  $('#sort-by-id').on('click', function () {
    $(".all-links").html(sortByID($('.link-container')));
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
