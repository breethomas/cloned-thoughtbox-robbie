$(document).ready(function() {
  $(".mark-read").on("click", function(){
    var $linkDiv = $(this).parent().parent().parent().parent();
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

  $(".mark-unread").on("click", function(){
    var $linkDiv = $(this).parent().parent().parent().parent();
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
