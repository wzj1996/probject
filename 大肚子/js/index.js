// 章江锋
var pic = document.querySelectorAll(".carr_pic li");
var carrprev =document.querySelector(".carr_prev");
var carrnext =document.querySelector(".carr_next");
var length = pic.length;
var index = 0;
var times = null;
function next(){
	index ++;
	if(index>length-1){
		index=0;
	}
	for(var i = 0;i<length;i++){
		pic[i].style.opacity="0";
	}
	pic[index].style.opacity="1";
}
carrnext.onmouseover=function(){
	clearInterval(times);
}
carrnext.onmouseout=function(){
	clearInterval(times);
	times = setInterval(next,3500);
}
carrnext.onclick=function(){
	next();
}
function prev(){
	index --;
	if(index<0){
		index=length-1;
	}
	for(var i = 0;i<length;i++){
		pic[i].style.opacity="0";
	}
	pic[index].style.opacity="1";
}
carrprev.onmouseover=function(){
	clearInterval(times);
}
carrprev.onmouseout=function(){
	clearInterval(times);
	times = setInterval(next,3500);
}
carrprev.onclick=function(){
	prev();
}
times = setInterval(next,3500);
