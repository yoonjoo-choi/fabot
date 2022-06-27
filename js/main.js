$(function () {
  $(".btn_top").click(function () {
    $("html,body").animate({ scrollTop: 0 });
  });

  $(".btn_top").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      $(".btn_top").fadeIn();
    } else {
      $(".btn_top").fadeOut();
    }

    if ($(window).scrollTop() > 100) {
      $("#header").addClass("bg");
    } else {
      $("#header").removeClass("bg");
    }
  });
});
