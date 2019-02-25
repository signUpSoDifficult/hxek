
$(function(){

	//获取cookie
	let ck=	getCookie("key");
	let VIPname;
	if(ck){
		$(".dengLu").css("display","none");
		$(".zhuCe").css("display","none");
		$("#welcome").css("display","block");
		VIPname=ck.split("+")[0];
		$("#welcome").html("欢迎您"+VIPname);
		
	}

	//获取URLID内容
	var idstr=window.location.search;
	
	let str=idstr.split("=")[1];
	 console.log(str);
	 //根据ID获取数据库信息
	 $.get("php/getGoodsInfo.php",{"goodsId":str},
	 		function(data){
	 		console.log(data);
	 		$("#price").html(data.goodsPrice);
	 		$("#small").css("backgroundImage","url("+data.goodsImg+")");
			$("#big").css("backgroundImage",data.goodsImg);
	 	},"json");

	//改变大图片路径
	let liDoms=$("#imgUl li");
	for(let i=0;i<liDoms.length;i++){
		liDoms[i].onclick=function(){
			let imgUrl = "url("+$(this).children("a").children("img").attr("src")+")";
			$("#small").css("backgroundImage",imgUrl);
			$("#big").css("backgroundImage",imgUrl);
			// ,);
			$(this).css("border","1px solid red").siblings("li").css("border","1px solid #ccc");
		}
	}

	let sizeDoms=$("#commonSize li");
	for(let i=0;i<sizeDoms.length;i++){
		sizeDoms[i].onclick=function(){
			$(this).css("border","2px solid red").siblings("li").css("border","1px solid #ccc");
			$("#mySize").html($(this).html());
		}
	}

	
	//加减按钮
	let goodsNum = 0;
	$("#numSub").click(function(){
		goodsNum--;
		if(goodsNum<=0){
			goodsNum=0;
		}
		$("#goodsNum").val(goodsNum);
	});
	$("#numAdd").click(function(){
		goodsNum++;
		$("#goodsNum").val(goodsNum);
	});
	
	//加入购物车
	$("#btn01").click(function(){
		if($("#goodsNum").val() != 0){
			$.get("php/addShoppingCart.php",
				{"vipName":VIPname,"goodsId":str,"goodsCount":$("#goodsNum").val()},
		 		function(data){
		 		if(data){
		 			alert("加入购物车成功");
		 			location.href="shaoppingcar.html";
		 		}
	 		
	 		});
		}else{
			alert("请选择数量！！");
		}
		// $.get("php/addShoppingCart.php",
		// 	{"vipName":VIPname,"goodsId":str,"goodsCount":$("#goodsNum").val()},
	 // 		function(data){
	 // 		if(data){
	 // 			alert("加入购物车成功");
	 // 			location.href="shaoppingcar.html";
	 // 		}
	 		
	 // 	});
	});
});


function getCookie(key){//username=baobao; userpass=123456

	//1、获取所有的cookie
	var str = unescape(document.cookie);

	//2、用“; ”分割成数组
	var arr = str.split("; ");//["username=baobao","userpass=123456"];

	//3、循环查找
	for(var i in arr){

		if(arr[i].indexOf(key+"=")==0){

			return arr[i].split("=")[1];
		}
	}

	return null;
} 