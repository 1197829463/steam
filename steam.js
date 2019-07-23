window.onload = function (){
	'use strict'
	//语言点击消失
	let Language_down = $(".Language-down");
	let Language = $(".Language");
	Language.click (function(){
		Language_down.css("display","block");
	});
	window.onclick = function(e){
		if(e.target.className !== "Language"){	
			Language_down.css("display","none");
		}
	}
}
