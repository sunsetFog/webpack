new Vue({
    el: '#btn_download',
    data:function(){
        return {
            promocode: '',
            url:'',
            account: '',
            edition: true,
            tool_key: 6,
            picturn: [],
            box_height: '',
            core: [],
            channel_list: [// 0,2,3  ml
                {index: 0,name: '派趣-百度竞价',title: '钻石捕鱼官方下载',id: '12880',app_key: 'likeqd',height: '85.7rem',domain: 'http://buyu.vip-zjhx.com/',
                                                button: [{active: false,name: 'full_screen',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                photo: [{src:'url(img/ground/baidu1.jpg)',height: '48.1%'},{src:'url(img/ground/baidu2.jpg)',height: '51.9%'}],//1320+1423=2743
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 1,name: '好运-今日头条',title: '钻石娱乐',id: '16',app_key: 'likeqd',height: '100%',domain: '',
                                                button: [{active: false,name: 'full_screen',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                photo: [{src:'url(img/ground/haoyun.jpg)',height: '100%'}],
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 2,name: '好运-猎豹广告',title: '钻石娱乐',id: '13077',app_key: 'likeqd',height: '100%',domain: '',
                                                button: [{active: false,name: 'full_screen',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                photo: [{src:'url(img/ground/haoyun.jpg)',height: '100%'}],
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 3,name: '雄鹰-百度竞价',title: '休闲捕鱼',id: '13086',app_key: 'likeqd',height: '81.06rem',domain: '',
                                                button: [{active: false,name: 'full_screen',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                photo: [{src:'url(img/ground/xiongying1.jpg)',height: '36.5%'},{src:'url(img/ground/xiongying2.jpg)',height: '38%'},{src:'url(img/ground/xiongying3.jpg)',height: '25.5%'}],//946+984+664=2594
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 4,name: '好运-百度竞价',title: '钻石娱乐下载',id: '13758',app_key: 'twi8ln',height: '146.875rem',domain: '',
                                                button: [{active: false,name: 'full_screen',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                photo: [{src:'url(img/ground/haoyun_baidu1.jpg)',height: '33.4%'},{src:'url(img/ground/haoyun_baidu2.jpg)',height: '33.3%'},{src:'url(img/ground/haoyun_baidu3.jpg)',height: '33.3%'}],//1570+1565+1565=4700
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 5,name: '启航-站点1',title: '钻石娱乐官方下载',id: '14224',app_key: 'likeqd',height: '64.25rem',domain: '',
                                                button: [{active: true,name: 'play_game',width: '21.9rem',height: '3.25rem',left: '0.91rem',top: '28.3rem'},{active: true,name: 'play_game',width: '5.2rem',height: '1.88rem',left: '1.37rem',top: '39.8rem'},{active: true,name: 'play_game',width: '5.2rem',height: '1.88rem',left: '1.37rem',top: '50.3rem',src: 'url(img/qihang/qihang1_w.png)'},{active: true,name: 'play_game',width: '5.2rem',height: '1.88rem',left: '1.37rem',top: '60.8rem'}],
                                                photo: [{src:'url(img/qihang/qihang1.jpg)',height: '100%'}],//2056
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 6,name: '启航-站点2',title: '钻石娱乐官方下载',id: '14225',app_key: 'likeqd',height: '46rem',domain: 'http://qihang.osiksw.com/',
                                                button: [{active: true,name: 'play_game',width: '13.44rem',height: '9.3%',left: '5.3rem',top: '66.5%'}],
                                                photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                ios_height: '178.75rem',
                                                ios_button: [{active: true,name: 'play_game',width: '10.2rem',height: '4rem',left: '0.9rem',top: '30.5rem'},{active: true,name: 'play_game',width: '10.2rem',height: '4rem',left: '12.3rem',top: '30.5rem'}],
                                                ios_photo: [{src:'url(img/ios/ios_1.jpg)',height: '26%'},{src:'url(img/ios/ios_2.jpg)',height: '40.5%'},{src:'url(img/ios/ios_3.jpg)',height: '33.5%'}],//1486+2315+1919=5720
                                                },
                {index: 7,name: '启航-站点3',title: '钻石娱乐官方下载',id: '14226',app_key: 'likeqd',height: '83.7rem',domain: 'http://qihang.l9pjfs.com/',
                                                button: [{active: false,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                photo: [{src:'url(img/qihang/qihang3.jpg)',height: '100%'}],//2678
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 8,name: '正版推广',title: '下载页面',id: '',app_key: 'likeqd',height: '100%',domain: '',
                                                button: [{active: false,name: 'full_screen',width: '13.44rem',height: '9.3%',left: '5.3rem',top: '66.5%'}],
                                                photo: [{src:'',height: '100%'}],
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 9,name: '钻石娱乐H5',title: '钻石娱乐H5下载',id: '',app_key: 'twi8ln',height: '100%',domain: '',
                                                button: [{active: false,name: 'full_screen',width: '13.44rem',height: '9.3%',left: '5.3rem',top: '66.5%'}],
                                                photo: [{src:'url(img/bg/22.jpg)',height: '100%'}],
                                                ios_height: '0rem',
                                                ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}],
                                                ios_photo: [{src:'url(img/qihang/qihang2.jpg)',height: '100%'}],
                                                },
                {index: 10,name: '雄鹰百度竞价',title: '钻石娱乐下载',id: '15511',app_key: 'likeqd',height: '98rem',domain: 'https://xy.zsw3e.com/',
                                                button: [{active: false,name: 'play_game',width: '10rem',height: '4rem',left: '7rem',top: '29.6rem'}],
                                                photo: [{src:'url(img/xiongying/andro_1.jpg)',height: '33.5%'},{src:'url(img/xiongying/andro_2.jpg)',height: '33.5%'},{src:'url(img/xiongying/andro_3.jpg)',height: '33%'}],//1050+1050+1036=3136
                                                ios_height: '171.8rem',
                                                ios_button: [{active: false,name: 'play_game',width: '10rem',height: '4rem',left: '7rem',top: '29rem'}],
                                                ios_photo: [{src:'url(img/xiongying/ios_1.jpg)',height: '25.8%'},{src:'url(img/xiongying/ios_2.jpg)',height: '25.8%'},{src:'url(img/xiongying/ios_3.jpg)',height: '25.8%'},{src:'url(img/xiongying/ios_4.jpg)',height: '22.6%'}],//1420+1420+1420+1238=5498
                                                },
            ],
            info_list: [
                {width: 16.3,right: 0.625,top: 0,src: 'img/danmu/tx-1.png',content: '男朋友叫我约会，想玩游戏不想去，咋办'},
                {width: 13.5,right: 0.625,top: 2.76,src: 'img/danmu/tx-2.png',content: '昨天又玩了一个通宵，5555好累'},
                {width: 16.5,right: 0.625,top: 5.52,src: 'img/danmu/tx-3.png',content: '完全不用充值啊，赢了5000的路过，哈哈'},
                {width: 14.8,right: 0.625,top: 8.28,src: 'img/danmu/tx-4.png',content: '比其他电玩城游戏好玩很多，赞一个'},
                {width: 19,right: 0.625,top: 11.04,src: 'img/danmu/tx-5.png',content: '刚才一炮打死了全屏炸弹，赢了1万多金币，哈哈'},
                {width: 14.2,right: 0.625,top: 13.8,src: 'img/danmu/tx-6.png',content: '玩的人这么多啊，房间都进不去啦'},
                {width: 21,right: 0.625,top: 16.56,src: 'img/danmu/tx-7.png',content: '客服MM好专业啊，遇到问题很快就帮忙解决啦，好评'},
                {width: 16.3,right: 0.625,top: 19.32,src: 'img/danmu/tx-1.png',content: '男朋友叫我约会，想玩游戏不想去，咋办'},
                {width: 13.5,right: 0.625,top: 22.08,src: 'img/danmu/tx-2.png',content: '昨天又玩了一个通宵，5555好累'},
                {width: 16.5,right: 0.625,top: 24.84,src: 'img/danmu/tx-3.png',content: '完全不用充值啊，赢了5000的路过，哈哈'},
                {width: 14.8,right: 0.625,top: 27.6,src: 'img/danmu/tx-4.png',content: '比其他电玩城游戏好玩很多，赞一个'},
                {width: 19,right: 0.625,top: 30.36,src: 'img/danmu/tx-5.png',content: '刚才一炮打死了全屏炸弹，赢了1万多金币，哈哈'},
                {width: 14.2,right: 0.625,top: 33.12,src: 'img/danmu/tx-6.png',content: '玩的人这么多啊，房间都进不去啦'},
                {width: 21,right: 0.625,top: 35.88,src: 'img/danmu/tx-7.png',content: '客服MM好专业啊，遇到问题很快就帮忙解决啦，好评'},
            ],
            is_energy: false,
            is_ios: false,
            roll_ios: false,
            android_ios: '14%',
            page_picturn: [
                {src: 'url(img/bg/01.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/01.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/02.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/03.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/04.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/05.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/06.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/07.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/08.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/09.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/10.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/11.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/12.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/13.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/14.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/15.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/16.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/17.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/18.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/19.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/20.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]},
                {src: 'url(img/bg/21.jpg)',ios_button: [{active: true,name: 'play_game',width: '0rem',height: '0rem',left: '0rem',top: '0rem'}]}
            ],
        }
    },
    created:function(){
        this.tool_key = overall.tool_key;
        var urlhttp = window.location.href;
        if(window.location.host=="10.1.101.120:504"&&urlhttp.indexOf('?num=')!=-1){
            this.tool_key = Number(urlhttp.split('?num=')[1]);
            this.url = 'http://10.1.101.120:502';
        }
        document.title = this.channel_list[this.tool_key].title;
        if(this.channel_list[this.tool_key].height!="100%"){
            this.box_height = this.channel_list[this.tool_key].height;
        }
        this.account = this.channel_list[this.tool_key].id;
        this.picturn = this.channel_list[this.tool_key].photo;
        this.core = this.channel_list[this.tool_key].button;
        this.iosPhone();
    },
    mounted:function(){
        var that = this;
        if(that.tool_key==8){
            var rang_key = this.random(1,21);
            this.picturn[0].src = this.page_picturn[rang_key].src;
            that.getAgent();
        }else if(that.tool_key==9){
            that.getAgent();
        }else{
            ga('set', 'page', this.hrefGa());
            ga('send', 'pageview');
            // that.cardGame();
        }
        that.renderResize();
        window.addEventListener("resize", that.renderResize, false);
        window.addEventListener("scroll", that.handleScroll);
    },
    beforeDestroy:function(){
        window.removeEventListener("resize", this.renderResize, false);
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll:function(){
            var big_box_scroll = document.getElementById('btn_download');
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // console.log('top-666',scrollTop)
            if(scrollTop>big_box_scroll.offsetHeight*0.54){
                this.roll_ios = true;
            }else{
                this.roll_ios = false;
            }
        },
        getAgent:function(){
            var that = this;
            var urlhttp = window.location.href;
            if (urlhttp.indexOf('?') && urlhttp.split('?')[1]) {
                that.promocode = window.location.href.split('?')[1];
                that.promocode = that.promocode.substring(0,9);
            }
            
            ga('set', 'page', that.hrefGa());
            ga('send', 'pageview');
            var datauser = {
                promocode: that.promocode,
                deviceid: navigator.userAgent
            }
            var url = that.url + '/web/player/playerdownload';
            $.ajax({
                type: 'post',
                url:url,
                data: JSON.stringify(datauser),
                async: false,
                contentType: 'application/json;charset=UTF-8',
                success: function (res) {
                var resdata = JSON.parse(res);
                    if (Number(resdata.code) == 0) {
                        that.account = resdata.data.agent_account_id;
                        document.cookie='account='+that.account;

                        that.cardGame();
                    } else {
                        if(that.promocode!='num=8'){
                            alert('推广码错误:'+resdata.message);
                        }
                    }
                    
                }
            })
        },
        renderResize:function(){
            if(this.isMobile()){
                this.is_energy = false;
                if(window.screen.width>window.screen.height){
                    if(this.channel_list[this.tool_key].height=="100%"){
                        var hengping = document.body.clientWidth/0.562;
                        this.box_height = hengping +'px';
                    }
                }else{
                    if(this.channel_list[this.tool_key].height=="100%"){
                        this.box_height = document.body.clientHeight +'px';
                    }
                }
            }else{
                this.is_energy = true;
                if(this.channel_list[this.tool_key].height=="100%"){
                    this.box_height = '1334.5px';
                }
            }
        },
        cardGame:function(){
            var that = this;
            var jiantieban = {agent_id: that.account};
            new OpenInstall({
                appKey : that.channel_list[that.tool_key].app_key,
                channelCode: "50001",
                onready : function() {
                    var point = this,trigger = Array.from(document.getElementsByClassName(that.core[0].name));
                    point.schemeWakeup();
                    trigger.forEach(function(ele,index) {
                        ele.style.visibility = "visible";
                        ele.onclick = function() {
                            if(that.is_ios==true&&index==0&&that.tool_key==6){
                                var big_box = document.getElementById('btn_download');
                                document.documentElement.scrollTop = document.body.scrollTop = big_box.offsetHeight*0.667;
                                return;
                            }
                            if(that.is_ios==true&&index==2&&that.tool_key==6){
                                ga('send', 'event', that.hrefGa(), 'download', navigator.userAgent, 1);
                                that.copyBoard(jiantieban);
                                window.location.href = "https://webgamemb.premsqp72.com/t/q/index-ios-h5.html?agent_id="+that.account;//ol
                                // window.location.href = "https://webgamemb.predyfqp1.com/t/q/index-ios-h5.html?agent_id="+that.account;//pre
                                return;
                            }
                            ga('send', 'event', that.hrefGa(), 'download', navigator.userAgent, 1);
                            if(that.edition){
                                point.wakeupOrInstall();

                                that.copyBoard(jiantieban);

                                // var list = JSON.stringify(jiantieban)
                                // that.copyHandle(list)
                                return false;
                            }else{
                                that.copyBoard(jiantieban);
                                that.download('./file/asyl-h5.apk');
                                return false;
                            }
                        }

                    })



                }
            }, jiantieban); 
        },
        hrefGa:function() {
            if(this.promocode!=''){
                var href_s = '/'+location.protocol + '//' + window.location.host+'/?'+this.promocode;
            }else{
                var href_s = '/'+window.location.href;
            }
            return href_s;
        },
        isMobile:function() {
            var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
            return flag;
        },
        copyHandle:function(message) {
            // var input = document.createElement("input");
            // input.value = message;
            // document.body.appendChild(input);
            // input.select();
            // input.setSelectionRange(0, input.value.length), document.execCommand('Copy');
            // document.body.removeChild(input);
        },
        random:function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        mathRand:function(){
            // var num="";
            // for(var i=0;i<8;i++){
            //     num+=Math.floor(Math.random()*10);
            // }
            // return num;
        },
        copyBoard:function(data){
            var clipboard = new ClipboardJS('.full_screen',{
                text: function() {
                    return JSON.stringify(data);
                }
            })
            clipboard.on('success',function(e){
                // console.log(e);
                e.clearSelection();
            })
            clipboard.on('error',function(e){
                // console.log(e);
            })
        },
        systemVersion:function(){
            // var phone_system = navigator.userAgent;
            // if(/android/i.test(phone_system)){
            //     // console.log("This is Android'browser.");//这是Android平台下浏览器
            //         if(phone_system.indexOf('Android ')!=-1){
            //             var number = phone_system.split('Android ')[1].split('.')[0];
            //             if(Number(number)<6){
            //                 // this.edition = false;
            //             }
            //         }
            // }
            // if(/(iPhone|iPad|iPod|iOS)/i.test(phone_system)){
            //     console.log("This is iOS'browser.");//这是iOS平台下浏览器
            // }
            // if(/Linux/i.test(phone_system)){
            //     console.log("This is Linux'browser.");//这是Linux平台下浏览器
            // }
            // if(/Linux/i.test(navigator.platform)){
            //     console.log("This is Linux operating system.");//这是Linux操作系统平台
            // }
        },
        iosPhone:function(){
            var phone_system = navigator.userAgent;
            var bodyTag = document.getElementsByTagName('body')[0];
            if(/(iPhone|iPad|iPod|iOS)/i.test(phone_system)){
                bodyTag.classList.remove("fixed_yipc");
                if(this.tool_key==6||this.tool_key==10){
                    this.is_ios = true;
                    this.picturn = this.channel_list[this.tool_key].ios_photo;
                    this.box_height = this.channel_list[this.tool_key].ios_height;
                    this.android_ios = '3.5%';
                    this.core = this.channel_list[this.tool_key].ios_button;
                }    
            }else{
                bodyTag.classList.add("fixed_yipc");
                this.is_ios = false;
            }
        },
        download:function(path) {
            var urls = path.split('/');
            axios.create().get(path,{
                responseType: 'blob'
            }).then(function(res){
                var blob = new Blob([res.data],{type:'application/download'});
                var a = document.createElement('a');
                    a.download = urls[urls.length-1];
                    a.href = URL.createObjectURL(blob);
                    a.click();
            }).catch(function(e){
                return e;
            })
        }
    }
})