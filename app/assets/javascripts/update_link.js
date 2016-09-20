$(document).ready(function() {
  $(".all-links").on("click", ".mark-read", function(){
    var $button = $(this);
    var $linkDiv = $button.parents(".link-container");
    var linkID = $linkDiv.data("id");
    var linkTitle = $linkDiv.find(".title").html();
    var linkUrl = $linkDiv.find(".url").html();

    $.ajax({
      url: '/links/' + linkID,
      method: "PATCH",
      dataType: "JSON",
      data: {link: {title: linkTitle, url: linkUrl, read: "true"}}
    }).done( function() {
      $button.removeClass("mark-read");
      $button.addClass("mark-unread");
      $button.html("Mark as Unread");
      $button.parents(".panel-body").removeClass("read-false");
      $button.parents(".panel-body").addClass("read-true");
    });
  });

  $(".all-links").on("click", ".mark-unread", function(){
    var $button = $(this);
    var $linkDiv = $button.parents(".link-container");
    var linkID = $linkDiv.data("id");
    var linkTitle = $linkDiv.find(".title").html();
    var linkUrl = $linkDiv.find(".url").html();

    $.ajax({
      url: '/links/' + linkID,
      method: "PATCH",
      dataType: "JSON",
      data: {link: {title: linkTitle, url: linkUrl, read: "false"}}
    }).done( function(){
      $button.removeClass("mark-unread");
      $button.addClass("mark-read");
      $button.html("Mark as Read");
      $button.parents(".panel-body").removeClass("read-true");
      $button.parents(".panel-body").addClass("read-false");
    });
  });
});
