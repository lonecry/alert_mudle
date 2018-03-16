/*
 * Created by Sun Wen on 2017/9/6.
 */
//浏览器判断
var ua = { //3
    android       : false,
    android2      : false,
    iphone        : false,
    ipad          : false,
    pc            : false,
    wechat        : false,
    chinabluenews : false
};

(function(){
    var ua_str = window.navigator.userAgent.toLowerCase();
    if(/micromessenger/.test(ua_str)){
        ua.wechat = true;
        ua.chinabluenews = false;
    }
})();

$(function(){
    var url = location.href.split('?')[0];
    fenxiang("弹出框分享标题",'弹出框分享副标题','弹出框朋友圈标题',url,'http://simpleqq.com/fenxiang.jpg');


    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener("WeixinJSBridgeReady",function(){
        document.getElementById('video').load()
        document.getElementById('video').play()
    },false);

});

function IsPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
    var flag = true;
    for(var v = 0 ; v < Agents.length ; v++){
        if(userAgentInfo.indexOf(Agents[v]) > 0){
            flag = false;
            break;
        }
    }
    return flag;
}
