
//项目中有哪些类：轮播图
function Slider(
				boxDomObj,width,height,imgs,
				doudouSize,doudouColor,doudouHighColor,
				isCircle,direction,timeSpace){
	this.boxDomObj = boxDomObj;//轮播图的容器
	this.imgDoms = [];//存储所有的img标签,DOM对象
	this.liDoms = [];//存储所有的li标签,DOM对象
	this.width = width;
	this.height = height;
	this.imgs = imgs;//图片数组
	this.doudouSize = doudouSize;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor;//高亮颜色
	this.isCircle = isCircle;
	
	this.direction = direction;//左还是右
	this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	
	
	this.createUI();
	this.addEvent();
	this.changeImg();
}

Slider.prototype.createUI= function(){
	this.boxDomObj.style.position = "relative";
	this.boxDomObj.style.overflow = "hidden";	
	//1、创建所有的图片
	for(let i=0;i<this.imgs.length;i++){
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;";
		imgDom.style.width = this.width+"px";
		imgDom.style.height = this.height+"px";
		if(i==0){
			imgDom.style.left = "0px";		
		}else{
			imgDom.style.left = this.width+"px";
		}
		this.boxDomObj.appendChild(imgDom);
		this.imgDoms.push(imgDom);//把创建的图片标签放入数组中
	}
	//2、创建所有的豆豆
	//1)、豆豆的容器
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;right:50px;bottom:10px;list-style:none;z-index:2;";
	this.boxDomObj.appendChild(ulDom);
	//2)、豆豆
	for(let i=0;i<this.imgs.length;i++){
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-left:20px;";
		liDom.style.width = this.doudouSize+"px";
		liDom.style.height = this.doudouSize+"px";
		if(i==0){
			liDom.style.backgroundColor = this.doudouHighColor;
		}else{
			liDom.style.backgroundColor = this.doudouColor;
		}
		if(this.isCircle){
			liDom.style.borderRadius = "50%";
		}
		ulDom.appendChild(liDom);
		this.liDoms.push(liDom);
	}
}

Slider.prototype.showImg = function(inOrd,outOrd){
	
	if(inOrd==outOrd){
		return;
	}
	
	//1)、滑入滑出前的准备工作
	this.imgDoms[inOrd].style.left = this.width+"px";
	
	//2）、滑入滑出效果
	moveObj05(this.imgDoms[inOrd],"left",0,300);
	moveObj05(this.imgDoms[outOrd],"left",-1*this.width,300);
}


Slider.prototype.showLi=function(){
	//    B、改豆豆		
	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].style.backgroundColor = this.doudouColor;
	}
	this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
}

//1、自动播放图片
Slider.prototype.changeImg=function(){
	
	this.myTimer = setInterval(()=>{
		//1）、数据：改变图片的当前序号（加加），并考虑边界
		//currOrd = ++currOrd>4?0:currOrd;
		let outOrd = this.currOrd;
		this.currOrd++;
		if(this.currOrd>this.imgs.length-1){
			this.currOrd=0;
		}
		
		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd,outOrd);
		//B、改豆豆
		this.showLi();

	},this.timeSpace);
}

//2、停止播放
Slider.prototype.stopChange=function(){
	//停止定时器
	window.clearInterval(this.myTimer);
}

//4、跳转到指定的图片
Slider.prototype.goImg=function(transOrd){//1
	//1）、数据：把transOrd赋给当前图片序号
	let outOrd = this.currOrd;
	this.currOrd = transOrd;
	
	//2）、外观：
	//A、改图片
	this.showImg(this.currOrd,outOrd);
	//B、改豆豆
	this.showLi();
}

Slider.prototype.addEvent = function(){	
	let obj = this;//this是Slider的对象
	this.boxDomObj.onmouseover = function(){
		obj.stopChange();
	}
	this.boxDomObj.onmouseout = function(){
		obj.changeImg();
	}
	
	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].onclick = ()=>{
			this.goImg(i);
		}
	}
}
 let s1 = new Slider($("#sliderBox"), 724, 369, ["../img/banner1.jpg", "../img/banner2.jpg", "../img/banner3.jpg", "../img/banner4.jpg", "../img/banner5.jpg", "../img/banner6.jpg", "../img/banner7.jpg", "../img/banner8.jpg" ],
        10, "#ccc", "red",
        true, -1, 1500);
    