function fenxiang(a,b,c,d,e){
    var news_title = a;//分享标题
    var news_intro = b;//分享副标题
    var news_Timeline = c;//朋友圈标题
    var news_link = d;//分享链接
    var news_image = e;//分享图标
    if(ua.wechat){
        var appId = 'wxb9f89efa1a7b64b6';
        var AppSecret = '11bfb4d1efb286d57af67621fb1ab9b3';
        var noncestr = 'Wm3WZYTPz0wzccnW';
        var access_token = "";
        var jsapi_ticket = '';
        var signature = '';
        var access_token_url = 'http://simpleqq.com/wxshare/jiekou/access_token.php';
        var url = location.href.split('?')[0];
        // $.getJSON( access_token_url , function ( msg ) {
        //     console.log( msg );
        //     access_token = msg.access_token;
        //     //http://simpleqq.com/wxshare/jiekou/access_token.php
        //     $.getJSON( 'http://simpleqq.com/wxshare/jiekou/jsapi_ticket.php?access_token=' + access_token , function ( msg ) {
        //         console.log( msg );
        //         jsapi_ticket = msg.ticket;
        //         var timestamp = Date.parse( new Date() ) / 1000;
        //         var nonceStr = charRandom( 16 );//随机字符串 ;
        //         var string = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + url;
        //         wx.config( {
        //             debug     : false ,
        //             appId     : appId ,
        //             timestamp : timestamp ,
        //             nonceStr  : nonceStr ,
        //             signature : hex_sha1( string ) ,
        //             jsApiList : [
        //                 'onMenuShareTimeline' ,
        //                 'onMenuShareAppMessage' ,
        //                 'onMenuShareQQ' ,
        //                 'onMenuShareWeibo'
        //             ]
        //         } );
        //
        //         wx.ready( function () {
        //             var news_title = a;
        //             var news_link = d == '' ? getNewsLink() : d;
        //             var news_image = e;
        //             var news_intro = b;
        //             var news_Timeline = c;
        //             wx.onMenuShareTimeline( {
        //                 title  : news_title ,
        //                 link   : news_link ,
        //                 imgUrl : news_image
        //             } );
        //             wx.onMenuShareAppMessage( {
        //                 title  : news_Timeline ,
        //                 desc   : news_intro ,
        //                 link   : news_link ,
        //                 imgUrl : news_image
        //             } );
        //             wx.onMenuShareQQ( {
        //                 title  : news_title ,
        //                 desc   : news_intro ,
        //                 link   : news_link ,
        //                 imgUrl : news_image
        //             } );
        //             wx.onMenuShareWeibo( {
        //                 title  : news_title ,
        //                 desc   : news_intro ,
        //                 link   : news_link ,
        //                 imgUrl : news_image
        //             } );
        //             if ( !window.wxIsReady ) {
        //                 window.wxIsReady = true;
        //             }
        //             //wx.hideMenuItems({
        //             //	menuList:[
        //             //		'menuItem:share:qq', //分享到QQ
        //             //		'menuItem:share:weiboApp', // 分享到Weibo
        //             //		'menuItem:favorite', // 收藏
        //             //		'menuItem:share:QZone', // 分享到 QQ 空间
        //             //		'menuItem:copyUrl', // 复制链接
        //             //		'menuItem:openWithQQBrowser', // 在QQ浏览器中打开
        //             //		'menuItem:openWithSafari', // 在Safari中打开
        //             //		'menuItem:share:email', // 邮件
        //             //		'menuItem:readMode', // 阅读模式
        //             //		'menuItem:originPage' // 原网页
        //             //	],
        //             //});
        //         } );
        //     } )
        // } );


        /*  access_token jsapi_ticket 都是用接口获取的，这里是获取到的，测试用，有可能已经过期*/
        access_token = 'awQww-ZTTqZ0bePAcn8hM6pyD6kJvupj2hUU_QgQZp_nGogRpL…65emA4iwLjvz9Z-LzP13JaPOkQ0y6zeyIlO093ARZXhAFAMUS';
        jsapi_ticket = 'kgt8ON7yVITDhtdwci0qeSvPn4p7ft_cdo-YPs1AOxwWOPZyodGXOBb2alT0NyXFf6XQpnlQ5aC5tDK1o13zbw';
        /*  access_token jsapi_ticket 都是用接口获取的，这里是获取到的，测试用，有可能已经过期*/

        var timestamp = Date.parse(new Date()) / 1000;
        var nonceStr = charRandom(16);//随机字符串 ;
        var string = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + url;
        wx.config({
            debug     : 0,
            appId     : appId,
            timestamp : timestamp,
            nonceStr  : nonceStr,
            signature : hex_sha1(string),
            jsApiList : [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo'
            ]
        });

        wx.ready(function(){
            wx.onMenuShareTimeline({
                title  : news_title,
                link   : news_link,
                imgUrl : news_image

            })
            ;
            wx.onMenuShareAppMessage({
                title  : news_Timeline,
                desc   : news_intro,
                link   : news_link,
                imgUrl : news_image
            });
            wx.onMenuShareQQ({
                title  : news_title,
                desc   : news_intro,
                link   : news_link,
                imgUrl : news_image
            });
            wx.onMenuShareWeibo({
                title  : news_title,
                desc   : news_intro,
                link   : news_link,
                imgUrl : news_image
            });

            //wx.hideMenuItems({
            //	menuList:[
            //		'menuItem:share:qq', //分享到QQ
            //		'menuItem:share:weiboApp', // 分享到Weibo
            //		'menuItem:favorite', // 收藏
            //		'menuItem:share:QZone', // 分享到 QQ 空间
            //		'menuItem:copyUrl', // 复制链接
            //		'menuItem:openWithQQBrowser', // 在QQ浏览器中打开
            //		'menuItem:openWithSafari', // 在Safari中打开
            //		'menuItem:share:email', // 邮件
            //		'menuItem:readMode', // 阅读模式
            //		'menuItem:originPage' // 原网页
            //	],
            //});

        });

    }

}

