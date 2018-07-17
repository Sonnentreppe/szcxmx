// JavaScript Document

// 专题页功能模块切换
$(".function-use-list>li").hover(function(){
	$(".function-use-list>li").removeClass("active")
	$(this).addClass("active")
	var num=$(this).index();
	$(".function-use-txt li").eq(num).addClass("active").siblings(".function-use-txt li").removeClass("active");
		
})
// 专题页功能模块切换end
// 专题页多终端支持
$(".special-support li").find("a").mouseover(function(){
    $(this).parents("li").addClass("active")
    $(this). mouseout(function(){
        $(this).parents("li").removeClass("active")
    })
});
// 专题页多终端支持end
// 地方站地图
$(".place-map-eps>li").hover(function(){
	$(".place-map-eps>li").removeClass("active")
	$(this).addClass("active")
	// var num=$(this).index();
	// $(".place-map-txt>li").eq(num).addClass("active").siblings(".place-map-txt li").removeClass("active");
		
})
// 地方站地图end
// 导航条动画

	// 鼠标划上导航条变黑色
	$(".nav-test").hide()
	$(".nav li").removeClass("active");
	$(".confont-top,.confont-nav").hover(function(){
		$(".nav-test").slideDown(90).show(function(){
			$(".down").hover(function(){
				$(".nav li").removeClass("active");
				$(this).addClass("active");
			})
		});
		$(this).parents().hover(function(){},
			function(){
				$(".nav-test").slideUp(100).hide();
				$(".nav li").removeClass("active");
			})
	})	
	// 导航条在内页黑色的选中状态
	$(".nav-test-befor").show(function(){
		$(".down").hover(function(){
	 		$(".nav li").removeClass("active");
	 		$(this).addClass("active");
	 	})
	})
	// $(".nav li").removeClass("active");
	// var dows=$(".nav-test").show()
	// if (dows=true){
	// 	$(".down").hover(function(){
	// 		$(".nav li").removeClass("active");
	// 		$(this).addClass("active");
	// 	})
	// }
 // 刷新闪现问题
 $(".nav-down").show()
	
// 获取高度
$(".nav-down-dist").each(function(){
	$(this).height($(this).find(".nav-down-distMeau").height())
})

// 每一部分的第一个显示
$(".nav-down>ul,.nav-down-distMeau,.nav-down-distMeau-list").hide()
$(".nav-down-dist>li").parents(".nav-down-dist").each(function(){
	$(this).find(".nav-down-distMeau").first().show();
})
$(".nav-down-distMeau>li div").parents(".nav-down-distMeau").each(function(){
		$(this).find(".nav-down-distMeau-list").first().show();
})
// 只有一级下拉菜单特效

$(".down").hover(function(){
	var num=$(this).index();
	$(".nav-down>ul").eq(num).show().siblings().hide();
	$(".nav-down>ul>li div").hover(function(){
		$(".nav-down>ul>li div").find("a").removeClass("active");
		$(this).find("a").addClass("active")
	})
})

// 有两级的下拉菜单特效
// 两级菜单之左边的部分
$(".nav-down-dist>li").hover(function(){
	var num=$(this).index();
	$(this).parent().find(".nav-down-distMeau").eq(num).each(function(){
			$(this).show().siblings(".nav-down-distMeau").hide();
	})
	$(".nav-down-dist>li").find("a").removeClass("active");
	$(this).find("a").addClass("active")		
})
// 两级菜单之右边的部分
$(".nav-down-distMeau>li div").hover(function(){
	var num=$(this).index();
	$(this).parents(".nav-down-distMeau").find(".nav-down-distMeau-list").eq(num).show().siblings(".nav-down-distMeau-list").hide();
	$(".nav-down-distMeau>li div").find("a").removeClass("active");
	$(this).find("a").addClass("active")
})
// 结束动画全部隐藏
$(".nav-down>ul").parents().hover(function(){
},function(){
	$(".nav-down>ul").hide()
})

