//导航栏顶部悬浮
	window.onscroll = function(){
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(_scroll >= 148){
			$(".nav").css({"position":"fixed","top":"0"});
		}else{
			$(".nav").css({"position":"absolute","top":"148px"});
			$("#nav_hidden").css("display","block");
		}
	}

//点击收藏
	$(function() {
		$("#collect").mouseover(function(){
			this.children[0].src = "img/collect2.png";
		});
		$("#collect").mouseout(function(){
			this.children[0].src = "img/collect1.png";
		});
		$("#collect").click(function(){
			alert("请先登录！！！");
		});
	});

//点击返回顶部
	$(function(){
	     $(".toTop").click(function() {
	          $("html,body").animate({scrollTop:0}, 500);
	     }); 
	});