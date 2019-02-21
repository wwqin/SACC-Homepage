let iconX=new Array();
let iconY=new Array();
iconX[0] = $("#sacc-icon-logo").position().top;
iconY[0] = $("#sacc-icon-logo").position().left;
iconX[3] = $("#sacc-icon-jq").position().top;
iconY[3] = $("#sacc-icon-jq").position().left;
iconX[4] = $("#sacc-icon-h5").position().top;
iconY[4] = $("#sacc-icon-h5").position().left;
iconX[2] = $("#sacc-icon-py").position().top;
iconY[2] = $("#sacc-icon-py").position().left;
iconX[5] = $("#sacc-icon-ad").position().top;
iconY[5] = $("#sacc-icon-ad").position().left;
iconX[1] = $("#sacc-icon-java").position().top;
iconY[1] = $("#sacc-icon-java").position().left;
iconX[6]=$("#canvas").position().top;
iconY[6]=$("#canvas").position().left;
$('body').mousemove(function(e) { 
    let xx = e.pageX;
    let yy = e.pageY;
    let x=new Array();
    let y=new Array();
    x[0]=iconX[0]-(yy-iconX[0])/90;
    y[0]=iconY[0]-(xx-iconY[0])/90;
    x[1]=iconX[1]-(yy-iconX[1])/60;
    y[1]=iconY[1]-(xx-iconY[1])/60; 
    x[2]=iconX[2]-(yy-iconX[2])/40;
    y[2]=iconY[2]-(xx-iconY[2])/40; 
    x[3]=iconX[3]-(yy-iconX[3])/50;
    y[3]=iconY[3]-(xx-iconY[3])/50; 
    x[4]=iconX[4]-(yy-iconX[4])/20;
    y[4]=iconY[4]-(xx-iconY[4])/20; 
    x[5]=iconX[5]-(yy-iconX[5])/40;
    y[5]=iconY[5]-(xx-iconY[5])/40;
    x[6]=iconX[6]-(yy-iconX[6])/120;
    y[6]=iconY[6]-(xx-iconY[6])/120;
    $("#sacc-icon-logo").css("left",y[0]+"px").css("top",x[0]+"px");
    $("#sacc-icon-java").css("left",y[1]+"px").css("top",x[1]+"px");
    $("#sacc-icon-py").css("left",y[2]+"px").css("top",x[2]+"px");
    $("#sacc-icon-jq").css("left",y[3]+"px").css("top",x[3]+"px");
    $("#sacc-icon-h5").css("left",y[4]+"px").css("top",x[4]+"px");
    $("#sacc-icon-ad").css("left",y[5]+"px").css("top",x[5]+"px");
    $("#canvas").css("left",y[6]+"px").css("top",x[6]+"px");
});

