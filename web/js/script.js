$(function(){
	var headPos = $(".site-header").offset().top;

	$(window).scroll(function(){
		if($(window).scrollTop() > headPos){
			//$(".site-header").css("position","fixed");
			$(".site-header").css("top","0");
		}else{
			//$(".site-header").css("position","absloute");
			$(".site-header").css("top",headPos-$(window).scrollTop());

		}
	});
});