$(document).ready(function() {
  $(".all-links").on("click", ".btn-read-false", function(){
    linkAttributes = getLinkAttributes($(this));

    sendReadStatusUpdate(linkAttributes, "Mark as Unread", "false", "true")
  });

  $(".all-links").on("click", ".btn-read-true", function(){
    linkAttributes = getLinkAttributes($(this));

    sendReadStatusUpdate(linkAttributes, "Mark as Read", "true", "false")
  });
});

function getLinkAttributes(button) {
  var linkDiv = button.parents(".link-container");

  return {
    "button": button,
    "id": linkDiv.data("id"),
    "title": linkDiv.find(".title").html(),
    "url": linkDiv.find(".url").html(),
  }
};

function sendReadStatusUpdate(linkAttributes, buttonText, statusWas, statusChangeTo) {
  $.ajax({
    url: '/change_read_status/' + linkAttributes.id,
    method: "PUT",
    dataType: "JSON",
    data: {link: {title: linkAttributes.title, url: linkAttributes.url, read: statusChangeTo}}
  }).done( function() {
    linkAttributes.button.removeClass('btn-read-' + statusWas);
    linkAttributes.button.addClass('btn-read-' + statusChangeTo);
    linkAttributes.button.html(buttonText);
    linkAttributes.button.parents(".panel-body").removeClass('read-' + statusWas);
    linkAttributes.button.parents(".panel-body").addClass('read-' + statusChangeTo);
  });
}
