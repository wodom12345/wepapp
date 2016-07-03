	var count=0,
			gif=document.querySelector("#gif"),
			aud=document.querySelector("#audio");
		gif.onclick=function(){
			count++;
			if(count%2==0){
				this.src="src/img/play.png";
				aud.play();
			}
			else{
				this.src="src/img/pause.png";
				aud.pause()
			}
			
		}
		

	
		window.onload=function(){
			var mySwiper=new Swiper('.swiper-container',{
				direction: 'vertical',
				 pagination: '.swiper-pagination',
				onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			  }, 
			  onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			  },
			  watchSlidesProgress: true
				
				
			}
			
		)}	



		