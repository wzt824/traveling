//项目中有哪些类：轮播图
function Slider2(
	boxDomObj, width, height, imgs,
	doudouSize, doudouColor, doudouHighColor,
	isCircle, direction, timeSpace) {
	this.boxDomObj = boxDomObj; //轮播图的容器
	this.imgDoms = []; //存储所有的img标签,DOM对象
	this.liDoms = []; //存储所有的li标签,DOM对象
	this.width = width;
	this.height = height;
	this.imgs = imgs; //图片数组
	this.doudouSize = doudouSize;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor; //高亮颜色
	this.isCircle = isCircle;
	this.direction = direction; //左还是右
	this.timeSpace = timeSpace; //每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	this.bgColor = ["#cb67ad", "#ff5e7d", "#d56fb9", "#8961ff", "#7033fb", "#864bfd", "#ff80b3"];
	// this.containsDom=containsDom;
	//箭头
	this.num = 0;
	this.createUI();
	this.addEvent();
	this.changeImg();
}

Slider2.prototype.createUI = function () {
	this.boxDomObj.style.position = "relative";
	this.boxDomObj.style.overflow = "hidden";
	//1、创建所有的图片
	for (let i = 0; i < this.imgs.length; i++) {
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;";
		imgDom.style.width = this.width + "%";
		imgDom.style.height = this.height + "%";
		if (i == 0) {
			imgDom.style.left = "0px";
		} else {
			imgDom.style.left = this.width + "%";
		}
		this.boxDomObj.appendChild(imgDom);
		this.imgDoms.push(imgDom); //把创建的图片标签放入数组中
	}
	//2、创建所有的豆豆
	//1)、豆豆的容器
	/*
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;right:50px;bottom:10px;list-style:none;z-index:2;";
	this.boxDomObj.appendChild(ulDom);
	//2)、豆豆
	for (let i = 0; i < this.imgs.length; i++) {
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-left:20px;";
		liDom.style.width = this.doudouSize + "px";
		liDom.style.height = this.doudouSize + "px";
		if (i == 0) {
			liDom.style.backgroundColor = this.doudouHighColor;
		} else {
			liDom.style.backgroundColor = this.doudouColor;
		}
		if (this.isCircle) {
			liDom.style.borderRadius = "50%";
		}
		ulDom.appendChild(liDom)z;
		this.liDoms.push(liDom);
	}
*/
	//2、创建所有的箭头
	//1)左箭头容器

	// let iDom = document.createElement("i");
	// iDom.style.cssText = "position:absolute;top:45%;left:0;z-index:99;display:block;width:40px;height:84px;background: url(img/slideV2.png) 0px -143px;";
	// this.boxDomObj.appendChild(iDom);
	// iDom.id="leftBtn";
	// this.boxDomObj.appendChild(iDom);
	// //右箭头
	// let RiDom = document.createElement("i");
	// RiDom.style.cssText = "position:absolute;top:45%;right:0;z-index:99;display:block;width:40px;height:84px;background: url(img/slideV2.png) -53px -49px;";
	// this.boxDomObj.appendChild(RiDom);
	// RiDom.id="rightBtn";
	// this.boxDomObj.appendChild(RiDom);
	var rightBtn = document.getElementById('rightBtn');
	var leftBtn = document.getElementById('leftBtn');
	rightBtn.onclick = () => {
		this.num++;
		if (this.num < this.imgs.length) {
			this.goImg(this.num);
		} else if (this.num == this.imgs.length) {
			this.goImg(0);
			this.num = 0;
		} else {
			goImg(this.imgs.length - 1);
		}
	}
	leftBtn.onclick = () => {
		this.num--;
		if (this.num > -1) {
			this.goImg(this.num);
		} else if (this.num == -1) {
			this.goImg(this.imgs.length - 1);
		}
	}
	Slider2.prototype.showImg = function (inOrd, outOrd) {
		if (inOrd == outOrd) {
			return;
		}

		//1)、滑入滑出前的准备工作
		this.imgDoms[inOrd].style.left = 930 + "px";

		//2）、滑入滑出效果
		moveObj05(this.imgDoms[inOrd], "left", 0, 300);
		moveObj05(this.imgDoms[outOrd], "left", -1 * 930, 300);

		function moveObj05(domObj, attr, endValue, timeLong) {

			let currValue = parseFloat(getStyle(domObj, attr)); //parseFloat(domObj.style[attr]);
			let direction = endValue > currValue ? 1 : -1;
			let timeSpace = 16;
			let step = Math.abs(endValue - currValue) / timeLong * timeSpace; //  路程/时间表示的是一毫秒走多少像素*16；

			let myTimer = setInterval(function () {
				//1、改变数据
				currValue = currValue + direction * step;
				//2、处理边界
				if (Math.abs(currValue - endValue) <= step) {
					currValue = endValue;
					clearInterval(myTimer);
				}
				//3、改变外观
				let temp = currValue;
				if (attr != "opacity") {
					temp = temp + "px";
				}
				domObj.style[attr] = temp;
			}, timeSpace);
		}
	}


	Slider2.prototype.showLi = function () {
		//    B、改豆豆		
		// for (let i = 0; i < this.liDoms.length; i++) {
		// 	this.liDoms[i].style.backgroundColor = this.doudouColor;
		// }
		// this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
		// if (this.containsDom) {
		// 	this.containsDom.style.backgroundColor = this.bgColor[this.currOrd];
		// }
	}

	//1、自动播放图片
	Slider2.prototype.changeImg = function () {

		this.myTimer = setInterval(() => {
			//1）、数据：改变图片的当前序号（加加），并考虑边界
			//currOrd = ++currOrd>4?0:currOrd;
			let outOrd = this.currOrd;
			this.currOrd++;
			if (this.currOrd > this.imgs.length - 1) {
				this.currOrd = 0;
			}

			//2）、外观：
			//A、改图片
			this.showImg(this.currOrd, outOrd);
			//B、改豆豆
			// this.showLi();

		}, this.timeSpace);
	}

	//2、停止播放
	Slider2.prototype.stopChange = function () {
		//停止定时器
		window.clearInterval(this.myTimer);
	}

	//4、跳转到指定的图片
	Slider2.prototype.goImg = function (transOrd) { //1
		//1）、数据：把transOrd赋给当前图片序号
		let outOrd = this.currOrd;
		this.currOrd = transOrd;
		this.num = this.currOrd;

		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd, outOrd);
		//B、改豆豆
		// this.showLi();
	}

	Slider2.prototype.addEvent = function () {
		let obj = this; //this是Slider2的对象
		this.boxDomObj.onmouseover = function () {
			obj.stopChange();
		}
		this.boxDomObj.onmouseout = function () {
			obj.changeImg();
		}

		// for (let i = 0; i < this.liDoms.length; i++) {
		// 	this.liDoms[i].onclick = () => {
		// 		this.goImg(i);
		// 		this.goImg(this.num);
		// 	}
		// }

	}
}