// 底部更多链接
function bottomMoreLink(){
	var height=$(".bottom-top").height()
	if(height=="25"){
		$(".bottom-top").animate({height:"60px"},200);
	}else if(height>"25"){
		$(".bottom-top").animate({height:"25px"},200);
	}	
}
// 底部二维码切换动画

$("#bottomList dd div").first().removeClass("di-n")
$("#bottomList dd a").hover(function(){
	$("#bottomList dd div").addClass("di-n")
	$(this).next().removeClass("di-n")
})

/*banner轮播*/
/*海报区域*/

$(".confont-ban .ban-img li,.confont-ban2 .ban-img li").first().show()
$(".confont-ban .num li,.confont-ban2 .num li").first().addClass("on");
$(".confont-ban .num li,.confont-ban2 .num li").hover(function(){
	var index=$(this).index();
	i=index;
	$(this).addClass("on").siblings().removeClass("on");
	$(".confont-ban .ban-img li,.confont-ban2 .ban-img li").eq(index).fadeIn().siblings().fadeOut();
})
var i=0;
var size=$(".confont-ban .ban-img li,.confont-ban2 .ban-img li").size();
var t=setInterval(moveR,5000);
$(".confont-ban .btn-l,.confont-ban2 .btn-l").click(function(){
	moveL()
})
$(".confont-ban .btn-r,.confont-ban2 .btn-r").click(function(){
	moveR();
})
$(".confont-ban,.confont-ban2").hover(function(){
	clearInterval(t)	
},function(){
	t=setInterval(moveR,5000);
})
function moveL(){
	i--;
	if(i==-1){
		i=size-1;	
	}
	$(".confont-ban .num li,.confont-ban2 .num li").eq(i).addClass("on").siblings().removeClass("on");
	$(".confont-ban .ban-img li,.confont-ban2 .ban-img li").eq(i).fadeIn().siblings().fadeOut();
}
function moveR(){
	i++;
	if(i==size){
		i=0;	
	}
	$(".confont-ban .num li,.confont-ban2 .num li").eq(i).addClass("on").siblings().removeClass("on");
	$(".confont-ban .ban-img li,.confont-ban2 .ban-img li").eq(i).fadeIn().siblings().fadeOut();
}
// banner结束

// 左边的导航效果
$(".confont-left .icon-no").hide()
$(".confont-left ul ").hide();
$(".confont-left dd.active").next("ul").show();
$(".confont-left dd.active").find("i").hide().siblings(".icon-no").show();

$(".confont-left dd").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(this).next(".confont-left ul ").slideToggle();
	// 小箭头

		var num=$(this).index();
		$(".confont-left dd i").eq(num).show().siblings("i").hide();
});
// 左边导航结束

/*首页定制开发模块*/	
$(".confont-software li").hover(function(){
	// 上边的那个大圆

	$(this).find(".cricle-after").removeClass("di-n");
	$(this).parents().hover(function(){},
		function(){
			$(".cricle-after").addClass("di-n");
		})
	// 下面的三个小圆

	$(this).find(".min-cricle-before").stop().animate({"top":100},400).hide();
	$(this).find(".min-cricle-after").stop().animate({"top":-10},400)
	$(this).parents().hover(function(){},
		function(){	
			$(this).find(".min-cricle-after").stop().animate({"top":100},400)
			$(this).find(".min-cricle-before").show().stop().animate({"top":0},400);
		})
})
// 首页定制开发模块end

/*首页标准产品模块*/	
$(".confont-product li").hover(function(){
	
	$(this).stop().animate({"margin-top":-5},200);
	$(this).parent().hover(function(){}
		,function(){	
			$(this).find("li").stop().animate({"margin-top":0},100)
		})
})
// 首页标准产品模块end


