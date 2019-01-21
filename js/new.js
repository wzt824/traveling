$(function () {
    tabschange();
    pages();
})

function tabschange() {
    var newskind = document.getElementsByClassName("newskind")
    var tabs = document.getElementsByClassName("tabs")[0].children;
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function () {
            var index = i;
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].className = "";
                tabs[index].className = "mainline";
            }
            for (let k = 0; k < newskind.length;k++){
                newskind[k].style.display="none";
                newskind[index].style.display = "block";

            }

        }

    }
}
function pages(){
     var descpage = document.getElementsByClassName("descpage")[0].children;
     for (let i = 0; i < descpage.length; i++) {

         descpage[i].onclick = function () {
             var index = i;
             for (let j = 0; j < descpage.length; j++) {
                 descpage[j].className = "";
                 descpage[index].className = "changecolor";
             }

         }
     }

}