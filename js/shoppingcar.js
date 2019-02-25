
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
	//获取数据库购物车信息
	$.get("php/getShoppingCart.php",
			{"vipName":VIPname},
	 		function(data){
	 			console.log(data);
	 			let htmlstr="";
	 			for(let i=0;i<data.length;i++){
	 				htmlstr=`
	 				<li>
				<span><input class="choose" type="checkbox"></span>
				<span class="imgs"><img src="${data[i].goodsImg}" title="运动鞋" style="wclassth:100px;height: 100px" ></span>
				<span>
					<span>￥</span>
					<span class="price">${data[i].goodsPrice}</span>
				</span>
				<span >
					<span class="reduceCls">-</span>
					<span class="count">${data[i].goodsCount}</span>
					<span class="addcls">+</span>
				</span>
				<span class="delete">删除</span>
				</li>`;
	 				$("#shopUl").append(htmlstr);
	 			}
	 	},"json");
	
	//全选按钮
	$(".goodslist").on("click",".ck_all",function(){
		
		$("#shopUl :checkbox").prop("checked", $(this).prop("checked"));
		totalMoney();
	});

	$(".goodslist").on("click","#shopUl :checkbox",function(){
		//如果子元素没有被选中 全选不选中
		singleClick();
		totalMoney();
	});
	
	//数量加按钮
	$(".goodslist").on("click",".addcls",function(){
		let number = $(this).siblings(".count").html();
		number++;
		$(this).siblings(".count").html(number<1?1:number);
		
		// trMoney($(this));
		totalMoney();
	});
	//数量减按钮
	$(".goodslist").on("click",".reduceCls",function(){
		let number = $(this).siblings(".count").html();
		number--;
		$(this).siblings(".count").html(number<1?1:number);
		
		// trMoney($(this));
		totalMoney();
	});

	//删除商品
	$(".goodslist").on("click",".delete",function(){
		$(this).parent().remove();
		totalMoney();
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
	//复选框选中状态
 function singleClick(){
           //如果子元素没有被选中 全选不选中
           if(!$("#shopUl :checkbox").checked){
               $(".ck_all").prop("checked",false);
           }
           //checkbox的个数
           var chsub = $("#shopUl :checkbox").length;
           //checkbox选中的个数
           var checkedsub = $("#shopUl :checkbox:checked").length;
　　　　　　//判断选择个数与所有个数是否相同 
           if (checkedsub === chsub) {
　　　　　　　　　　//全选按钮被选中
               $(".ck_all").prop("checked", true);
           };
  }

  // function trMoney(btnDom){
  // 	let number = btnDom.siblings(".count").html();
  // 	let price = btnDom.parent().prev().children(".price").html();
  // 	btnDom.parent().parent().parent().next()

  // }
  function totalMoney(){
  	let zNum=0;
  	let zMoney = 0;
  	$("#shopUl :checkbox").each(function(){
  		if($(this).prop("checked")){
  			let num = $(this).parent().parent().children(":eq(3)").children(".count").html();
  			let pri = $(this).parent().parent().children(":eq(2)").children(".price").html(); 
  			zNum += parseInt(num);
  			zMoney += (num*pri); 
  		}
  	});
  	$("#count").html(zNum);
  	$("#totalMoney").html(zMoney);
  }