// 首页案例模块
$(".confont-case-right li").first().show();
$(".sp-confont-case-ba li").hide().first().show()
$(".confont-case-left li").click(function(){
	$(".confont-case-left li").removeClass("active")
	$(this).addClass("active")
	var num=$(this).index()
	$(".confont-case-right li").eq(num).show().siblings().hide()
	var index=$(this).index();
	i=index;
	$(".sp-confont-case-ba li").eq(index).fadeIn().siblings().fadeOut();
})
// 首页案例模块end
// 首页新闻模块
$(".confont-news-list ul").hide().first().show()
$(".index-news-tittle li").click(function(){
	$(".index-news-tittle li").removeClass("active")
	$(this).addClass("active")
	var num=$(this).index()
	$(".confont-news-list ul").eq(num).show().siblings().hide()
})
// 首页新闻模块end
/*首页产品优势列表动画，案例轮播动画*/
$(".after").hide();
    $(".before").hover(function(){
		$(this).parent().find(".after").show().stop().animate({"top": 0}, 40)
		$(this).parent().hover(function(){}, 
		function(){	
			$(this).parent().find(".after").hide() .stop().animate({"top": 100}, 70)
		});
	})
/*首页产品优势列表动画，案例轮播动画end*/
// 定制开发栏目开发流程
$(".icon-bef").show().siblings(".icon-aft").hide()
$(".survey-nav li.active").find(".icon-aft").show().siblings(".icon-bef").hide()
$(".survey-nav-tab>ul>li").hide().first().show()
$(".survey-nav li").hover(function(){
	$(".survey-nav li").removeClass("active")
	$(this).addClass("active")
	$(".icon-bef").show().siblings(".icon-aft").hide()
	$(this).find(".icon-aft").show().siblings(".icon-bef").hide()

	var n=$(this).index()
	$(".survey-nav-tab>ul>li").eq(n).fadeIn().siblings().fadeOut()

})
// 定制开发栏目开发流程end

// 代理商加盟
$(function(){
   	$(".join-us span").click(function(){
		$(".join-us-bg").fadeIn();
	})
	$(".join-us-box .close,.join-us-bg").click(function(){
		$(".join-us-bg").fadeOut();	
	
	})
})
$(function(){
	$(".join-us span").click(function(){
		$(".join-us-box").show(200);	
	})
	
	$(".join-us-box .close,.join-us-bg").click(function(){
		$(".join-us-box").hide(200);	
	})
	
})
// 代理商加盟end
// 首页新闻模块轮播
// jQuery(".confont-news-list").slide({mainCell:"ul",autoPlay:true,effect:"topLoop",vis:4,interTime:90000,scroll:"1",trigger:"click"});
// banner下面最新动态轮播
jQuery(".banner-footer-news-list .bd li").each(function(i){ jQuery(".banner-footer-news-list .bd li").slice(i*2,i*2+1).wrapAll("<ul></ul>");});

