
$(function(){
	$.ajax({
	   type: "POST",
	   url: "php/getGoodsList.php",
	   dataType:"json",
	   success: function(msg){
	     console.log(msg );
	     var obj = msg;
	  //    <li>
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
	     $("goodslist").append("<b>Hello</b>");
	   }
	});
});