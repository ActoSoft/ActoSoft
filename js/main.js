$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".nav-wrapper").css({"background-color":"transparent"});
	brand();
});

$(document).on("scroll", function(){
	var scroll = $(window).scrollTop();

	if(scroll>$(window).height()/4){
		$(".nav-wrapper").css({"background-color":"#212121"});
		$(".brand-logo").css({"color":"white",
												  "font-size":"2.1rem",
												  "top":"0",
												  "left":"0",
												  "transition":".5s",
												  "background-color":"inherit",
												  "padding":"0" });
	}else{
		$(".nav-wrapper").css({"background-color":"transparent"});
		brand();
	}
});

function brand(){
	$(".brand-logo").css({"color":"white",
												"font-size":"3.5rem",
												"top":"300%",
												"left":"31%",
												"transition":".5s",
												"background-color":"#ffab40",
												"padding":"10px" });
}