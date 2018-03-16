(function(){
	var a = 0;
	var b = 0;
	var u = function(h){
		if(a == 0){
			return
		}
		if($("#content").is(":animated")){
			return
		}
		a--;
		$("#content").animate({top:h},500);
		$("#ul li").removeClass("ckeck-li");
		$("#ul li").eq(a).addClass("ckeck-li")
	};
	var d = function(h){
		if(a == b - 1){
			return
		}
		if($("#content").is(":animated")){
			return
		}
		a++;
		$("#content").animate({top:h},500);
		$("#ul li").removeClass("ckeck-li");
		$("#ul li").eq(a).addClass("ckeck-li")
	};
	var scrollFunc = function(e){
		b = $("#content div").length;
		e = e || window.event;
		if(e.wheelDelta){
			var div = document.getElementById("content");
			if(e.wheelDelta > 0){
				new u("+=100vh")
			}
			if(e.wheelDelta < 0){
				new d("-=100vh")
			}
		}
		if(e.detail){
			if(e.detail < 0){
				new u("+=100vh")
			}
			if(e.detail > 0){
				new d("-=100vh")
			}
		}
	};
	window.onmousewheel = document.onmousewheel = scrollFunc;
	if(document.addEventListener){
		document.addEventListener("DOMMouseScroll",scrollFunc,false)
	}
	$(function(){
		b = $("#content div").length;
		var ul = document.createElement("ul");
		ul.setAttribute("id","ul");
		for(var i = 0 ; i < b ; i++){
			var li = document.createElement("li");
			if(i == 0){
				li.setAttribute("class","ckeck-li")
			}
			ul.appendChild(li)
		}
		$(".content").append(ul);
		$("#ul li").click(function(){
			var index = $("#ul li").index(this);
			if(index > a){
				$("#content").animate({top:"-=" + (index - a) + "00vh"},500);
				$("#ul li").removeClass("ckeck-li");
				$("#ul li").eq(index).addClass("ckeck-li")
			}else{
				if(index < a){
					$("#content").animate({top:"+=" + (a - index) + "00vh"},500);
					$("#ul li").removeClass("ckeck-li");
					$("#ul li").eq(index).addClass("ckeck-li")
				}else{
					return
				}
			}
			a = index
		})
	})
}());
