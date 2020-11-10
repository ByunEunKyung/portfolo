/* 슬라이드 	*/
$(function(){
	
	$(function(){
				$("#mainImg li img").each(function(aa){
					$(this).css("left",aa*800);
					});
				});
				
				setInterval(function(){
					$("#mainImg li img").each(function(){
						var nowLeft = parseInt($(this).css("left"));
							console.log($(this).css("left"));
						var movePos = nowLeft -800;
					$(this).animate({left:movePos}, 2000, function(){
						if(movePos == -1600){
							$(this).css("left", 800);
						}
						});
					});
					}, 2400);
					
		//메뉴 부분		
	
		$("#mainM2").mouseenter(function(){
		$("li").children("#subM").stop().slideDown(500);
		});
	   $("#mainM2").mouseleave(function(){
		$("li").children("#subM").stop().slideUp(500);
	   });
	   
	   	$("#mainM3").mouseenter(function(){
		$("li").children("#subM2").stop().slideDown(500);
		});
	   $("#mainM3").mouseleave(function(){
		$("li").children("#subM2").stop().slideUp(500);
	   });
	   
	   	$("#mainM4").mouseenter(function(){
		$("li").children("#subM3").stop().slideDown(500);
		});
	   $("#mainM4").mouseleave(function(){
		$("li").children("#subM3").stop().slideUp(500);
	   });
	   
	// 버튼으로 페이지 이동
	$(function(){
 
		  $("header,#container").css({ marginTop:"0px" });
		  $(".content_wrap").hide();
		  $("header").animate({ marginTop:0 },function(){
			   $("#container").animate({ marginTop:"80px" });
		  });

		  $("#buttonType li:eq(0)").click(function(){
			$("html,body").animate({ scrollTop: 0* $(this).index() });
		  });
		  $("#buttonType li:eq(1)").click(function(){
			$("html,body").animate({ scrollTop: 900* $(this).index() });
		  });
		  $("#buttonType li:eq(2)").click(function(){
			$("html,body").animate({ scrollTop: 900* $(this).index() });
		  });
		  $("#buttonType li:eq(3)").click(function(){
			$("html,body").animate({ scrollTop: 1500* $(this).index() });
		  });

		  $("#container>p").click(function(){
			  $("html,body").animate({ scrollTop: 0 });
		  });

	});	

});	   
