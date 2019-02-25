$(function(){
		$(".dengLu").click(function(){
			$(".cover").css("display","block");
			$(".land").css("display","block");
		});
		$("#window_close02").click(function(){
			$(".cover").css("display","none");
			$(".land").css("display","none");
		});
		//跳转注册页面
		$(".land_btn02").click(function(){
			$(".land").css("display","none");
			$(".login").css("display","block");
		});

		//登录
		
		$(".land_btn01").click(function(){
			var yzm = $("input[type='hidden']").val();
			var arr = yzm.split(",");
			var str = "";
			for(let i in arr){
				str+=arr[i].toLowerCase();
			}
			if(str == $("#userreg").val().toLowerCase()){
				$.post("php/loginCheck03.php",
						{"username":$("#usernamed").val(),
						 "userpass":$("#userpassd").val()
						} ,
						function(data){
			  				if(data=="0"){
								alert("用户名或密码错误");
							}else{
								alert("登录成功");
								let userinfo=$("#usernamed").val()+"+"+$("#userpassd").val()
								saveCookie("key",userinfo,7);
								
								$(".cover").css("display","none");
								$(".land").css("display","none");
								$("#welcome").css("display","block");
								$(".dengLu").css("display","none");
								$(".zhuCe").css("display","none");
								$("#welcome").html("欢迎您"+$("#usernamed").val());

							}
				});
			}else{
				$("#userregs").html("验证码错误");
			}
			
		});
});




function saveCookie(key,value,dayCount) {
	//1、定义日期
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	//2、保存cookie
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    