var flag=false;
var dataChariman=[{"id":"zj","name":"张嘉","direction":"后端","text":"懂一点Python，Java，学不会前端只能学后端的渣渣，技术没有长进，头皮越来越冷，只有霸王才能拯救我。PS:我边上的几位才是真大佬，最后广告位出租(ಡωಡ)有意私聊","src":"./images/ministers/head_zj.jpg"},
    {"id":"ck","name":"陈坤","direction":"机器学习","text":"我常常因为不够沙雕而感到和大家格格不入","src":"./images/ministers/head_ck.jpg"},
    {"id":"gym","name":"郭亚旻","direction":"前端","text":"今天穿上羽绒服的我好像跟大家格格不入。虽然被说肿的像只小香猪。虽然嘎嘎抱住我的胳膊，说：“啊好像抱住一条腿”。但是，真的一点也不冷啦！然后把手机揣兜里，手机也不冷啦！最后我要吹爆刘小姐的丝瓜炒蛋！","src":"./images/ministers/head_gym.jpg"},
    {"id":"gy","name":"高宇","direction":"计算机图形学","text":"用过flask搭建后台，后转为用java。目前在做图形学（ComputerGraphics,ComputerVision,ImageProcessing）","src":"./images/ministers/head_gy.jpg"},
    {"id":"lzh","name":"雷镇豪","direction":"嵌入式开发","text":"本人擅长单片机、物联网、无人机等项目的鼓掌和叫好，精通 C、C++、Python、Golang、Docker、Kubernetes、HTML、CSS、JavaScript等单词的拼写，熟悉 Windows、Linux、OS X、Android、iOS 等系统的开关机。","src":"./images/ministers/head_lzh.jpg"},
    {"id":"wyh","name":"王玉函","direction":"全栈","text":"http://intro.ponder.ink/#/welcome1","src":"./images/ministers/head_wyh.jpg"},
    {"id":"why","name":"王化益","direction":"前端","text":"本人男，很帅，敲了3年代码，很累，现寻找漂亮小姐姐一起浪迹天涯，有意者加我微信:fytc1011","src":"./images/ministers/head_why.jpg"},
    {"id":"dt","name":"刁太","direction":"前端","text":"这个人很懒，什么都没有写。","src":"./images/ministers/head_dt.jpg"},
    {"id":"cwq","name":"陈维清","direction":"機械學習×理論生物学","text":"精通各种bug编写，嘤嘤嘤能力满级。機械學習海外在逃，21世纪的学科入坑中。长期高价收购防脱发秘籍+vx:budazhu97","src":"./images/ministers/head_cwq.jpg"},
    {"id":"nxy","name":"牛夕源","direction":"全栈","text":"就职于华为，祝愿看到这里的人：人生永远没有bug！","src":"./images/ministers/head_nxy.jpg"},
    {"id":"wd","name":"王丹","direction":"全栈","text":"14级老学姐，才华才是你散发魅力的根本，刚好科协需要这样有魅力的你","src":"./images/ministers/head_wd.jpg"},
    {"id":"fl","name":"范莉","direction":"全栈","text":"技术不在多高，敢想敢做就是大神！科协助你在大神之路上越走越远！加油吧，柚子们！","src":"./images/ministers/head_fl.jpg"},
    {"id":"wjy","name":"王家豪","direction":"后端","text":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","src":"./images/ministers/head_wjh.jpg"},
    {"id":"lyy","name":"梁羽燕","direction":"全栈","text":"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容","src":"./images/ministers/head_lyy.jpg"},
];
function clickHidden(){
    if(flag==true){
        var id = setInterval(a, 5);
        var hei=$('.sacc-introduce').height();
        var hei_1=$("#sacc-site-main-section-fifth").height();
        var hei_2=$(".sacc-contact").height();
        function a(){
            if(hei>=0){
                hei-=3;
                hei_1-=3;
                $(".sacc-contact").height(hei_2);
                $('.sacc-introduce').height(hei);
                $("#sacc-site-main-section-fifth").height(hei_1);
            }else if(hei<0){
                flag=false;
                clearInterval(id);
                $(".sacc-introduce-img img").css("opacity",0);
                $(".sacc-introduce-text h1").text("");
                $(".sacc-introduce-text h2").text("");
                $(".sacc-introduce-text p").text("");
                $(".sacc-introduce-img img").attr("src","");
            }
        }
    }
}
var chairmenHead = $(".chairmen-content").find(".mobile-chairmen-content").find("ul").find("li").find(".chairmen-imageBox").find("img");
if ($(window).width() > 1280){
    function clickShow(data){
        if(flag==false){
            var id = setInterval(a, 5);
            var hei=$('.sacc-introduce').height();
            var hei_1=$("#sacc-site-main-section-fifth").height();
            var hei_2=$(".sacc-contact").height();
            var opacity=0;
            $(".sacc-introduce-text h1").text(dataChariman[data].name);
            $(".sacc-introduce-text h2").text(dataChariman[data].direction);
            $(".sacc-introduce-text p").text(dataChariman[data].text);
            $(".sacc-introduce-img img").attr("src",dataChariman[data].src);
            function a(){
                if(hei<300){
                    hei+=3;
                    hei_1+=3;
                    $(".sacc-contact").height(hei_2);
                    $('.sacc-introduce').height(hei);
                    $("#sacc-site-main-section-fifth").height(hei_1);
                }else if(hei==300){
                    flag=true;
                    clearInterval(id);
                    var img=setInterval(b,5);
                    function b(){
                        opacity+=0.007;
                        $(".sacc-introduce-img img").css("opacity",opacity);
                        if(opacity>=1){
                            clearInterval(img);
                        }
                    }
                }
            }
        }else if(flag==true&&dataChariman[data].name!=$(".sacc-introduce-text h1").text()){
            let hidden=setInterval(c,5);
            let opacity=1;

            function c(){
                opacity-=0.007;
                $(".sacc-introduce").css("opacity",opacity);
                if(opacity<=0){
                    clearInterval(hidden);
                    $(".sacc-introduce-text h1").text(dataChariman[data].name);
                    $(".sacc-introduce-text h2").text(dataChariman[data].direction);
                    $(".sacc-introduce-text p").text(dataChariman[data].text);
                    $(".sacc-introduce-img img").attr("src",dataChariman[data].src);
                    let show=setInterval(d,5);
                    function d(){
                        opacity+=0.007;
                        $(".sacc-introduce").css("opacity",opacity);
                        if(opacity>=1){
                            clearInterval(show);
                        }
                    }
                }
            }
        }
    }
}else if ($(window).width() < 800){
    function clickShow(data) {
        let judgeFlag=$(".chairmen-imageBox").has(`#${dataChariman[data].id}_text`).length;
        let showIntroButton = $(".mobile-chairmen-content").find("ul").find("li").find(".chairmen-disc").find("span");
        $.each(chairmenHead,function (index) {
            if (("./"+$(chairmenHead[index]).attr("src")) === dataChariman[data].src) {
                if (judgeFlag==0) {
                    $(chairmenHead[index]).css({
                        "transform":"rotate(360deg) scale(0)",
                    });
                    judgeFlag=1;
                    $(chairmenHead[index]).before(`<div id="${dataChariman[data].id}_text" style="transition: all 1s ease-in-out;opacity:0;position: absolute;top: 3px;left: 0;width: 100%;height: 60%;"><h2 style="font-family: 方正姚体;text-shadow: 0 0 .1px #000000">${dataChariman[data].direction}</h2><p style="width:94%;margin: 7px auto;text-align: center;word-wrap: break-word;word-break: break-all;">${dataChariman[data].text}</p></div>`);
                    setTimeout(function(){
                        $(`#${dataChariman[data].id}_text`).css({
                            "opacity":1,
                        });
                    },150)
                }else{
                    flag=false;
                    $(chairmenHead[index]).css({
                        "transform":"rotate(0) scale(1)",
                    });
                    $(`#${dataChariman[data].id}_text`).css({
                        "opacity":0,
                    });
                    setTimeout(function(){$(`#${dataChariman[data].id}_text`).remove();},1000);
                }         
            }
        })
    }
}
$(".sacc-introduce-close i").click(function(){
    clickHidden();
});
setTimeout(function(){
    $(".loading").remove();
    $(".loading-bar").remove();
    $(".loading-text").remove();
},1400)
$("#sacc-jump-dt").click(function(){
    window.scrollTo({
        top:$("#sacc-site-main-section-third").offset().top,
        behavior:"smooth"
    });
});
$("#sacc-jump-team").click(function(){
    window.scrollTo({
        top:$("#sacc-site-main-section-fifth").offset().top,
        behavior:"smooth"
    });
});
$("#sacc-jump-contact").click(function(){
    window.scrollTo({
        top:$(".sacc-contact").offset().top,
        behavior:"smooth"
    });
});
$("#sacc-jump-home").click(function(){
    window.scrollTo({
        top:$("#sacc-site-main-section-first").offset().top,
        behavior:"smooth"
    });
});
/*************************************************************************************************/
/*判断是否在可见区域内*/
/*************************************************************************************************/
/*变量*/
/*************************************************************************************************/
let window_height                   =       $(window).height();
var department_intro                =       $(".department-intro");
let intro_header                    =       department_intro.find(".department-intro-header");
let intro_section                   =       department_intro.find(".department-intro-section");
let intro_footer                    =       department_intro.find(".department-intro-footer");
let intro_header_height             =       intro_header.outerHeight();
let intro_section_height            =       intro_section.outerHeight();
let intro_footer_height             =       intro_footer.outerHeight();
let intro_header_top                =       department_intro.offset().top;
let intro_section_top               =       department_intro.offset().top;
let intro_footer_top                =       department_intro.offset().top;
var data = [
{"id":0,"key":intro_header,"eHeight":intro_header_height,"eTop":intro_header_top,"show":false},
{"id":1,"key":intro_section,"eHeight":intro_section_height,"eTop":intro_section_top,"show":false},
{"id":2,"key":intro_footer,"eHeight":intro_footer_height,"eTop":intro_footer_top,"show":false}
];
/*************************************************************************************************
 * 第四屏  分组介绍    变量
 *************************************************************************************************/
let tech_teams                      =       $(".tech-team");
let teams_header                    =       tech_teams.find(".tech-teams-header");
let teams_section                   =       tech_teams.find(".tech-teams-section");
let teams_header_height             =       teams_header.outerHeight();
let teams_section_height            =       teams_section.outerHeight();
let teams_header_top                =       tech_teams.offset().top + 20;
let teams_section_top               =       tech_teams.offset().top + 20;
var teams_data =
    [
        {"id":0,"key":teams_header,"eHeight":teams_header_height,"eTop":teams_header_top,"show":false},
        {"id":1,"key":teams_section,"eHeight":teams_section_height,"eTop":teams_section_top,"show":false}
    ]
/*************************************************************************************************/
/*函数：判断元素是否在当前浏览器窗口可见范围内*/
/*************************************************************************************************/
var isEmpty                      =       true;

let macBook = $(".tech-teams");
let shadow = macBook.find("span");
let macBook_top = tech_teams.offset().top + 20;
/**************************************************************************************************
* 判断是否可见    函数实现
***************************************************************************************************/

var isVisible = function (e) {
    let scroll_top                   =       $(window).scrollTop();
    let count                        =       0;
    let remove                       =       0;
    let isShow                       =       false;
    $.each(e,function (index) {
        if (e[index].eTop >= scroll_top - 250 && e[index].eTop < (scroll_top + window_height - 250)){
            this.show = true;
            isShow = this.show;
            count++;
        }else if(e[index].eTop > (scroll_top + window_height - 750) || e[index].eTop <= scroll_top - 750){
            this.show = false;
            isShow = this.show;
            remove++;
        }
    });
    return  {
        "showTime":count,
        "hiddenTime":remove,
        "isShow":isShow,
        "is_empty":isEmpty,
        "scrollTop":scroll_top,
        "macTop":macBook_top
    };
};
/*函数    添加第三屏的内容*/
var judgeAppend = function (e) {
    var event = isVisible(e);
    if (event.showTime === 3 && event.is_empty === true){
        appendChildren();
        event.is_empty = false;
        isEmpty = event.is_empty;
    } else{
        return false;
    }
}
$(function () {
    let count = 0;
    let scrollTime = 0;
    $(window).bind("scroll",function () {
        if ($(window).width() > 768){
            scrollTime++;
            header_slide_down(scrollTime);
        }
        judgeAppend(data);
        let event = isVisible(teams_data);
        if (event.isShow === true){
            count++;
            if (count === 1){
                appendFourthContent();
                switchGroups();
            }
        }
    });
    var section_five = new fifthSection();
    section_five.switch();
    let left_button             =           $(".move-left");
    let right_button            =           $(".move-right");
    let titleList               =           $(".chairmen-title").find("h1");
    let rightCI                 =           0;
    let leftCI                  =           0;
    let navCI                   =           0;
    let currentIndex            =           0;
    left_button.click(function () {
        if (currentIndex === 0){
            /*如果当前是16级主席，再点击左侧按钮就会直接跳转到14级主席团*/
            currentIndex = 2;
        } else {
            /*否则就 -1 也就是向左平移*/
            currentIndex--;
        }
        /*获取向左平移后对应的当前的下标值*/
        leftCI = section_five.moveLeft(currentIndex);
        /*切换 title */
        section_five.navSwitch(currentIndex);
    });
    right_button.click(function () {
        if (currentIndex === 2){
            /*点击右侧按钮的时候如果已经是最后一个（14级主席）了那么就瞬间定位回第一个（16级主席）*/
            currentIndex = 0;
        }else{
            /*否则向右平移*/
            currentIndex++;
        }
        /*获取向右平移后对应的当前的下标值*/
        rightCI = section_five.moveRight(currentIndex);
        /*每次平移以后都需要对应改变一下对应的title*/
        section_five.navSwitch(currentIndex);
    });
    /*
        另一种切换方式
            点击 title 进行切换
    */
    titleList.click(function () {
        /*获取当前点击的 title 对应的下标，根据这个下标值去进行平移*/
        currentIndex = section_five.switchByNav($(this).index());
        if (currentIndex > rightCI || currentIndex > leftCI){
            /*如果点击的这个下标大于此时的下标，就向右平移*/
            rightCI = section_five.moveRight(currentIndex);
        } else if (currentIndex < leftCI ||currentIndex < rightCI){
            /*如果点击的这个下标小于此时的下标，就向右平移*/
            leftCI = section_five.moveLeft(currentIndex);
        }
    })
    /*设置宽高相等*/
    setHeight();
    setMobileHeight();
});
/*************************************************************************************************/
/*动态添加li，实现懒加载的效果*/
/*
* 1.liTemplate                  li模板，动态添加时使用
* 2.data1                       存放 第三屏 所有数据
* 3.data2                       存放 第四屏 所有数据
*/
/*************************************************************************************************/
let data1 =
    [
    {
        "index":0,
        "tag":"header",
        "class":"department-intro-header",
        "content":[
            {
                "tagName":"h1",
                "tagClass":"department-intro-header-content",
                "tagContent":"Departments"
            },
            {
                "tagName":"p",
                "tagClass":"view-more",
                "tagContent":"--view more"
            }
            ]
    },
    {
        "index":1,
        "tag":"ul",
        "class":"department-intro-section",
        "content":[
            {
                "id":1,
                "key":"newMedia",
                "logoClass": "fa-video-camera",
                "title":"新媒体",
                "description":"作为科协的推广部门，新媒体的小伙伴们主要负责的是关于科协的信息的发布与分享，以及院科协公众号的运营，同时还会教授剪辑学院视频的内容，一起见证科协的各项活动，为院科协的蓬勃发展添上有力的一笔。"
            },
            {
                "id":2,
                "key":"tech",
                "logoClass":"fa-laptop",
                "title":"技术部",
                "description":"技术部现有算法、程序设计、前端设计和网络安全等技术方向，这些技术相辅相成。技术部的骨干成员实力雄厚，经历丰富。多人在程序设计大赛、网络攻防大赛、网页设计大赛等中获得奖项。"
            },
            {
                "id":3,
                "key":"office",
                "logoClass":"fa-vcard-o",
                "title":"办公室",
                "description":"办公室是科协的重要组成部分！它负责科协的整个统筹规划，承担活动策划宣传，组织运行，等工作。其下设有内务部，策划部宣传部。在办公室成员的合作下，科协才能顺利地举办各种比赛。另外，它也是科协交流放松地方和科协女生的集中营！"
            }
        ]
    },
    {
        "index":2,
        "tag":"footer",
        "class":"department-intro-footer",
        "content":[
            {
                "tagName":"div",
                "tagClass":"sacc-footer-intro",
                "tagChild": {
                        "name":"p",
                        "value":"不知道写啥"
                    }

            },
            {
                "tagName":"div",
                "tagClass":"sacc-footer-intro",
                "tagChild": {
                        "name":"p",
                        "value":"给您鞠个躬吧"
                    }
            }
            ]
    }
    ];
let data2 =
    [
        {
            "index":0,
            "tag":"header",
            "class":"tech-teams-header",
            "content":[
                {
                    "tagName":"h1",
                    "tagClass":"",
                    "tagContent":"Tech Department<br> divided into......"
                },
                {
                    "tagName":"p",
                    "tagClass":"",
                    "tagContent":"--consist of six groups"
                }
            ]
        },
        {
            "index":1,
            "tag":"section",
            "class":"tech-teams-section",
            "content":[
                {
                    "id":1,
                    "class":"pages",
                    "style":"",
                    "children":[
                        {
                            "tags":"p",
                            "style":"background-color: #f7db61;border: 1px solid #f7db61;cursor: pointer;",
                            "class":"",
                            "content":1
                        },
                        {
                            "tags":"p",
                            "style":"",
                            "class":"",
                            "content":2
                        }
                    ]
                },
                {
                    "id":2,
                    "class":"groups-intro",
                    "style":"",
                    "children":[
                        {
                            "tags":"li",
                            "style":"",
                            "class":"sacc-front-end-dev col-lg-12",
                            "content":[
                                {
                                    "tag":"span",
                                    "id":"front-end-id",
                                    "class":"col-lg-2",
                                    "content":1
                                },
                                {
                                    "tag":"div",
                                    "id":"",
                                    "class":"group-intro-content col-lg-10",
                                    "content":[
                                        {
                                            "tag":"h2",
                                            "content":"前端开发组",
                                            "class":""
                                        },
                                        {
                                            "tag":"i",
                                            "content":"",
                                            "class":"fa fa-html5"
                                        },
                                        {
                                            "tag":"p",
                                            "content":"我们是网站的艺术总监，只写有情怀的代码 我们是科协的颜值担当，只做有情调的码农 欢迎加入前端开发组~",
                                            "class":""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tags":"li",
                            "style":"",
                            "class":"sacc-backend-dev col-lg-12",
                            "content":[
                                {
                                    "tag":"span",
                                    "id":"back-end-id",
                                    "class":"col-lg-2",
                                    "content":2
                                },
                                {
                                    "tag":"div",
                                    "id":"",
                                    "class":"group-intro-content col-lg-10",
                                    "content":[
                                        {
                                            "tag":"h2",
                                            "content":"后端开发组",
                                            "class":""
                                        },
                                        {
                                            "tag":"i",
                                            "content":"",
                                            "class":"fa fa-laptop"
                                        },
                                        {
                                            "tag":"p",
                                            "content":"如果你喜欢设计应用程序的基础设施，实现算法和逻辑，以及工作于数据，那么你可能会喜欢成为一名后端开发人员。",
                                            "class":""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tags":"li",
                            "style":"",
                            "class":"sacc-embedded-dev col-lg-12",
                            "content":[
                                {
                                    "tag":"span",
                                    "id":"embedded-id",
                                    "class":"col-lg-2",
                                    "content":3
                                },
                                {
                                    "tag":"div",
                                    "id":"",
                                    "class":"group-intro-content col-lg-10",
                                    "content":[
                                        {
                                            "tag":"h2",
                                            "content":"嵌入式开发组",
                                            "class":""
                                        },
                                        {
                                            "tag":"i",
                                            "content":"",
                                            "class":"fa fa-wifi"
                                        },
                                        {
                                            "tag":"p",
                                            "content":"带领认识linux到深入linux操作系统内核，硬件、嵌入式、物联网开发，以及任何与计算机技术相关交流，欢迎dalao和萌新加入。",
                                            "class":""
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id":3,
                    "class":"imageBox",
                    "style":"opacity: 0.74;",
                    "children":[
                        {
                            "tags":"img",
                            "style":"",
                            "class":"",
                            "content":"images/mac-pro.png"
                        },
                        {
                            "tags":"span",
                            "style":"",
                            "class":"",
                            "content":""
                        }
                    ]
                },
                {
                    "id":4,
                    "class":"groups-intro hidden",
                    "style":"",
                    "children":[
                        {
                            "tags":"li",
                            "style":"",
                            "class":"sacc-security-dev  col-lg-12",
                            "content":[
                                {
                                    "tag":"span",
                                    "id":"security-id",
                                    "class":"col-lg-2",
                                    "content":4
                                },
                                {
                                    "tag":"div",
                                    "id":"",
                                    "class":"group-intro-content col-lg-10",
                                    "content":[
                                        {
                                            "tag":"h2",
                                            "content":"安全组",
                                            "class":""
                                        },
                                        {
                                            "tag":"i",
                                            "content":"",
                                            "class":"fa fa-gears"
                                        },
                                        {
                                            "tag":"p",
                                            "content":"安全组是科协一个特别的组，因为凡是涉及到计算机都与安全密不可分。也正因为如此，对于组员需要有强大的自学能力，以后的学习也都大多是自学。我们祖传宁缺勿滥的原则，只有达到要求被承认的人才能加入。",
                                            "class":""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tags":"li",
                            "style":"",
                            "class":"sacc-algorithm-dev col-lg-12",
                            "content":[
                                {
                                    "tag":"span",
                                    "id":"algorithm-id",
                                    "class":"col-lg-2",
                                    "content":4
                                },
                                {
                                    "tag":"div",
                                    "id":"",
                                    "class":"group-intro-content col-lg-10",
                                    "content":[
                                        {
                                            "tag":"h2",
                                            "content":"算法组",
                                            "class":""
                                        },
                                        {
                                            "tag":"i",
                                            "content":"",
                                            "class":"fa fa-superscript"
                                        },
                                        {
                                            "tag":"p",
                                            "content":"算法是实现一切愿望的工具，无论你想学前后端或是安全，嵌入式或是python，乃至成为（看着别人头秃的）马猴烧酒，算法组都是都是你的不二选择哟～",
                                            "class":""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tags":"li",
                            "style":"",
                            "class":"sacc-python-dev col-lg-12",
                            "content":[
                                {
                                    "tag":"span",
                                    "id":"python-id",
                                    "class":"col-lg-2",
                                    "content":6
                                },
                                {
                                    "tag":"div",
                                    "id":"",
                                    "class":"group-intro-content col-lg-10",
                                    "content":[
                                        {
                                            "tag":"h2",
                                            "content":"python组",
                                            "class":""
                                        },
                                        {
                                            "tag":"i",
                                            "content":"",
                                            "class":"fa fa-book"
                                        },
                                        {
                                            "tag":"p",
                                            "content":"Python是现在非常火爆的一门编程语言，尤其在人工智能方面独霸一方，数据挖掘数据分析上也有不菲的性能，爬虫更是活跃于各大网站。我们python组是以爬虫和数据分析为主，一起学习一起进步的大家庭，希望萌新们多多关注。",
                                            "class":""
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
/********************************************************************************************************************
第四屏的模板
 ********************************************************************************************************************/
let fourth_header_tem = `<header class="${data2[0].class}" style="opacity: 0"><h1>${data2[0].content[0].tagContent}</h1><p>${data2[0].content[1].tagContent}</p></header>`;
let fourth_section_tem =
    `<section class="${data2[1].class}" style="opacity: 0">
        <div class="${data2[1].content[0].class}">
            <p style="${data2[1].content[0].children[0].style}">${data2[1].content[0].children[0].content}</p>
            <p>${data2[1].content[0].children[1].content}</p>
        </div>
        <ul class="${data2[1].content[1].class}">
            <li class="${data2[1].content[1].children[0].class}">
                <span id="${data2[1].content[1].children[0].content[0].id}" class="${data2[1].content[1].children[0].content[0].class}">1</span>
                <div class="${data2[1].content[1].children[0].content[1].class}">
                    <div class="group-intro-content-child" >
                        <i class="${data2[1].content[1].children[0].content[1].content[1].class} mobile-show-icon" style="animation-direction: reverse"></i>
                        <h2>${data2[1].content[1].children[0].content[1].content[0].content}</h2>
                        <i class="${data2[1].content[1].children[0].content[1].content[1].class}"></i>
                    </div>
                    <p>${data2[1].content[1].children[0].content[1].content[2].content}</p>
                </div>
            </li>
            <li class="${data2[1].content[1].children[1].class}">
                <span id="${data2[1].content[1].children[1].content[0].id}" class="${data2[1].content[1].children[1].content[0].class}">2</span>
                <div class="${data2[1].content[1].children[1].content[1].class}">
                    <div class="group-intro-content-child" >
                        <i class="${data2[1].content[1].children[1].content[1].content[1].class} mobile-show-icon" style="animation-direction: reverse"></i>
                        <h2>${data2[1].content[1].children[1].content[1].content[0].content}</h2>
                        <i class="${data2[1].content[1].children[1].content[1].content[1].class}"></i>
                    </div>
                    <p>${data2[1].content[1].children[1].content[1].content[2].content}</p>
                </div>
            </li>
            <li class="${data2[1].content[1].children[2].class}">
                <span id="${data2[1].content[1].children[2].content[0].id}" class="${data2[1].content[1].children[2].content[0].class}">3</span>
                <div class="${data2[1].content[1].children[2].content[1].class}">
                    <div class="group-intro-content-child" >
                        <i class="${data2[1].content[1].children[2].content[1].content[1].class} mobile-show-icon" style="animation-direction: reverse"></i>
                        <h2>${data2[1].content[1].children[2].content[1].content[0].content}</h2>
                        <i class="${data2[1].content[1].children[2].content[1].content[1].class}"></i>
                    </div>
                    <p>${data2[1].content[1].children[2].content[1].content[2].content}</p>
                </div>
            </li>
        </ul>
        <div class="${data2[1].content[2].class}">
            <img src="${data2[1].content[2].children[0].content}">
            <span></span>
        </div>
        <ul class="${data2[1].content[3].class}">
            <li class="${data2[1].content[3].children[0].class}">
                <span id="${data2[1].content[3].children[0].content[0].id}" class="${data2[1].content[3].children[0].content[0].class}">4</span>
                <div class="${data2[1].content[3].children[0].content[1].class}">
                    <div class="group-intro-content-child" >
                        <i class="${data2[1].content[3].children[0].content[1].content[1].class} mobile-show-icon" style="animation-direction: reverse"></i>
                        <h2>${data2[1].content[3].children[0].content[1].content[0].content}</h2>
                        <i class="${data2[1].content[3].children[0].content[1].content[1].class}"></i>
                    </div>
                    <p>${data2[1].content[3].children[0].content[1].content[2].content}</p>
                </div>
            </li>
            <li class="${data2[1].content[3].children[1].class}">
                <span id="${data2[1].content[3].children[1].content[0].id}" class="${data2[1].content[3].children[1].content[0].class}">5</span>
                <div class="${data2[1].content[3].children[1].content[1].class}">
                    <div class="group-intro-content-child" >
                        <i class="${data2[1].content[3].children[1].content[1].content[1].class} mobile-show-icon" style="animation-direction: reverse"></i>
                        <h2>${data2[1].content[3].children[1].content[1].content[0].content}</h2>
                        <i class="${data2[1].content[3].children[1].content[1].content[1].class}"></i>
                    </div>
                    <p>${data2[1].content[3].children[1].content[1].content[2].content}</p>
                </div>
            </li>
            <li class="${data2[1].content[3].children[2].class}">
                <span id="${data2[1].content[3].children[2].content[0].id}" class="${data2[1].content[3].children[2].content[0].class}">6</span>
                <div class="${data2[1].content[3].children[2].content[1].class}">
                    <div class="group-intro-content-child" >
                        <i class="${data2[1].content[3].children[2].content[1].content[1].class} mobile-show-icon" style="animation-direction: reverse"></i>
                        <h2>${data2[1].content[3].children[2].content[1].content[0].content}</h2>
                        <i class="${data2[1].content[3].children[2].content[1].content[1].class}"></i>
                    </div>
                    <p>${data2[1].content[3].children[2].content[1].content[2].content}</p>
                </div>
            </li>
        </ul>
    </section>`;
let fourthSection = $("#sacc-site-main-section-fourth");
let arr1 = [fourth_header_tem,fourth_section_tem];
let appendChildren = function (i) {
    /*添加 第三屏 模板*/
    appendThirdContent();
};
/*****************************************************************************************
*动态添加第四屏的内容
******************************************************************************************/
let appendFourthContent = function () {
    /*主要代码(下)*/
    fourthSection.append(arr1[0]);
    /*主要代码(上)*/
    setTimeout(function () {
        translateY(".tech-teams-header");
    },100);
    fourthSection.append(arr1[1]);
    setTimeout(function () {
        translateY(".tech-teams-section");
    },300);
}
let appendThirdContent = function () {
    let index = 0;
    /********************************************************************************************************************
     第三屏的模板
     *********************************************************************************************************************/
    let content = "";
    let liTemplate = new Array();
    let headerTemplate = `<header class="${data1[0].class}" style="opacity: 0"><h1 class="${data1[0].content[0].tagClass}">${data1[0].content[0].tagContent}</h1><p class="${data1[0].content[1].tagClass}">${data1[0].content[1].tagContent}</p></header>`;
    for (index = 0; index < 3; index ++){
        /*循环将 li 添加到 ul 中*/
        liTemplate[index] = `<li class="col-lg-4"><div class="sacc-logo-part"><p>${data1[1].content[index].id}</p><i class="fa ${data1[1].content[index].logoClass}"></i></div><div class="sacc-department-intro-part"><h2>${data1[1].content[index].title}</h2><p>${data1[1].content[index].description}</p></div></li>`;
        content += liTemplate[index];
    }
    let ulTemplate = `<ul class="${data1[1].class} clearfix" style="opacity: 0;">${content}</ul>`;
    let footTemplate = `<footer class="${data1[2].class}"  style="opacity: 0;"><div class="${data1[2].content[0].tagClass}"><p>${data1[2].content[0].tagChild.value}</p></div><div class="${data1[2].content[1].tagClass}"><p>${data1[2].content[1].tagChild.value}</p></div></footer>`
    let arr = [headerTemplate,ulTemplate,footTemplate];
    let thirdSection = $("#sacc-site-main-section-third");

    thirdSection.append(arr[0]);
    /*三个部分出现的有一个先后顺序，通过定时器的设置来实现*/
    setTimeout(function () {
        translateY(".department-intro-header");
    },100);
    thirdSection.append(arr[1]);
    setTimeout(function () {
        translateY(".department-intro-section");
    },250);
    $(thirdSection).append(arr[2]);
    setTimeout(function () {
        translateY(".department-intro-footer");
    },400);
}
/*********************************************************************************
*添加Y方向上平移
**********************************************************************************/
let translateY = function(e){
    $(e).css({
        "opacity":1,
        "transform":"translateY(0)"
    });
};
/*************************************************************************************************/
/*MAC终端*/
/*************************************************************************************************/
    $(document).ready(function() {
        var title = $("#title");
        var console = $("#console");
        var path = "~";
        var command = "";
        var commands = [{
            "name": "clear",
            "function": clearConsole
        }, {
            "name": "sacc-help",
            "function": help
        },{
            "name":"sheizuimei",
            "function":sheizuimei
        },{
            "name":"sacc-name",
            "function":showname
        },{
            "name":"sacc-about",
            "function":showabout
        },{
            "name":"sacc-video",
            "function":showvideo
        },{
            "name":"sacc-install",
            "function":install
        },{
            "name":"sacc-v",
            "function":showv
        }];
        function showv(){
            console.append("  这已经是SACC度过的第三十一个春夏秋冬了，我们这一路经历过暖春也经历过寒冬，还好\n现在你来了，希望未来的一年中你能在科协这个大家庭中结交志同道合的朋友，从科协牛人中\n获取经验，成为技术上的大牛，或者在科协活动的举办中锻炼自己的活动组织能力。\n");
        }
        function install(){
            let user=prompt("请输入你的名字~");
            console.append(`${user}同学你好：\n  首先祝贺你正式成为计软网安院科协的一员，从加入院科协的那一刻开始，你将经\n历一段从没经历和感受过的奇妙旅程。我们希望未来的一年中你能在科协这个大家庭中\n结交志同道合的朋友，从科协牛人中获取经验，成为技术上的大牛，或者在科协活动的\n举办中锻炼自己的活动组织能力。我们更希望一年后的你能像我们一样在科协为未来的\n学弟学妹提供技术和学习上的帮助。\n 愿初来南邮的你，在未来的一年中能在计软网安院科协这片沃土上，施展自己的才\n华，活出自己的精彩。(๑•̀ㅂ•́)و✧\n`);
        }
        function showvideo(){
            console.append('<video style="width: 100%;height: 80%;" autoplay="autoplay"><source src="./images/sacc.mp4" type="video/mp4">您的浏览器不支持 video 标签。</video>\n');
        }
        function showabout(){
            console.append("计算机学院科协成立于1987年，是计算机学院分团委领导下以科学技术交流为目的的学生组织，其宗旨在于营造科\n技氛围，提高科技素质，造就科技人才。该协会以学院的特色专业为依托，结合学院专业学科及学生的实际情况，\n围绕当今科技领域的热点问题，积极组织在校学生参加科技活动，开展技术交流，培养学生的脑力思维，提高科技认知能力及动手能力。\n");
        }
        function showname(){
            console.append("Our name is Science Association of Computer College\n");
        }
        function sheizuimei(){
            console.append("她是关校花\n她的美惊世骇俗\n她的美惊天动地\n");
        }
        function help() {
            console.append("There is help.\n    sacc-about          关于我们\n    sacc-name           我们是谁！\n    sacc-video          播放宣传视频\n    sacc-install        安装sacc\n    sacc--v             查看sacc版本\n >:D\n");
        }
        function clearConsole() {
            console.text("");
        }
        function processCommand() {
            var isValid = false;
            for (var i = 0; i < commands.length; i++) {
                if (command == commands[i].name) {
                    commands[i].function();
                    isValid = true;
                    break;
                }
            }

            if (!isValid) {
                console.append("sacc: command not found: " + command + "\n");
            }
        }

        function displayPrompt() {
            console.append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
            console.append("<span class='path'>" + path + "</span> ");
        }

        $(document).keydown(function(e) {
            if (e.keyCode === 8 && e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA') {
                e.preventDefault();
                if (command !== "") {
                    command = command.slice(0, -1);
                    console.html(console.html().slice(0, -1));
                }
            }
        });
        $(document).keypress(function(e) {
            e = e || window.event;
            var keyCode = typeof e.which == "number" ? e.which : e.keyCode;
            if (e.which == 13) {
                console.append("\n");
                processCommand();
                displayPrompt();
                command = "";
            } else {
                var keyString = String.fromCharCode(keyCode);
                console.append(keyString);
                command += keyString;
            }
        });
        title.text("sacc. marc@mbp: ~ (zsh)")
        var date = new Date().toString();
        date = date.substr(0, date.indexOf("GMT") - 1);
        console.append("Last login: " + date + " on sacc\n");
        console.append("There is help.\n    sacc-about          关于我们\n    sacc-name           我们是谁！\n    sacc-video          播放宣传视频\n    sacc-install        安装sacc\n    sacc--v             查看sacc版本\n >:D\n");
        displayPrompt();
    });
    document.onkeydown = function(event){ 
        var e = event || window.event; 
        var k = e.keyCode || e.which; 
        switch(k) { 
            case 32:      return false;//空格键
        }
        e.cancel = true;
    };
/*************************************************************************************************/
//跳转
/*************************************************************************************************/
    function jump() {
        let hei=$("#console").outerHeight()*1.25;
        console.log(hei);
        window.scrollTo({ 
            top: hei, 
            behavior: "smooth", 
        });
    }
    /*第五版   主席介绍*/
let fifthSection = function (){
    let chairmenContent = $(".sacc-pc").find(".sacc-chairmen-intro").find(".chairmen-content");
    let translateDis = $(chairmenContent).width();
    let titleList = $(".sacc-pc").find(".sacc-chairmen-intro").find(".chairmen-title").find("h1");
    this.switch = function () {
        /*切换主席团 导航*/
        let chairmenTitle = $(".sacc-pc").find(".sacc-chairmen-intro").find(".chairmen-title");
        let h1Lists = chairmenTitle.find("h1");
        h1Lists.click(function () {
            h1Lists.removeClass("selected");
            $(this).addClass("selected");
        })
    };
    this.moveRight = function (currentIndex) {
        /*切换主席团 点击右侧按钮*/
        chairmenContent.css("transform",`translateX(${-currentIndex * translateDis / 3}px)`);

        return currentIndex;
    }
    this.moveLeft = function (currentIndex) {
        /*切换主席团 点击左侧按钮*/
        chairmenContent.css("transform",`translateX(${-currentIndex * translateDis / 3}px)`);
        return currentIndex;
    };
    this.navSwitch = function (currentIndex) {
        if (currentIndex >=0 && currentIndex <=2){
            /*动态的对应顶部的主席团的 title 进行切换*/
            $.each(titleList,function () {
                titleList.removeClass("selected");
                $(titleList[currentIndex]).addClass("selected");
            })
        }
    };
    this.switchByNav = function (index) {
        currentIndex = index;
        return currentIndex;
    }
};
/*头部导航栏的下拉动画*/
let header_slide_down = function (scrollTime) {
    let header = $(".sacc-header");
    let scrollTop = $(window).scrollTop();
    let leftPart = $(".sacc-leftPart");
    let leftPart_h1 = leftPart.find("h1");
    let sacc = leftPart.find("h1").find("span:nth-of-type(2)");
    let saccNav = $(".sacc-nav");
    let saccNav_link = $(".sacc-nav").find("li").find("a.intro-title");

    if ($(window).width() > 768){
        /*非移动设备*/
        if (scrollTop > 0){
            header.css("transform","translateY(0px)");
            sacc.css("color","#ffffff");
            saccNav_link.css("color","#f7db61");
            leftPart_h1.css("line-height","70px");
            saccNav.css("line-height","70px");
        } else if ( scrollTop === 0 ) {
            header.css("transform","translateY(-65px)");
            sacc.css("color","#000000");
            saccNav_link.css("color","#000000");
            leftPart_h1.css("line-height","95px");
            saccNav.css("line-height","100px");
        }
        saccNav_link.mouseover(function () {
            console.log("变成黄色");
            $(this).removeAttr("style");
            $(this).css("color","#f7db61")
        })
        if (saccNav.css("line-height") === "70px"){
            saccNav_link.mouseout(function () {
                $(this).removeAttr("style");
                $(this).css("color","#f7db61")
            })
        } else if (saccNav.css("line-height") === "100px") {
            saccNav_link.mouseout(function () {
                $(this).removeAttr("style");
                $(this).css("color","#ffffff")
            })
        }
    }

};
/*切换技术部分组介绍*/
let switchGroups = function () {
    let groupList = $(".groups-intro");
    let pageList = $(".pages").find("p");
    pageList.click(function () {
        let index = $(this).index();
        $(pageList).removeAttr("style");
        $(pageList[index]).css({
            "backgroundColor": "#f7db61",
            "border": "1px solid #f7db61",
            "cursor": "pointer"
        });
        $(groupList).addClass("hidden");
        $($(groupList[index])).removeClass("hidden");
    })
}
/*主席团高度设置*/
let setHeight = function () {
    /*15.6英寸电脑屏幕对应分辨率*/
    if ($(window).width() >= 1450 && $(window).width() < 1850 ){
        let chairmenWidth = $(".sacc-pc").find(".sacc-chairmen-intro").find(".chairmen-content").find("ul").find("li").width();
        $(".sacc-pc").find(".sacc-chairmen-intro").find(".chairmen-content").find("ul").find("li").height(chairmenWidth * 1.15);
    } else if($(window).width() >= 1900){
        /*2k显示屏对应的分辨率*/
        let chairmenWidth = $(".sacc-pc").find(".sacc-chairmen-intro").find(".chairmen-content").find("ul").find("li").width();
        $(".sacc-pc").find(".sacc-chairmen-intro").find(".chairmen-content").find("ul").find("li").height(chairmenWidth * 1.25);
    }
};
/***************************************************************************************
*移动端的主席团的 li 高度设置
****************************************************************************************/
let setMobileHeight = function () {
    let chairmenWidth = $(".sacc-mobile").find(".sacc-chairmen-intro").find(".chairmen-content").find("ul").find("li").width();
    $(".sacc-mobile").find(".sacc-chairmen-intro").find(".chairmen-content").find("ul").find("li").height(chairmenWidth * 1);
};