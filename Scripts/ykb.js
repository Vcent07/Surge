/*

Quantumult X

Unlocks by Guajie

[rewrite_remote]

#医考帮
https://api.yikaobang.com.cn/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ykb.js

[mitm]
hostname = api.yikaobang.com.cn,

*/

var body = $response.body.replace(/\u0069\u0073\u005F\u0076\u0069\u0070\u0022\u003A\u0022\u0030/g, '\u0069\u0073\u005F\u0076\u0069\u0070\u0022\u003A\u0022\u0031').replace(/\u0070\u0061\u0073\u0073\u0022\u003A\u0030/g, '\u0070\u0061\u0073\u0073\u0022\u003A\u0031')
$done({ body });
