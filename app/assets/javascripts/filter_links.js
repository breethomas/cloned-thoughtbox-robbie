$(document).ready(function() {
  $('#link-text-filter').on('keyup', function () {
    var $links = $('.link-container');
    var query = this.value;

    $.each($links, function (index, link) {
      var linkText = $(link).find(".title").html() +
                ' ' + $(link).find(".url").html();

      if ( containsText(linkText, query) == -1 ) {
        $(link).hide();
      } else {
        $(link).show();
      }
    })
  });
});

function containsText(textToSearch, query) {
  return textToSearch.toLowerCase().indexOf(query.toLowerCase())
};
