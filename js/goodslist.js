
$(function(){
	$.ajax({
	   type: "POST",
	   url: "php/getGoodsList.php",
	   dataType:"json",
	   success: function(msg){
	     console.log(msg );
	     var obj = msg;
  			//  <li>
			// 	<span>收藏</span>
			// 	<div class="imgList_big">
			// 		<a href="javascript:;"><img src="img/nianhuo01.png" alt=""/></a>
			// 	</div>
			// 	<div class="imgList_small">
			// 		<a href="javascript:;"><img src="img/nianhuo01.png" alt=""></a>
			// 		<a href="javascript:;"><img src="img/nianhuo02.png" alt=""></a>
			// 		<a href="javascript:;"><img src="img/nianhuo03.png" alt=""></a>
			// 		<a href="javascript:;"><img src="img/nianhuo04.png" alt=""></a>
			// 		<a href="javascript:;"><img src="img/nianhuo05.png" alt=""></a>
			// 	</div>
			// 	<div class="imgList_detials">
			// 		<div>￥149.00</div>
			// 		<div>鸿星尔克男鞋跑步鞋2018男新款透气运动减震跑步鞋</div>
			// 		<div>销量：1115</div>
			// 	</div>
			// </li>
			for(let i=0;i<obj.length;i++){
				$("#goodslist").append('<li><span>收藏</span><div class="imgList_big"><a href="javascript:;" target="_blank" class="toCp"><img class="bigImg" src="" alt=""/></a></div><div class="imgList_small"><a href="javascript:;"><img class="smallImg01" src="" alt=""></a><a href="javascript:;"><img class="smallImg02" src="" alt=""></a><a href="javascript:;"><img class="smallImg03" src="img/nianhuo03.png" alt=""></a><a href="javascript:;"><img class="smallImg04" src="img/nianhuo04.png" alt=""></a><a href="javascript:;"><img class="smallImg05" src="img/nianhuo05.png" alt=""></a></div><div class="imgList_detials"><div class="goodsPrice"></div><div class="goodsDescribe"></div><div class="goodsShop">销量：</div></div></li>');
				mc(".bigImg")[i].src=obj[i].goodsImg;
				mc(".smallImg01")[i].src=obj[i].beiyong1;
				mc(".smallImg02")[i].src=obj[i].beiyong2;
				mc(".smallImg03")[i].src=obj[i].beiyong3;
				mc(".smallImg04")[i].src=obj[i].beiyong4;
				mc(".smallImg05")[i].src=obj[i].beiyong5;
				mc(".goodsPrice")[i].innerHTML = "￥"+obj[i].goodsPrice; 
				mc(".goodsDescribe")[i].innerHTML = "鸿星尔克男鞋跑步鞋2018男新款"+obj[i].goodsDesc;
				mc(".goodsShop")[i].innerHTML = "销量:"+obj[i].goodsCount;
				let ID=i+1;
				let aHref=mc(".toCp");
				aHref[i].href="http://localhost/hxekshopping/childPage.html?ID="+ID;
				
				
				
				let smImg =$(".imgList_small a");
				 for(let j=(i+1)*5-5;j<smImg.length;j++){
				 	smImg[j].onclick=function(){
				 		$(this).css("border","1px solid red").siblings("a").css("border","1px solid #ccc");
				 		$(this).parent().prev().children("a").children("img").attr("src",$(this).children("img").attr("src"));
				 	}
				}
					// console.log(smImg);
				
			}

	   }
	});

});
	


function mc(str){
 if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}	
}