jQuery(".banner-footer-news-list").slide({mainCell:".bd .picList",autoPage:true,effect:"topLoop",autoPlay:true});
/*行业版本轮播*/
jQuery(".confont-indus .confont-con").slide({ mainCell:"ul",vis:4,prevCell:".button-right",nextCell:".button-left",effect:"leftLoop"});
/*成功案例轮播*/
jQuery(".confont-case .confont-con").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:1,trigger:"click"});
// 客户案例推荐轮播效果
jQuery(".list-bottom-case>div").slide({mainCell:" ul ",autoPlay:true,autoPage:true,effect:"leftLoop",vis:6,trigger:"click"});
// 合作加盟页面最新加盟
jQuery(".join-new>div").slide({mainCell:" ul ",autoPlay:true,autoPage:true,effect:"leftLoop",vis:4,trigger:"click"})
;
jQuery(".join-new2>div").slide({mainCell:" ul ",autoPlay:true,autoPage:true,effect:"leftLoop",vis:5,trigger:"click"})
;
// 客户案例选中动画
$(".list-bottom-case-show").hide()
$(".list-bottom-case li a").hover(function(){
	$(".list-bottom-case-show").hide();
	$(this).find(".list-bottom-case-showBefor").next(".list-bottom-case-show").stop().animate({"top": 0}, 100).show();
	$(this).parent().hover(function(){}, 
		function(){
			$(this).find(".list-bottom-case-showBefor").next(".list-bottom-case-show").stop().animate({"top": 140}, 100).hide();
		});
})
// 客户案例选中动画end


 // 多说公共JS代码 start (一个网页只需插入一次) 

	var duoshuoQuery = {short_name:"simpro"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
// 多说公共JS代码 end 

// 定制开发流程tab切换单页面
$(window).scroll(function(){

		var top=$(this).scrollTop()
		if(top>=450){
			$(".software-survey-nav2").addClass("active")	
		}else{
			$(".software-survey-nav2").removeClass("active")	
		}
				
	})	
// 定制开发流程tab切换单页面end

// 开发流程步骤tab标签
$(".software-left").hide();

$(window).scroll(function(){
	if($(window).scrollTop()<=200){
		$(".software-left").hide();
	}
	if($(window).scrollTop()>200){
		$(".software-left").show();
	}
})

// 案例详情页使用效果轮播切换
jQuery(".cast-list-infoPicFocus").slide({ mainCell:".top ul",effect:"left",autoPlay:true });

// 右侧客服定制开发页面监听页面小于500不显示

$(".go-top,.software-tab").hide();

$(window).scroll(function(){
	if($(window).scrollTop()<=150){
		$(".go-top,.software-tab").hide();
	}
	if($(window).scrollTop()>150){
		$(".go-top,.software-tab").show();
	}
})
function boxOs(){
	$(".box-os").stop().animate({"right": 0}, 70);
}
function closeOS(){
	$(".box-os").stop().animate({"right": -200}, 70);
}
// 右侧浮动返回顶部
$(".go-top .after-con>div").hide()
$(".go-top .before-icon>div").hover(function(){
	var num=$(this).index();
	$(".go-top .after-con>div").eq(num).show().siblings().hide()
	$(".go-top .before-icon>div").parents().hover(function(){},
		function(){
			$(".go-top .after-con>div").hide()
		})
})
// 定制开发流程详情页的流程内容图片切换

jQuery(".survey-tab-Txtcon-right").slide({mainCell:".bd ul ",autoPlay:true,autoPage:true,effect:"leftLoop",vis:1,trigger:"click",prevCell:".prew",nextCell:".next",});

// 案例标签到一定高度浮动在顶部
/*
var win_h=$(window).height()/5;
var pro_t=$(".case-list-infoCon").offset().top;
var t=pro_t-win_h;
$(window).scroll(function(){
	if($(this).scrollTop()>=t){
		$(".case-list-infoCon").addClass("case-list-infoCon-top");
	}
	if($(this).scrollTop()<t){
		$(".case-list-infoCon").removeClass("case-list-infoCon-top");
	}
})
*/

/*
// 锚链接头部加距离
var con_t=$(".confont-right").find(".top-t").offset().top;
var conTOP=con_t-win_h;
	$(".case-list-infoTable li").click(function(){
		$(".top-t").addClass("h-50");
	})
	$(window).scroll(function(){
		if($(window).scrollTop()<conTOP){
			$(".top-t").removeClass("h-50");
		}

	})
*/

		
// 案例详情页标签切换
$(".case-list-infoTable li").click(function(){
	$(".case-list-infoTable li").removeClass("active");
	$(this).addClass("active");

})
	
// 定制开发页面监听标签切换

$(".software-tab li.active").find("p").removeClass("di-n")
$(".software-tab li").hover(function(){
	$(".software-tab li p").addClass("di-n");
	$(this).find("p").removeClass("di-n");
	$(this).parent().hover(function(){},
		function(){
			$(".software-tab li p").addClass("di-n");
	})
})	
$(".software-tab li").click(function(){
	$(".software-tab li").removeClass("active");
	$(this).addClass("active");
})
$(".software-tab li,.case-list-infoTable li").addClass("tab")

// 监听开始
jQuery(
function($) {
	
	$(document).ready(function(){
		var contentButton = [];
		var contentTop = [];
		var content = [];
		var lastScrollTop = 0;
		var scrollDir = '';
		var itemClass = '';
		var itemHover = '';
		var menuSize = null;
		var stickyHeight = 0;
		var stickyMarginB = 0;
		var currentMarginT = 0;
		var topMargin = 0;
		$(window).scroll(function(event){
   			var st = $(this).scrollTop();
   			if (st > lastScrollTop){
       			scrollDir = 'down';
   			} else {
      			scrollDir = 'up';
   			}
  			lastScrollTop = st;
		});
		$.fn.stickUp = function( options ) {
			// adding a class to users div
			$(this).addClass('stuckMenu');
        	//getting options
        	var objn = 0;
        	if(options != null) {
	        	for(var o in options.parts) {
	        		if (options.parts.hasOwnProperty(o)){
	        			content[objn] = options.parts[objn];
	        			objn++;
	        		}
	        	}
	  			if(objn == 0) {
	  				console.log('error:needs arguments');
	  			}

	  			itemClass = options.itemClass;
	  			itemHover = options.itemHover;
	  			if(options.topMargin != null) {
	  				if(options.topMargin == 'auto') {
	  					topMargin = parseInt($('.stuckMenu').css('margin-top'));
	  				} else {
	  					if(isNaN(options.topMargin) && options.topMargin.search("px") > 0){
	  						topMargin = parseInt(options.topMargin.replace("px",""));
	  					} else if(!isNaN(parseInt(options.topMargin))) {
	  						topMargin = parseInt(options.topMargin);
	  					} else {
	  						console.log("incorrect argument, ignored.");
	  						topMargin = 0;
	  					}	
	  				}
	  			} else {
	  				topMargin = 0;
	  			}
	  			menuSize = $('.'+itemClass).size();
  			}			
			stickyHeight = parseInt($(this).height());
			stickyMarginB = parseInt($(this).css('margin-bottom'));
			currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));
			//vartop = parseInt($(this).offset().top);
			//$(this).find('*').removeClass(itemHover);
		}
		$(document).on('scroll', function() {
			varscroll = parseInt($(document).scrollTop());
			if(menuSize != null){
				for(var i=0;i < menuSize;i++)
				{
					contentTop[i] = $('#'+content[i]+'').offset().top;
					function bottomView(i) {
						contentView = $('#'+content[i]+'').height()*.4;
						testView = contentTop[i] - contentView;
						//console.log(varscroll);
						if(varscroll > testView){
							$('.'+itemClass).removeClass(itemHover);
							$('.'+itemClass+':eq('+i+')').addClass(itemHover);
						} else if(varscroll < 50){
							$('.'+itemClass).removeClass(itemHover);
							$('.'+itemClass+':eq(0)').addClass(itemHover);
						}
					}
					if(scrollDir == 'down' && varscroll > contentTop[i]-50 && varscroll < contentTop[i]+50) {
						$('.'+itemClass).removeClass(itemHover);
						$('.'+itemClass+':eq('+i+')').addClass(itemHover);
					}
					if(scrollDir == 'up') {
						bottomView(i);
					}
				}
			}


/*
			if(vartop < varscroll + topMargin){
				$('.stuckMenu').addClass('isStuck');
				$('.stuckMenu').next().closest('div').css({
					'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'
				}, 10);
				$('.stuckMenu').css("position","fixed");
				$('.isStuck').css({
					top: '0px'
				}, 10, function(){

				});
			};
			

			if(varscroll + topMargin < vartop){
				$('.stuckMenu').removeClass('isStuck');
				$('.stuckMenu').next().closest('div').css({
					'margin-top': currentMarginT + 'px'
				}, 10);
				$('.stuckMenu').css("position","relative");
			};
*/
		});
	});

});

