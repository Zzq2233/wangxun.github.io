// 导航栏

window.onscroll = () => {
	var topScroll = document.documentElement.scrollTop;
	var nav = document.getElementById("nav");
	if( topScroll > 50 ){
		nav.style.display = "flex";
	}else{
		nav.style.display = "none";
	}
}

// 最小化悬浮窗

var left = document.getElementById("left");
var left_content = document.getElementById("left-content");
var left_hide = document.getElementById("left-hide");
var left_show = document.getElementById("left-show");
var right = document.getElementById("right");
var right_content = document.getElementById("right-content");
var right_hide = document.getElementById("right-hide");
var right_show = document.getElementById("right-show");
var right_chat = document.getElementById("right-chat");

left.onclick=function(){
	if(left.dataset.id === "1"){
		left_content.style.display="none";
		left_hide.style.display="none";
		left_show.style.display="block";
		left.dataset.id = "0";
	}else{
		left_content.style.display="flex";
		left_hide.style.display="block";
		left_show.style.display="none";
		left.dataset.id = "1";
	}
}

right.onclick=function(){
	if(right.dataset.id === "1"){
		right_content.style.display="none";
		right_hide.style.display="none";
		right_show.style.display="block";
		right_chat.style.display="none";
		right.dataset.id = "0";
	}else{
		right_content.style.display="flex";
		right_show.style.display="none";
		right_hide.style.display="block";
		right_chat.style.display="block";
		right.dataset.id = "1";
	}
}

