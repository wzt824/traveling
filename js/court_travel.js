$(function(){
    //点击tabs
    var tabs=document.getElementsByClassName("tabs")[0].children;
    var tabs_f = document.getElementsByClassName("tabs_f");
    for(let i=0;i<tabs.length;i++){
        tabs[i].onclick=function(){
            var index=i;
            // console.log(index)
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].className = ""; 
                tabs[index].className = "mainline";
            }
             for (let k = 0; k < tabs_f.length;k++){
                tabs_f[k].style.display="none";
                tabs_f[index].style.display="block";
             }
        }
    }
    //点击分类
    var ulls = document.getElementsByClassName("categorycon")[0].children;
    var category = document.getElementsByClassName("category")[0].children;
    for (let i = 0; i < category.length;i++){
      
        category[i].onclick=function(){
            var index=i;
            for (let k = 0; k < category.length;k++){
                category[k].style.color = "#666666";
                 category[index].style.color = "#81a849";
            }
           
            for(let j=0;j<ulls.length;j++){
                ulls[0].style.display = "none";
                ulls[j].style.display="none";
                ulls[index].style.display="block";
            }
        }
    }

    //点击页码
    var descpage = document.getElementsByClassName("descpage")[0].children;
    for (let i = 0; i < descpage.length;i++){ 
        
        descpage[i].onclick=function(){
            var index=i;
            for (let j = 0; j < descpage.length; j++) { 
                descpage[j].className = "";
                descpage[index].className ="changecolor";
            }
            
        }
    }

})