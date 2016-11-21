// 姓名：魏程程，杨沈标
// 从头部到关键字搜索：杨沈标；
// 	中间内容到尾部：魏程程
var sec=document.getElementById("Sec");
var sec_ul=sec.getElementsByTagName("ul")[0];
var sec_ul_li=sec_ul.getElementsByTagName("li");
var sec_aprev=document.getElementsByClassName("Sec_prev")[0];
var sec_anext=document.getElementsByClassName("Sec_next")[0];
var speed = -1;

sec_ul.innerHTML = sec_ul.innerHTML +sec_ul.innerHTML +sec_ul.innerHTML;
sec_ul.style.width= sec_ul_li.length * sec_ul_li[0].offsetWidth + "px";
sec.style.left = 0;

function moveSec() {
	if (sec_ul.offsetLeft<=-sec_ul.offsetWidth/3){
		sec_ul.style.left=0;
	}
	if (sec_ul.offsetLeft>0){
		sec_ul.style.left=-sec_ul.offsetWidth/3 +"px";
	}
	sec_ul.style.left= sec_ul.offsetLeft + speed +"px";
}
var timer=setInterval(moveSec,10);

sec_ul.onmouseover=function(){
	clearInterval(timer);
}
sec_ul.onmouseout=function(){
	timer=setInterval(moveSec,10);

}
sec_aprev.onmouseover=function(){
	speed = -1;
}
sec_anext.onmouseover=function(){
	speed = 1;
}

// 导航栏 
var nav_div_a=document.querySelectorAll(".Nav_div a");
var nav_div_i=document.querySelectorAll(".Nav_div i");
var index=0;

for (var i = 0; i < nav_div_a.length; i++) {
	nav_div_a[i].index=i;
	nav_div_a[i].onmouseover=function(){
		for (var i = 0; i<nav_div_a.length;i++) {
			nav_div_a[i].className="";
			nav_div_i[i].style.display="";
			nav_div_i[i].style.background="";
		}
	nav_div_a[this.index].className="Nav_div_a";
	nav_div_i[this.index].style.background="transparent";
	nav_div_i[this.index+1].style.display="none";
	}

	nav_div_a[i].onmouseout=function(){
		nav_div_a[this.index].className="";
		nav_div_i[this.index].style.background="";
		nav_div_i[this.index+1].style.display="";
	}
}




var tab_menu = fns('.tab_menu li');
var  li = fns('.tab_by ul li');
function fns(x){
	return document.querySelectorAll(x);
}
var length = tab_menu.length;
for (var i = 0; i < length; i++) {
	tab_menu[i].index = i;
	tab_menu[i].onclick = function(){
		for(var i = 0;i<length;i++){
			tab_menu[i].className = "";
			li[i].style.display = "none";
		}
		tab_menu[this.index].className = "bg";
	    li[this.index].style.display = "block";
	}
}

// 放大镜效果
window.onload=function () { 
	var oDiv=document.getElementById('div1'); 
	// var oDiv = document.querySelector('#div1');
	var oShow=oDiv.getElementsByTagName('div')[0];
	// var oShow = document.querySelector("#div1 div") 
	var oSpan=oDiv.getElementsByTagName('span')[0]; 
	// var oSpan = document.querySelector("#div1 span");
	var oImg=document.getElementById('img1');
	// var oImg = document.querySelector("#img1");
	// parentNode获得父节点
	oShow.onmouseover=function() { 
		oSpan.style.display='block'; 
		oImg.parentNode.style.display='block'; 
	}; 
	oShow.onmouseout=function() { 
		oSpan.style.display='none'; 
		oImg.parentNode.style.display='none'; 
	}; 
	// 放大器移动
	oShow.onmousemove=function(ev) { 
		// 浏览器兼容
		var oEvent=ev||event; 
		// 获得鼠标的位置
		var x=oEvent.offsetX-oSpan.offsetWidth/2; 
		var y=oEvent.offsetY-oSpan.offsetHeight/2; 

		if(x<0) { 
			x=0; 
		} else if(x>oShow.offsetWidth-oSpan.offsetWidth) { 
			x=oShow.offsetWidth-oSpan.offsetWidth; 
		} if(y<0) { 
			y=0; 
		} else if(y>oShow.offsetHeight-oSpan.offsetHeight) { 
			y=oShow.offsetHeight-oSpan.offsetHeight;
		} 
		// 给选中框定位
		oSpan.style.left=x+'px'; 
		oSpan.style.top=y+'px'; 
		// 给放大器定位
		var percentX=x/(oShow.offsetWidth-oSpan.offsetWidth); 
		var percentY=y/(oShow.offsetHeight-oSpan.offsetHeight); 
		var oImgparent=oImg.parentNode; 
		oImg.style.left=-percentX*(oImg.offsetWidth-oImgparent.offsetWidth)+'px'; 
		oImg.style.top=-percentY*(oImg.offsetHeight-oImgparent.offsetHeight)+'px'; 
		// console.log(x);
		// console.log(y);
	}; 
};  


