// 轮播图
	
var banner_curIndex=0;
var banner_timer=null;
function banner_toggle(banner_nextIndex){
	var banner_lis=document.querySelectorAll('ul.banner>li');
	var banner_indicators=document.querySelectorAll('ul.indicators>li');
	banner_lis[banner_curIndex].classList.remove('show');
	banner_indicators[banner_curIndex].classList.remove('active');
	banner_curIndex=banner_nextIndex<0?banner_lis.length-1:banner_nextIndex%banner_lis.length;
	banner_lis[banner_curIndex].classList.add('show');
	banner_indicators[banner_curIndex].classList.add('active');
}

// 停止自动播放

document.querySelector('.banner-wrapper').onmouseenter=function(){
	clearInterval(banner_timer);
}

// 恢复自动播放

document.querySelector('.banner-wrapper').onmouseleave=function(){
	banner_timer=setInterval(function(){banner_toggle(banner_curIndex+1);},5000);
}

// 指定切换

document.querySelectorAll('ul.indicators>li').forEach(function(banner_indicators,banner_i){
		banner_indicators.onclick=function(){banner_toggle(banner_i)} ;
})

banner_timer=setInterval(function(){banner_toggle(banner_curIndex+1);} ,5000);

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

// 关闭优惠宣传页

document.querySelector(".offers-close").onclick=function(){
	document.querySelector(".offers").style.display="none";
}


// 腾讯企业邮箱价格切换

var price_curIndex=0;
var price_timer=null;
function price_toggle(price_nextIndex){
	var price_lis=document.querySelectorAll('.price-list>ul>li');
	var price_number=document.querySelectorAll('span.price-hide');
	var price_through=document.querySelectorAll('span.price-hide-through');
	price_lis[price_curIndex].classList.remove('price-active');
	price_number[price_curIndex].classList.remove('price-show');
	price_through[price_curIndex].classList.remove("price-show-through")
	price_curIndex = price_nextIndex<0?price_lis.length-1:price_nextIndex%price_lis.length;
	price_lis[price_curIndex].classList.add('price-active');
	price_number[price_curIndex].classList.add('price-show');
	price_through[price_curIndex].classList.add("price-show-through");
}
			
// 停止自动播放

document.querySelector('.price').onmouseenter=function(){
	clearInterval(price_timer);
}

// 恢复自动播放

document.querySelector('.price').onmouseleave=function(){
	price_timer=setInterval(function(){price_toggle(price_curIndex+1);},3000);
}

// 指定切换

document.querySelectorAll('.price-list>ul>li').forEach(function(price_number,price_i){
	price_number.onclick=function(){price_toggle(price_i)};
})

price_timer=setInterval(function(){price_toggle(price_curIndex+1);} ,3000);

// 账号数增加

var l_min = document.querySelector("button.l-min");
var l_add = document.querySelector("button.l-add");
var r_min = document.querySelector("button.r-min");
var r_add = document.querySelector("button.r-add");

l_min.onclick = function(){
	console.log(1);
}

l_add.onclick = function(){
	console.log(2);
}

r_min.onclick = function(){
	console.log(3);
}

r_add.onclick = function(){
	console.log(4);
}