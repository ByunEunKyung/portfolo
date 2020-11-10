$(function(){
	var headers = ["H1","H2","H3","H4","H5","H6"];

	$(".accordion").click(function(e) {  // 클래스 아코드언 클릭시 
	  var target = e.target, // target 변수 = e.target // e는 앨리멘트 
		  name = target.nodeName.toUpperCase(); // 네임=target.nodeName.toUpperCase();
	  
	  if($.inArray(name,headers) > -1) { // 
		var subItem = $(target).next();
		
		//slideUp all elements (except target) at current depth or greater
		var depth = $(subItem).parents().length; // 클릭하면 아래것들(부모요소가 포함한 것들)을 나타나게 하ㅣ기 위함 //length에 저장
		var allAtDepth = $(".accordion p, .accordion div").filter(function() { // filter는 앞의 선택자에서 필터 조건에 맞는 제이쿼리 객체를 재 생성해줌
		
		  if($(this).parents().length >= depth && this !== subItem.get(0)) { 
			return true;  // 트루라면 리턴 반복
		  }
		});
		$(allAtDepth).slideUp("fast"); // 슬라이드 업 속도
		
		//slideToggle target content and adjust bottom border if necessary
		// 아래 모양 모서리가 그대로 남도록 해줌
		subItem.slideToggle("fast",function() {
			$(".accordion :visible:last").css("border-radius","0 0 10px 10px");
		});
		$(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
	  }
	});
});