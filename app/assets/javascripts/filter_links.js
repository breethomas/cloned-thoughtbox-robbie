$(document).ready(function() {
  $('#link-text-filter').on('keyup', function () {
    var $links = $('.link-container');
    var query = this.value;

    $.each($links, function (index, link) {
      var linkText = $(link).find(".title").html() +
                ' ' + $(link).find(".url").html();

      if (linkText.toLowerCase().indexOf(query.toLowerCase()) == -1 ) {
        $(link).hide();
      } else {
        $(link).show();
      }
    })
  });
});
