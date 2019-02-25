window.onload = ()=>{
	//鼠标进入原图盒子，遮罩层和大盒子显示
	choose("#small").onmouseover = ()=>{
		choose("#mask").style.display = "block";
		choose("#big").style.display = "block";
	}
	//鼠标离开原图盒子，遮罩层和大盒子消失
	choose("#small").onmouseout = ()=>{
		choose("#mask").style.display = "none";
		choose("#big").style.display = "none";
	}
	//鼠标移动，遮罩层跟随鼠标移动
	choose("#small").onmousemove = (event)=>{
		let evt = event || window.event;
		//计算遮罩层的left和top
		let left1 = evt.clientX - choose("#small").offsetLeft - choose("#mask").offsetWidth/2-250;
		let top1 = evt.clientY - choose("#small").offsetTop - choose("#mask").offsetHeight/2-150;

		//判断边界
		if(left1<0){
			left1 = 0;
		}
		maxLeft1 = choose("#small").offsetWidth - choose("#mask").offsetWidth;
		if(left1>=maxLeft1){
			left1=maxLeft1;
		}

		if(top1<0){
			top1 = 0;
		}
		maxTop1 = choose("#small").offsetHeight - choose("#mask").offsetHeight;
		if(top1>=maxTop1){
			top1=maxTop1;
		}

		

		choose("#mask").style.left = left1+"px";
		choose("#mask").style.top = top1+"px";

		//计算大盒子里图片的位置
		//mask尺寸/大盒子尺寸=原图尺寸/大图尺寸
		//left/x=mw/bw
		let x = left1*choose("#big").offsetWidth/choose("#mask").offsetWidth;
		let y = top1*choose("#big").offsetHeight/choose("#mask").offsetHeight;

		choose("#big").style.backgroundPositionX = -x+"px";
		choose("#big").style.backgroundPositionY = -y+"px";	
	}
}


function choose(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}