	
	$(function(){
		//打开
		$(".zhuCe").click(function(){
			$(".cover").css("display","block");
			$(".login").css("display","block");
		});
		//关闭
		$("#window_close01").click(function(){
			$(".cover").css("display","none");
			$(".login").css("display","none");
		});
		$("#toLand").click(function(){
			$(".login").css("display","none");
			$(".land").css("display","block");
		});
		//发送请求（验证用户名是否可用）
		$("#usernamez").blur(function(){
		//手机号
			var reg = /^[1-9]\d{10}$/;
			if(reg.test(this.value)){
				$.get("php/checkuser02.php",{"username":this.value} ,
					function(data){
		  				if(data=="0"){
							$("#usernamezs").html("亲，该用户已被使用，您还是换一个吧");
						}else{
							$("#usernamezs").html("亲，恭喜您，该用户名可以使用");	
						}
				});
			}else{
				$("#usernamezs").html("亲，请输入正确的手机号");	
			}
		});
		// 判断两次输入密码是否一致
		$("#rpasswordz").blur(function(){
			if($("#passwordz").val() != this.value){
				$("#rpasswordzs").html("亲，两次输入密码要一致");	
			}else{
				// 注册
				$("#btn_login").click(function(){
					$.post("php/login.php",
						{"username":$("#usernamez").val(),
						"userpass":$("#passwordz").val()
						} ,
						function(data){
		  				if(data=="0"){
							alert("注册失败");
						}else{
							alert("注册成功");
							$(".login").css("display","none");
							$(".land").css("display","block");
						}
					});
				});
			}	
		});
	});
