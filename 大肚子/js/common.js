var sec = document.getElementById("Sec");
var sec_ul=sec.getElementsByTagName("ul")[0];
var sec_ul_li=sec_ul.getElementsByTagName("li");
var sec_aprev=document.getElementsByClassName("Sec_prev")[0];
var sec_anext=document.getElementsByClassName("Sec_next")[0];
var speed = 1;

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
	speed = 1;
}
sec_anext.onmouseover=function(){
	speed = -1;
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