function getNewsLink(){
    var link = location.search;
    link = link.substr(1);
    var link_arr = link.split('&');
    var link_arr_length = link_arr.length;
    var link_flag = false;
    for(var i = 0 ; i < link_arr_length ; i++){
        if(link_arr[i].split("=")[0] == "play"){
            link_flag = true;
        }
    }
    var url = location.href;
    if(!link_flag){
        return url + (url.indexOf('?') < 0 ? '?' : '&') + 'play=1';
    } else {
        return url;
    }
}

function charRandom(num){
    var data = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    var result = "";
    for(var i = 0 ; i < num ; i++){
        var r = Math.floor(Math.random() * 62);     //取得0-62间的随机数，目的是以此当下标取数组data里的值！
        result += data[r];        //输出20次随机数的同时，让rrr加20次，就是20位的随机字符串了。
    }
    return result;
}

/*
 * Created by Sun Wen on 2017/9/7.
 */
/*
 *
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 *
 * By lizq
 *
 * 2006-11-11
 *
 */
/*
 *
 * Configurable variables.
 *
 */
var hexcase = 0;
/* hex output format. 0 - lowercase; 1 - uppercase */
var chrsz = 8;
/* bits per input character. 8 - ASCII; 16 - Unicode */

/*
 *
 * The main function to calculate message digest
 *
 */
function hex_sha1(s){

    return binb2hex(core_sha1(AlignSHA1(s)));

}

/*
 *
 * Perform a simple self-test to see if the VM is working
 *
 */
function sha1_vm_test(){

    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";

}

/*
 *
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 *
 */
function core_sha1(blockArray){

    var x = blockArray; // append padding
    var w = Array(80);

    var a = 1732584193;

    var b = -271733879;

    var c = -1732584194;

    var d = 271733878;

    var e = -1009589776;

    for(var i = 0 ; i < x.length ; i += 16) // 每次处理512位 16*32
    {

        var olda = a;

        var oldb = b;

        var oldc = c;

        var oldd = d;

        var olde = e;

        for(var j = 0 ; j < 80 ; j++) // 对每个512位进行80步操作
        {

            if(j < 16) w[j] = x[i + j];

            else
                w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16],1);

            var t = safe_add(safe_add(rol(a,5),sha1_ft(j,b,c,d)),safe_add(safe_add(e,w[j]),sha1_kt(j)));

            e = d;

            d = c;

            c = rol(b,30);

            b = a;

            a = t;

        }

        a = safe_add(a,olda);

        b = safe_add(b,oldb);

        c = safe_add(c,oldc);

        d = safe_add(d,oldd);

        e = safe_add(e,olde);

    }

    return new Array(a,b,c,d,e);

}

/*
 *
 * Perform the appropriate triplet combination function for the current
 * iteration
 *
 * 返回对应F函数的值
 *
 */
function sha1_ft(t,b,c,d){

    if(t < 20)
        return (b & c) | ((~b) & d);

    if(t < 40)
        return b ^ c ^ d;

    if(t < 60)
        return (b & c) | (b & d) | (c & d);

    return b ^ c ^ d; // t<80
}

/*
 *
 * Determine the appropriate additive constant for the current iteration
 *
 * 返回对应的Kt值
 *
 */
function sha1_kt(t){

    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;

}

/*
 *
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 *
 * to work around bugs in some JS interpreters.
 *
 * 将32位数拆成高16位和低16位分别进行相加，从而实现 MOD 2^32 的加法
 *
 */
function safe_add(x,y){

    var lsw = (x & 0xFFFF) + (y & 0xFFFF);

    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);

    return (msw << 16) | (lsw & 0xFFFF);

}

/*
 *
 * Bitwise rotate a 32-bit number to the left.
 *
 * 32位二进制数循环左移
 *
 */
function rol(num,cnt){

    return (num << cnt) | (num >>> (32 - cnt));

}

/*
 *
 * The standard SHA1 needs the input string to fit into a block
 *
 * This function align the input string to meet the requirement
 *
 */
function AlignSHA1(str){

    var nblk = ((str.length + 8) >> 6) + 1,
        blks = new Array(nblk * 16);

    for(var i = 0 ; i < nblk * 16 ; i++)
        blks[i] = 0;

    for(i = 0 ; i < str.length ; i++)

        blks[i >> 2] |= str.charCodeAt(i) << (24 - (i & 3) * 8);

    blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);

    blks[nblk * 16 - 1] = str.length * 8;

    return blks;

}

/*
 *
 * Convert an array of big-endian words to a hex string.
 *
 */
function binb2hex(binarray){

    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";

    var str = "";

    for(var i = 0 ; i < binarray.length * 4 ; i++){

        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +

            hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);

    }

    return str;

}

/*
 *
 * calculate MessageDigest accord to source message that inputted
 *
 */
function calcDigest(){

    var digestM = hex_sha1(document.SHAForm.SourceMessage.value);

    document.SHAForm.MessageDigest.value = digestM;

}