// 监听结束
// 监听调用
//initiating jQuery  
  jQuery(function($) {
    $(document).ready( function() {
      
      //为 '.navbar-wrapper' class 启用stickUp插件
      $('.software-tab,.case-list-infoCon-top').stickUp({
                    parts: {
                      0: 'tab01',
                      1: 'tab02',
                      2: 'tab03',
                      3: 'tab04',
                      4: 'tab05',
                      5: 'tab06',
                      6: 'tab07',
                      7: 'tab08',
                      8: 'tab09',
                    

                    },
                    itemClass: 'tab',
                    itemHover: 'active',
                    marginTop: '200'

                  });
      
    });
  });

 
  // 监听调用end
// 下载页弹出视频窗口
$(".video-clo,.video-windows").hide()	
function video(){
	$(".video-clo,.video-windows").fadeIn()
	$(".video-windows .close,.video-clo").click(function(){
		$(".video-clo,.video-windows").hide()
	})
}



$(".radio-blue").click(function(){
	$(".radio-blue").removeClass("active")
	$(this).addClass("active")
})
//功能模块的一级栏目和二级栏目


// 定制开发流程详情页tab页

    $(document).ready(function(){

        var iframeHeight = function () {
            var _height = $(window).height() - 34;
            $('#content').height(_height);
        }
        window.onresize = iframeHeight;
        $(function () {
            iframeHeight();
        });

    });
