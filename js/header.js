$(function () {
    clicknav();
    showsubnav();
    showside();
    close();
    gosub();
    goback();
 
})


//划过nav显示subnav
function showsubnav() {
    var lis = $(".uls").find(".has");
    lis.mouseenter(function () {
        $(this).find(".subnav")[0].style.display = "block";
    })
    $(".logo-right").mouseleave(function () {
        $(this).find(".subnav").css({
            "display":"none"
        }) 
    })
}
function showside() {
    var menu = document.getElementsByClassName("menu");
    var showside = document.getElementById("showside");
    var submenus = document.getElementsByClassName("submenus");
    var sideline = document.getElementsByClassName("sideline");
    // var timer=null;
    // var step=-440;
    //  menu[0].onclick = function () {
    //    timer=setInterval(function(){
    //        step+=6; 
    //        if (step==0){
    //            clearInterval(timer);
    //        } 
    //        sideline[0].style.left=step+"px";
    //     //    console.log(step)
    //    },16);

    // }
    // document.onclick=function(){
    //      sideline[0].style.left = "-440px";
    // }
    $(".menu").click(function () {
        // submenus[0].style.zIndex = "3";
        $(".sideline").animate({
            left: "0"
        }, 1000);
    })
}

function close() {
    var sideline = document.getElementsByClassName("sideline");
    var changenav = document.getElementsByClassName("changenav");
    var close = document.getElementsByClassName("close")[0];
    // close.onclick=function(){
    //        sideline[0].style.left="-440px";
    // }
    $(".close").click(function () {
        $(".sideline").animate({
            left: "-440px"
        }, 1000);
    })
}

function gosub() {
    var gosub = document.getElementsByClassName("gosub");
    var submenus = document.getElementsByClassName("submenus");

    var listsubs = document.getElementsByClassName("listsubs");
    for (let i = 0; i < gosub.length; i++) {
        gosub[i].onclick = function () {
            console.log(this);
            submenus[0].style.display = "none";
            for (var j = 0; j < listsubs.length; j++) {
                listsubs[j].style.display = "none";
                listsubs[i].style.display = "block";
            }
        }
    }
}

function goback() {
    var goback = document.getElementsByClassName("goback");
    var submenus = document.getElementsByClassName("submenus");

    for (let i = 0; i < goback.length; i++) {
        goback[i].onclick = function () {
            console.log(this);
            submenus[0].style.display = "block";
            submenus[0].style.zIndex = 999;

        }
    }

    // $(".goback").click(function(){
    //     console.log($(this))
    // })
}
function clicknav(){
    var lis=$(".nav .uls").children("li")
  
    for(let i=0;i<lis.length;i++){
        // console.log(lis[i])
        lis[0].onclick=function(){ 
            console.log(this)
            // var index=i;
            for (let j = 0; j < lis.length; j++){
                lis[j].style.color="#333333";
                lis[j].style.fontWeight =100;
                lis[i].style.color = "#84a76c";
                lis[i].style.fontWeight = 700;
            }
        }
    }
    
}