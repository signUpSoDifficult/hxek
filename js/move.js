//匀速运动：
//参数：
	//dom对象
	//样式属性
	//结束值
	//时长
//返回值：无	

function move(domObj,styleAttr,endValue,timeLong){
	var startValue = parseFloat(getStyle(domObj,styleAttr));
	//判断方向
	var direction = endValue > startValue ? 1 : -1;
	//给一个确定的时间间隔
	var timeSpace = 10;
	//计算步长(步长= 距离/总步数;  总步数 = 时长/时间间隔)
	var step = Math.abs(startValue-endValue)/(timeLong/timeSpace);
	var value = startValue;
	var myTimer = setInterval(()=>{
		//数据处理
		value += direction*step;
		//判断边界
		if(direction>0 ? value >= endValue : value <= endValue){
			value = endValue;
			clearInterval(myTimer);
		}
		//改变外观
		if(styleAttr == "opacity"){
			domObj.style[styleAttr] = value;
		}else{
			domObj.style[styleAttr] = value+"px";
		}
	},timeSpace);
}


//功能：获取dom元素的样式属性
//参数：dom对象，样式属性名
//返回值：属性值
function getStyle(domObj,styleAttr){
	if(domObj.currentStyle){
		return domObj.currentStyle[styleAttr];
	}else{
		return window.getComputedStyle(domObj)[styleAttr];
	}
}

//淡入淡出的函数
//参数:
//出去的图片（淡出）
//进来的图片（淡入）
//时长

function fadeInOut(domObjOut,timeLong,domObjIn,func){
	var startValue = 1;
	var endValue = 0;
	var direction = -1;
	//给一个确定的时间间隔
	var timeSpace = 10;
	//计算步长(步长= 距离/总步数;  总步数 = 时长/时间间隔)
	var step = Math.abs(startValue-endValue)/(timeLong/timeSpace);
	var value = startValue;
	var myTimer = setInterval(()=>{
		//数据处理
		value += direction*step;
		//判断边界
		if(value <= endValue){
			value = endValue;
			window.clearInterval(myTimer);
			func&&func();
		}
		//改变外观
			domObjOut.style.opacity = value;
			domObjIn.style.opacity = (1-value);
	},timeSpace);
}




//完成两张图片的滑入滑出
//参数:
//出去的图片
//进来的图片
//样式属性
//结束值(以出去的图片准)
//两张图片的距离差。
//时长

//思路：以出去的图片为准进行运动，即运动中的任何数据都是以出去的图片为准
function slideInOut(domObjOut,styleAttr,endValue,timeLong,domObjIn,diff){
	var startValue = parseFloat(getStyle(domObjOut,styleAttr));
	//判断方向
	var direction = endValue > startValue ? 1 : -1;
	//给一个确定的时间间隔
	var timeSpace = 10;
	//计算步长(步长= 距离/总步数;  总步数 = 时长/时间间隔)
	var step = Math.abs(startValue-endValue)/(timeLong/timeSpace);
	var value = startValue;
	var myTimer = setInterval(()=>{
		//数据处理
		value += direction*step;
		//判断边界
		if(direction>0 ? value >= endValue : value <= endValue){
			value = endValue;
			clearInterval(myTimer);
		}
		//改变外观

		domObjOut.style[styleAttr] = value+"px";
		domObjIn.style[styleAttr] = (value+diff)+"px";

	},timeSpace);
}