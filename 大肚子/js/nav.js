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