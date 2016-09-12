$(document).ready(function() {
  $('#link-filter').on('keyup', function () {
    var $links = $('.link-container');
    var query = this.value;

    $.each($links, function (index, link) {
      var linkText = $(idea).find(".title").html() +
                ' ' + $(idea).find(".url").html();

      if (linkText.toLowerCase().indexOf(query.toLowerCase()) == -1 ) {
        $(link).hide();
      } else {
        $(link).show();
      }
    })
  });
});
