!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,i){!function(e,t){if(!v[e]||!b[e])return;for(var i in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,i)&&(u[i]=t[i]);0==--_&&0===y&&O()}(e,i),t&&t(e,i)};var i,r=!0,n="e402c140201ec4c51a21",o=1e4,a={},h=[],c=[];function s(e){var t=E[e];if(!t)return P;var r=function(r){return t.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(h=[e],i=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),h=[]),P(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,n(o));return r.e=function(e){return"ready"===m&&p("prepare"),y++,P.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===m&&(w[e]||k(e),0===y&&0===_&&O())}},r.t=function(e,t){return 1&t&&(e=r(e)),P.t(e,-2&t)},r}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,i){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=i||function(){};else t._acceptedDependencies[e]=i||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var i=0;i<e.length;i++)t._declinedDependencies[e[i]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var i=t._disposeHandlers.indexOf(e);i>=0&&t._disposeHandlers.splice(i,1)},check:x,apply:q,status:function(e){if(!e)return m;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:a[e]};return i=void 0,t}var d=[],m="idle";function p(e){m=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var g,u,f,_=0,y=0,w={},b={},v={};function j(e){return+e+""===e?+e:e}function x(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=o,t=t||1e4,new Promise((function(e,i){if("undefined"==typeof XMLHttpRequest)return i(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+n+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return i(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)i(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)i(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void i(e)}e(t)}}}))).then((function(e){if(!e)return p("idle"),null;b={},w={},v=e.c,f=e.h,p("prepare");var t=new Promise((function(e,t){g={resolve:e,reject:t}}));u={};return k(4),"prepare"===m&&0===y&&0===_&&O(),t}));var t}function k(e){v[e]?(b[e]=!0,_++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+n+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function O(){p("ready");var e=g;if(g=null,e)if(r)Promise.resolve().then((function(){return q(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var i in u)Object.prototype.hasOwnProperty.call(u,i)&&t.push(j(i));e.resolve(t)}}function q(t){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var i,r,o,c,s;function l(e){for(var t=[e],i={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var n=r.pop(),o=n.id,a=n.chain;if((c=E[o])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var h=0;h<c.parents.length;h++){var s=c.parents[h],l=E[s];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([s]),moduleId:o,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[o]?(i[s]||(i[s]=[]),d(i[s],[o])):(delete i[s],t.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:i}}function d(e,t){for(var i=0;i<t.length;i++){var r=t[i];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var g={},_=[],y={},w=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var b in u)if(Object.prototype.hasOwnProperty.call(u,b)){var x;s=j(b);var k=!1,O=!1,q=!1,D="";switch((x=u[b]?l(s):{type:"disposed",moduleId:b}).chain&&(D="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(k=new Error("Aborted because of self decline: "+x.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(k=new Error("Aborted because "+s+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(x),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),q=!0;break;default:throw new Error("Unexception type "+x.type)}if(k)return p("abort"),Promise.reject(k);if(O)for(s in y[s]=u[s],d(_,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,s)&&(g[s]||(g[s]=[]),d(g[s],x.outdatedDependencies[s]));q&&(d(_,[x.moduleId]),y[s]=w)}var H,M=[];for(r=0;r<_.length;r++)s=_[r],E[s]&&E[s].hot._selfAccepted&&y[s]!==w&&M.push({module:s,errorHandler:E[s].hot._selfAccepted});p("dispose"),Object.keys(v).forEach((function(e){!1===v[e]&&function(e){delete installedChunks[e]}(e)}));for(var A,S,I=_.slice();I.length>0;)if(s=I.pop(),c=E[s]){var B={},T=c.hot._disposeHandlers;for(o=0;o<T.length;o++)(i=T[o])(B);for(a[s]=B,c.hot.active=!1,delete E[s],delete g[s],o=0;o<c.children.length;o++){var R=E[c.children[o]];R&&((H=R.parents.indexOf(s))>=0&&R.parents.splice(H,1))}}for(s in g)if(Object.prototype.hasOwnProperty.call(g,s)&&(c=E[s]))for(S=g[s],o=0;o<S.length;o++)A=S[o],(H=c.children.indexOf(A))>=0&&c.children.splice(H,1);for(s in p("apply"),n=f,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var U=null;for(s in g)if(Object.prototype.hasOwnProperty.call(g,s)&&(c=E[s])){S=g[s];var G=[];for(r=0;r<S.length;r++)if(A=S[r],i=c.hot._acceptedDependencies[A]){if(-1!==G.indexOf(i))continue;G.push(i)}for(r=0;r<G.length;r++){i=G[r];try{i(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:S[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<M.length;r++){var L=M[r];s=L.module,h=[s];try{P(s)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(i){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:i,originalError:e}),t.ignoreErrored||U||(U=i),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||U||(U=e)}}return U?(p("fail"),Promise.reject(U)):(p("idle"),new Promise((function(e){e(_)})))}var E={};function P(t){if(E[t])return E[t].exports;var i=E[t]={i:t,l:!1,exports:{},hot:l(t),parents:(c=h,h=[],c),children:[]};return e[t].call(i.exports,i,i.exports,s(t)),i.l=!0,i.exports}P.m=e,P.c=E,P.d=function(e,t,i){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(P.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(i,r,function(t){return e[t]}.bind(null,r));return i},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="./",P.h=function(){return n},s(5)(P.s=5)}({5:function(e,t){new Vue({el:"#btn_download",data:function(){return{promocode:"",url:"",account:"",edition:!0,tool_key:6,picturn:[],box_height:"",core:[],channel_list:[{index:0,name:"派趣-百度竞价",title:"钻石捕鱼官方下载",id:"12880",app_key:"likeqd",height:"85.7rem",domain:"http://buyu.vip-zjhx.com/",button:[{active:!1,name:"full_screen",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],photo:[{src:"url(img/ground/baidu1.jpg)",height:"48.1%"},{src:"url(img/ground/baidu2.jpg)",height:"51.9%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:1,name:"好运-今日头条",title:"钻石娱乐",id:"16",app_key:"likeqd",height:"100%",domain:"",button:[{active:!1,name:"full_screen",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],photo:[{src:"url(img/ground/haoyun.jpg)",height:"100%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:2,name:"好运-猎豹广告",title:"钻石娱乐",id:"13077",app_key:"likeqd",height:"100%",domain:"",button:[{active:!1,name:"full_screen",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],photo:[{src:"url(img/ground/haoyun.jpg)",height:"100%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:3,name:"雄鹰-百度竞价",title:"休闲捕鱼",id:"13086",app_key:"likeqd",height:"81.06rem",domain:"",button:[{active:!1,name:"full_screen",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],photo:[{src:"url(img/ground/xiongying1.jpg)",height:"36.5%"},{src:"url(img/ground/xiongying2.jpg)",height:"38%"},{src:"url(img/ground/xiongying3.jpg)",height:"25.5%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:4,name:"好运-百度竞价",title:"钻石娱乐下载",id:"13758",app_key:"twi8ln",height:"146.875rem",domain:"",button:[{active:!1,name:"full_screen",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],photo:[{src:"url(img/ground/haoyun_baidu1.jpg)",height:"33.4%"},{src:"url(img/ground/haoyun_baidu2.jpg)",height:"33.3%"},{src:"url(img/ground/haoyun_baidu3.jpg)",height:"33.3%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:5,name:"启航-站点1",title:"钻石娱乐官方下载",id:"14224",app_key:"likeqd",height:"64.25rem",domain:"",button:[{active:!0,name:"play_game",width:"21.9rem",height:"3.25rem",left:"0.91rem",top:"28.3rem"},{active:!0,name:"play_game",width:"5.2rem",height:"1.88rem",left:"1.37rem",top:"39.8rem"},{active:!0,name:"play_game",width:"5.2rem",height:"1.88rem",left:"1.37rem",top:"50.3rem",src:"url(img/qihang/qihang1_w.png)"},{active:!0,name:"play_game",width:"5.2rem",height:"1.88rem",left:"1.37rem",top:"60.8rem"}],photo:[{src:"url(img/qihang/qihang1.jpg)",height:"100%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:6,name:"启航-站点2",title:"钻石娱乐官方下载",id:"14225",app_key:"likeqd",height:"46rem",domain:"http://qihang.osiksw.com/",button:[{active:!0,name:"play_game",width:"13.44rem",height:"9.3%",left:"5.3rem",top:"66.5%"}],photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}],ios_height:"178.75rem",ios_button:[{active:!0,name:"play_game",width:"10.2rem",height:"4rem",left:"0.9rem",top:"30.5rem"},{active:!0,name:"play_game",width:"10.2rem",height:"4rem",left:"12.3rem",top:"30.5rem"}],ios_photo:[{src:"url(img/ios/ios_1.jpg)",height:"26%"},{src:"url(img/ios/ios_2.jpg)",height:"40.5%"},{src:"url(img/ios/ios_3.jpg)",height:"33.5%"}]},{index:7,name:"启航-站点3",title:"钻石娱乐官方下载",id:"14226",app_key:"likeqd",height:"83.7rem",domain:"http://qihang.l9pjfs.com/",button:[{active:!1,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],photo:[{src:"url(img/qihang/qihang3.jpg)",height:"100%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:8,name:"正版推广",title:"下载页面",id:"",app_key:"likeqd",height:"100%",domain:"",button:[{active:!1,name:"full_screen",width:"13.44rem",height:"9.3%",left:"5.3rem",top:"66.5%"}],photo:[{src:"",height:"100%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:9,name:"钻石娱乐H5",title:"钻石娱乐H5下载",id:"",app_key:"twi8ln",height:"100%",domain:"",button:[{active:!1,name:"full_screen",width:"13.44rem",height:"9.3%",left:"5.3rem",top:"66.5%"}],photo:[{src:"url(img/bg/22.jpg)",height:"100%"}],ios_height:"0rem",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}],ios_photo:[{src:"url(img/qihang/qihang2.jpg)",height:"100%"}]},{index:10,name:"雄鹰百度竞价",title:"钻石娱乐下载",id:"15511",app_key:"likeqd",height:"98rem",domain:"https://xy.zsw3e.com/",button:[{active:!1,name:"play_game",width:"10rem",height:"4rem",left:"7rem",top:"29.6rem"}],photo:[{src:"url(img/xiongying/andro_1.jpg)",height:"33.5%"},{src:"url(img/xiongying/andro_2.jpg)",height:"33.5%"},{src:"url(img/xiongying/andro_3.jpg)",height:"33%"}],ios_height:"171.8rem",ios_button:[{active:!1,name:"play_game",width:"10rem",height:"4rem",left:"7rem",top:"29rem"}],ios_photo:[{src:"url(img/xiongying/ios_1.jpg)",height:"25.8%"},{src:"url(img/xiongying/ios_2.jpg)",height:"25.8%"},{src:"url(img/xiongying/ios_3.jpg)",height:"25.8%"},{src:"url(img/xiongying/ios_4.jpg)",height:"22.6%"}]}],info_list:[{width:16.3,right:.625,top:0,src:"img/danmu/tx-1.png",content:"男朋友叫我约会，想玩游戏不想去，咋办"},{width:13.5,right:.625,top:2.76,src:"img/danmu/tx-2.png",content:"昨天又玩了一个通宵，5555好累"},{width:16.5,right:.625,top:5.52,src:"img/danmu/tx-3.png",content:"完全不用充值啊，赢了5000的路过，哈哈"},{width:14.8,right:.625,top:8.28,src:"img/danmu/tx-4.png",content:"比其他电玩城游戏好玩很多，赞一个"},{width:19,right:.625,top:11.04,src:"img/danmu/tx-5.png",content:"刚才一炮打死了全屏炸弹，赢了1万多金币，哈哈"},{width:14.2,right:.625,top:13.8,src:"img/danmu/tx-6.png",content:"玩的人这么多啊，房间都进不去啦"},{width:21,right:.625,top:16.56,src:"img/danmu/tx-7.png",content:"客服MM好专业啊，遇到问题很快就帮忙解决啦，好评"},{width:16.3,right:.625,top:19.32,src:"img/danmu/tx-1.png",content:"男朋友叫我约会，想玩游戏不想去，咋办"},{width:13.5,right:.625,top:22.08,src:"img/danmu/tx-2.png",content:"昨天又玩了一个通宵，5555好累"},{width:16.5,right:.625,top:24.84,src:"img/danmu/tx-3.png",content:"完全不用充值啊，赢了5000的路过，哈哈"},{width:14.8,right:.625,top:27.6,src:"img/danmu/tx-4.png",content:"比其他电玩城游戏好玩很多，赞一个"},{width:19,right:.625,top:30.36,src:"img/danmu/tx-5.png",content:"刚才一炮打死了全屏炸弹，赢了1万多金币，哈哈"},{width:14.2,right:.625,top:33.12,src:"img/danmu/tx-6.png",content:"玩的人这么多啊，房间都进不去啦"},{width:21,right:.625,top:35.88,src:"img/danmu/tx-7.png",content:"客服MM好专业啊，遇到问题很快就帮忙解决啦，好评"}],is_energy:!1,is_ios:!1,roll_ios:!1,android_ios:"14%",page_picturn:[{src:"url(img/bg/01.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/01.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/02.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/03.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/04.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/05.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/06.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/07.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/08.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/09.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/10.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/11.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/12.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/13.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/14.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/15.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/16.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/17.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/18.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/19.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/20.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]},{src:"url(img/bg/21.jpg)",ios_button:[{active:!0,name:"play_game",width:"0rem",height:"0rem",left:"0rem",top:"0rem"}]}]}},created:function(){this.tool_key=overall.tool_key;var e=window.location.href;"10.1.101.120:504"==window.location.host&&-1!=e.indexOf("?num=")&&(this.tool_key=Number(e.split("?num=")[1]),this.url="http://10.1.101.120:502"),document.title=this.channel_list[this.tool_key].title,"100%"!=this.channel_list[this.tool_key].height&&(this.box_height=this.channel_list[this.tool_key].height),this.account=this.channel_list[this.tool_key].id,this.picturn=this.channel_list[this.tool_key].photo,this.core=this.channel_list[this.tool_key].button,this.iosPhone()},mounted:function(){if(8==this.tool_key){var e=this.random(1,21);this.picturn[0].src=this.page_picturn[e].src,this.getAgent()}else 9==this.tool_key?this.getAgent():(ga("set","page",this.hrefGa()),ga("send","pageview"),this.cardGame());this.renderResize(),window.addEventListener("resize",this.renderResize,!1),window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("resize",this.renderResize,!1),window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var e=document.getElementById("btn_download");(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>.54*e.offsetHeight?this.roll_ios=!0:this.roll_ios=!1},getAgent:function(){var e=this,t=window.location.href;t.indexOf("?")&&t.split("?")[1]&&(e.promocode=window.location.href.split("?")[1],e.promocode=e.promocode.substring(0,9)),ga("set","page",e.hrefGa()),ga("send","pageview");var i={promocode:e.promocode,deviceid:navigator.userAgent},r=e.url+"/web/player/playerdownload";$.ajax({type:"post",url:r,data:JSON.stringify(i),async:!1,contentType:"application/json;charset=UTF-8",success:function(t){var i=JSON.parse(t);0==Number(i.code)?(e.account=i.data.agent_account_id,document.cookie="account="+e.account,e.cardGame()):"num=8"!=e.promocode&&alert("推广码错误:"+i.message)}})},renderResize:function(){if(this.isMobile())if(this.is_energy=!1,window.screen.width>window.screen.height){if("100%"==this.channel_list[this.tool_key].height){var e=document.body.clientWidth/.562;this.box_height=e+"px"}}else"100%"==this.channel_list[this.tool_key].height&&(this.box_height=document.body.clientHeight+"px");else this.is_energy=!0,"100%"==this.channel_list[this.tool_key].height&&(this.box_height="1334.5px")},cardGame:function(){var e=this,t={agent_id:e.account};new OpenInstall({appKey:e.channel_list[e.tool_key].app_key,channelCode:"50001",onready:function(){var i=this,r=Array.from(document.getElementsByClassName(e.core[0].name));i.schemeWakeup(),r.forEach((function(r,n){r.style.visibility="visible",r.onclick=function(){if(1!=e.is_ios||0!=n||6!=e.tool_key)return 1==e.is_ios&&2==n&&6==e.tool_key?(ga("send","event",e.hrefGa(),"download",navigator.userAgent,1),e.copyBoard(t),void(window.location.href="https://webgamemb.premsqp72.com/t/q/index-ios-h5.html?agent_id="+e.account)):(ga("send","event",e.hrefGa(),"download",navigator.userAgent,1),e.edition?(i.wakeupOrInstall(),e.copyBoard(t),!1):(e.copyBoard(t),e.download("./file/asyl-h5.apk"),!1));var r=document.getElementById("btn_download");document.documentElement.scrollTop=document.body.scrollTop=.667*r.offsetHeight}}))}},t)},hrefGa:function(){if(""!=this.promocode)var e="/"+location.protocol+"//"+window.location.host+"/?"+this.promocode;else e="/"+window.location.href;return e},isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},copyHandle:function(e){},random:function(e,t){return Math.floor(Math.random()*(t-e))+e},mathRand:function(){},copyBoard:function(e){var t=new ClipboardJS(".full_screen",{text:function(){return JSON.stringify(e)}});t.on("success",(function(e){e.clearSelection()})),t.on("error",(function(e){}))},systemVersion:function(){},iosPhone:function(){var e=navigator.userAgent,t=document.getElementsByTagName("body")[0];/(iPhone|iPad|iPod|iOS)/i.test(e)?(t.classList.remove("fixed_yipc"),6!=this.tool_key&&10!=this.tool_key||(this.is_ios=!0,this.picturn=this.channel_list[this.tool_key].ios_photo,this.box_height=this.channel_list[this.tool_key].ios_height,this.android_ios="3.5%",this.core=this.channel_list[this.tool_key].ios_button)):(t.classList.add("fixed_yipc"),this.is_ios=!1)},download:function(e){var t=e.split("/");axios.create().get(e,{responseType:"blob"}).then((function(e){var i=new Blob([e.data],{type:"application/download"}),r=document.createElement("a");r.download=t[t.length-1],r.href=URL.createObjectURL(i),r.click()})).catch((function(e){return e}))}}})}});