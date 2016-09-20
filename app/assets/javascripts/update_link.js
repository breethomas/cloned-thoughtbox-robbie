$(document).ready(function() {
  $(".all-links").on("click", ".mark-read", function(){
    linkAttributes = getLinkAttributes($(this));

    $.ajax({
      url: '/links/' + linkAttributes.id,
      method: "PATCH",
      dataType: "JSON",
      data: {link: {title: linkAttributes.title, url: linkAttributes.url, read: "true"}}
    }).done( function() {
      linkAttributes.button.removeClass("mark-read");
      linkAttributes.button.addClass("mark-unread");
      linkAttributes.button.html("Mark as Unread");
      linkAttributes.button.parents(".panel-body").removeClass("read-false");
      linkAttributes.button.parents(".panel-body").addClass("read-true");
    });
  });

  $(".all-links").on("click", ".mark-unread", function(){
    linkAttributes = getLinkAttributes($(this));

    $.ajax({
      url: '/links/' + linkAttributes.id,
      method: "PATCH",
      dataType: "JSON",
      data: {link: {title: linkAttributes.title, url: linkAttributes.url, read: "false"}}
    }).done( function(){
      linkAttributes.button.removeClass("mark-unread");
      linkAttributes.button.addClass("mark-read");
      linkAttributes.button.html("Mark as Read");
      linkAttributes.button.parents(".panel-body").removeClass("read-true");
      linkAttributes.button.parents(".panel-body").addClass("read-false");
    });
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
