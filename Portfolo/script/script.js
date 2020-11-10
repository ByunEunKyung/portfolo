


$(function(){
 
  $("header,#container").css({ marginTop:"-100px" });
  $(".content_wrap").hide();
  $("header").animate({ marginTop:0 },function(){
       $("#container").animate({ marginTop:"80px" });
       $(".content_wrap").fadeIn();
  });

  $(".gnb li:eq(0)").click(function(){
    $("html,body").animate({ scrollTop: 0* $(this).index() });
  });
  $(".gnb li:eq(1)").click(function(){
    $("html,body").animate({ scrollTop: 600* $(this).index() });
  });
  $(".gnb li:eq(2)").click(function(){
    $("html,body").animate({ scrollTop: 550* $(this).index() });
  });
  $(".gnb li:eq(3)").click(function(){
    $("html,body").animate({ scrollTop: 1100* $(this).index() });
  });
  $(".gnb li:eq(4)").click(function(){
    $("html,body").animate({ scrollTop: 1110* $(this).index() });
  });
/*
  $("#container>p").click(function(){
      $("html,body").animate({ scrollTop: 0 });
  });
*/
});

