$(function () {
    if ($(window).width() < 768){
        mobileShowRightHeader();
        setWidth();
        mobilemove()
        moveOnMobile();
    }
})

/************************************************************************************
函数：显示移动端的右侧 header 部分
 function mobileShowRightHeader()
**********************************************************************************/
let clickTime = 0;
let mobileShowRightHeader = function () {
    let right_mobile_toggle = $(".right-mobile-part");
    let spanList = right_mobile_toggle.find("span");
    let right_mobile_content = $(".right-mobile-content");
    let title = $(".header-content").find(".sacc-leftPart").find("h1");
    right_mobile_toggle.click(function () {
        clickTime++;
        /* toggle 的变化*/
        if (clickTime % 2){
            /*显示*/
            $.each(spanList,function (index) {
                if ( index % 2 === 0){
                    $(spanList[index]).css("opacity",0);
                }
            })
            $(spanList[1]).addClass("spanRotate1");
            $(spanList[3]).addClass("spanRotate2");
            right_mobile_content.css("transform","translateY(0)");
            title.removeClass("titleHidden");
            title.addClass("titleShow");
        } else{
            /*隐藏*/
            $.each(spanList,function (index) {
                if ( index % 2 === 0){
                    $(spanList[index]).css("opacity",1);
                }
            });
            $(spanList[1]).removeClass("spanRotate1");
            $(spanList[3]).removeClass("spanRotate2");
            right_mobile_content.css("transform","translateY(-100%)");
            title.removeClass("titleShow");
            title.addClass("titleHidden");
        }
    })
}
/*设置宽度*/
var setWidth = function () {
    let spanLists = $(".sacc-site-title").find("span");
    let pLists = $(".sacc-site-title").find("p");
    $.each(pLists,function (index) {
        $(spanLists[index]).css("width",`${$(pLists[index]).width() + 10}px`);
    })
}
//点击跳转事件
let mobilemove = function(){
    $("#sacc-jump-moble-dt").click(function(){
        window.scrollTo({
            top:$("#sacc-site-main-section-third").offset().top,
            behavior:"smooth"
        });
        hidden();
    });
    $("#sacc-jump-moble-team").click(function(){
        window.scrollTo({
            top:$("#sacc-site-main-section-fifth").offset().top,
            behavior:"smooth"
        });
        hidden();
    });
    $("#sacc-jump-moble-home").click(function(){
        window.scrollTo({
            top:$("#sacc-site-main-section-first").offset().top,
            behavior:"smooth"
        });
        hidden();
    });
    let hidden=function(){
        let right_mobile_toggle = $(".right-mobile-part");
        let spanList = right_mobile_toggle.find("span");
        let right_mobile_content = $(".right-mobile-content");
        let title = $(".header-content").find(".sacc-leftPart").find("h1");
            $.each(spanList,function (index) {
            if ( index % 2 === 0){
                $(spanList[index]).css("opacity",1);
            }
        });
        $(spanList[1]).removeClass("spanRotate1");
        $(spanList[3]).removeClass("spanRotate2");
        right_mobile_content.css("transform","translateY(-100%)");
        title.removeClass("titleShow");
        title.addClass("titleHidden");
        clickTime++;
    }
}
/*移动端水平滑动事件*/
let moveBox = $(".mobile-chairmen-content").find("ul");
let moveOnMobile = function () {
    let currentIndex = 0;
    let startX = 0;
    let distanceX = 0;
    let isMove = false;

    let liListWidth = moveBox.find("li").width();
    $.each(moveBox,function (i) {
        $(moveBox[i]).on("touchstart",function (e) {
            startX = e.touches[0].clientX;
        })
        $(moveBox[i]).on("touchmove",function (e) {
            let moveX = e.touches[0].clientX;
            distanceX += (moveX - startX)*0.15;
            $(moveBox[i]).css("transform",`translateX(${distanceX}px)`);
            if (Math.abs(distanceX ) >= $(moveBox[i]).width() - liListWidth){
                distanceX = -($(moveBox[i]).width() - liListWidth);
                addTranition();
            }else if (distanceX > 0){
                distanceX = 0;
                addTranition();
            }
            isMove = true;
        })
        $(moveBox[i]).on("touchend",function (e) {
            $(moveBox[i]).css("transform",`translateX(${distanceX / 1.032}px)`);
            removeTranition();
        })
    })
}
let addTranition = function () {
    moveBox.css("transition","all .5s ease-in-out");
}
let removeTranition = function () {
    moveBox.css("transition","");
}