// 我们的价值点击进去详情页里面的左侧监听事件

    $(function(){
        //1.楼梯什么时候显示，800px scroll--->scrollTop
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            if($scroll>=800){
                $('#loutinav').show();
            }else{
                $('#loutinav').hide();
            }

            //4.拖动滚轮，对应的楼梯样式进行匹配
            $('.louti').each(function(){
                var $loutitop=$('.louti').eq($(this).index()).offset().top+400;
                //console.log($loutitop);
                if($loutitop>$scroll){//楼层的top大于滚动条的距离
                    $('#loutinav li').removeClass('active');
                    $('#loutinav li').eq($(this).index()).addClass('active');
                    return false;//中断循环
                }
            });
        });
        //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
        
        var $loutili=$('#loutinav li').not('.last');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('.louti').eq($(this).index()).offset().top;
            //获取每个楼梯的offsetTop值
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:$loutitop
            })
        });
        //3.回到顶部
        $('.last').on('click',function(){
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:0
            })
        });
    })


 // 功能模块的一级栏目和二级栏目
  $('.function-nav dl dd').click(function(){
    $('.function-nav dl dd').css('background','#fff');
    $('.function-nav dl dt').css('background','#fff')
    $(this).css('background','#eee');
  })

 $('.function-nav dl dt').click(function(e){
	e.preventDefault();
	e.stopPropagation();
    $('.function-nav dl dd').css('background','#fff');
    $('.function-nav dl dt').css('background','#fff')
    $(this).css('background','#eee');
	var $dl = $(this).parent();
	$dl.siblings().addClass("fold");
	$dl.toggleClass("fold");
  })


//功能模块的左侧导航
//功能模块的左侧导航
//左侧箭头
$(".funt-leftnav .tab-con .item-con").hide().first().show();
$(".funt-leftnav .tab .item").first().addClass('active');
$(".funt-leftnav .tab .item").click(function(){
	$(".funt-leftnav .tab .item").removeClass("active");
	$(this).addClass('active');
	var num=$(this).index();
	$(this).parents(".funt-leftnav").find(".tab-con .item-con").eq(num-1).show().siblings().hide()

});
















       


	
	

