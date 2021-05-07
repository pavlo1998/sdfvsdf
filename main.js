$(function () {
    $(".menu-btn").on("click", function () {
    
      $(".navigation-list").slideToggle("");

      $(".menu-btn").toggleClass("active");    
    });

  });