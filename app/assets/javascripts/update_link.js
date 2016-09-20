$(document).ready(function() {
  $(".all-links").on("click", ".mark-read", function(){
    var $linkDiv = $(this).parents(".link-container")
    var linkID = $linkDiv.data("id");
    var linkTitle = $linkDiv.find(".title").html();
    var linkUrl = $linkDiv.find(".url").html();

    $(this).removeClass("mark-read");
    $(this).addClass("mark-unread");
    $(this).html("Mark as Unread");
    $(this).parent().parent().css("background", "grey")

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
    $(this).parent().parent().css("background", "white")

    $.ajax({
      url: '/links/' + linkID,
      method: "PATCH",
      dataType: "JSON",
      data: {link: {title: linkTitle, url: linkUrl, read: "false"}}
    })
  });
});
