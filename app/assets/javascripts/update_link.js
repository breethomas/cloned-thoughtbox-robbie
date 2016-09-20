$(document).ready(function() {
  $(".all-links").on("click", ".mark-read", function(){
    var $linkDiv = $(this).parents(".link-container")
    var linkID = $linkDiv.data("id");
    var linkTitle = $linkDiv.find(".title").html();
    var linkUrl = $linkDiv.find(".url").html();

    $(this).removeClass("mark-read");
    $(this).addClass("mark-unread");
    $(this).html("Mark as Unread");
    $(this).parents(".panel-body").removeClass("read-false");
    $(this).parents(".panel-body").addClass("read-true");

    $.ajax({
      url: '/links/' + linkID,
      method: "PATCH",
      dataType: "JSON",
      data: {link: {title: linkTitle, url: linkUrl, read: "true"}}
    })
  });

  $(".all-links").on("click", ".mark-unread", function(){
    var $linkDiv = $(this).parents(".link-container")
    var linkID = $linkDiv.data("id");
    var linkTitle = $linkDiv.find(".title").html();
    var linkUrl = $linkDiv.find(".url").html();

    $(this).removeClass("mark-unread");
    $(this).addClass("mark-read");
    $(this).html("Mark as Read");
    $(this).parents(".panel-body").removeClass("read-true");
    $(this).parents(".panel-body").addClass("read-false");

    $.ajax({
      url: '/links/' + linkID,
      method: "PATCH",
      dataType: "JSON",
      data: {link: {title: linkTitle, url: linkUrl, read: "false"}}
    })
  });
});
