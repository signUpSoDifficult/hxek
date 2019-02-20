
	let myTimer = null;
	let currIndex = 0;
	var arr=["http://www.baidu.com","http://www.taobao.com","http://www.jd.cn"];
	//自动播放
	function autoPlay(){
		if(myTimer != null){
			return;
		}
		myTimer = setInterval(function(){
			//一、处理数据
			let outIndex = currIndex;
			currIndex++;

			if(currIndex >= 3){
				currIndex = 0;
			}
			
			//二、外观呈现
			showImg(outIndex,currIndex);
		
		},3000)
		
	}
	//停止播放
	function stopPlay(){
		window.clearInterval(myTimer);
		myTimer = null;
	}
	//点击豆豆跳转到相应图片
	function goImg(index){
		let outIndex = currIndex;
		currIndex = index;

		if(currIndex >= 3 || currIndex <0){
			currIndex = 0;
		}
		
		//外观呈现
		showImg(outIndex,currIndex);
		
	}
	function showImg(outIndex,inIndex){
		if(outIndex == inIndex){
			return;
		}
		//1、改图片
		//一个淡入一个淡出
		let imgDoms = getNode("#box").children;
		fadeInOut(imgDoms[outIndex].children[0] ,1000,imgDoms[inIndex].children[0]);

		//2、改豆豆
		let ddDoms = getNode("#ddBox").children;
		for(let i=0;i<ddDoms.length;i++){
			ddDoms[i].style.backgroundColor = "pink";
		}
		ddDoms[inIndex].style.backgroundColor = "red";
		
	}
	//主函数
	window.onload = ()=>{
		//1.自动播放
		autoPlay();
		//2.鼠标进入，停止播放
		getNode("#box").onmouseover = ()=>{
			stopPlay();
		}
		//3.鼠标离开，继续播放
		getNode("#box").onmouseout = ()=>{
			autoPlay();
		}
		//4.鼠标点击豆豆，跳转到相应的图片
		getNode("#ddBox").onclick = (event) =>{
			let evt = event || window.event;
			if(evt.target.tagName.toLowerCase() == "li"){
				goImg(evt.target.getAttribute("index"));
			}
			evt.stopPropagation();
		}
		//5.超链
		getNode("#box").onclick = ()=>{
			location.href = arr[currIndex];
		}
		//6.离开窗口，停止播放
		window.onblur = ()=>{
			stopPlay();
		}
		//7.进入窗口，恢复播放
		window.onfocus = ()=>{
			autoPlay();
		}

	}



	function getNode(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}	

