/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-08-30 19:58:27
 * -----------------------------------------------
 */

console.log("ui.js");var winH=$(window).height();const visualSection=document.querySelector("#visual"),batterySection=document.querySelector("#battery"),appSection=document.querySelector("#app"),visualPlayer=document.querySelector("#player"),showcase=document.querySelector("#showcase"),showcaseTitle=document.querySelector(".showcase__title"),showcaseMain=document.querySelector(".showcase__main"),showcaseImgs=document.querySelectorAll(".showcase__img"),showcaseSpans=document.querySelectorAll(".sc-span"),showcasePaths=document.querySelectorAll(".sc-path"),showcaseDots=document.querySelectorAll(".sc-dot"),batteryPoints=document.querySelector(".points"),ess=document.querySelector(".ess"),essImg=document.querySelector(".ess__img"),essImgShadow=document.querySelector(".ess__img-shadow"),controller=new ScrollMagic.Controller;function pathPrepare(e){var a=e.getTotalLength();console.log(a),e.style.strokeDasharray=a+10,e.style.strokeDashoffset=a+10}showcasePaths.forEach(function(e){pathPrepare(e)});const tween_visual_text=TweenMax.to(".visual__text",.8,{alpha:0,ease:Linear.easeNone}),tween_visual_video=TweenMax.to(".visual__player",.8,{alpha:0,ease:Linear.easeNone}),tween_showcase_title=TweenMax.from(showcaseTitle,.4,{alpha:0,ease:Linear.easeNone}),tween_showcase_img=TweenMax.from(showcaseMain,.4,{alpha:0,delay:.2,ease:Linear.easeNone}),tween_showcase_img_all=(new TimelineMax).fromTo(showcaseImgs[0],.4,{scale:1.3},{scale:1,delay:.8,ease:Linear.easeNone}).to(showcaseImgs[0],.4,{x:-208,scale:1,delay:0,ease:Linear.easeNone}),tween_showcase_img_1=(new TimelineMax).to(showcaseImgs[1],.4,{alpha:1,y:50,x:-54,delay:1.3,ease:Linear.easeNone}).to(showcaseImgs[2],.4,{alpha:1,y:50,x:54,delay:1.3,ease:Linear.easeNone},0).to(showcaseImgs[3],.4,{alpha:1,y:106,x:112,delay:1.3,ease:Linear.easeNone},0).to(showcaseImgs[4],.4,{alpha:1,y:128,x:170,delay:1.3,ease:Linear.easeNone},0).to(showcaseImgs[5],.4,{alpha:1,y:146,x:230,delay:1.3,ease:Linear.easeNone},0).to(showcaseImgs[6],.4,{alpha:1,y:164,x:292,delay:1.3,ease:Linear.easeNone},0),timing=".4",tween_showcase_text_1=(new TimelineMax).to(showcaseDots[0],".4",{alpha:1,delay:2,ease:Linear.easeNone}).to(showcaseDots[1],".4",{alpha:1,delay:2.4,ease:Linear.easeNone},0).to(showcaseDots[2],".4",{alpha:1,delay:2.8,ease:Linear.easeNone},0).to(showcaseDots[3],".4",{alpha:1,delay:3.2,ease:Linear.easeNone},0).to(showcasePaths[0],".4",{alpha:1,strokeDashoffset:0,delay:2,ease:Linear.easeNone},0).to(showcasePaths[1],".4",{alpha:1,strokeDashoffset:0,delay:2.4,ease:Linear.easeNone},0).to(showcasePaths[2],".4",{alpha:1,strokeDashoffset:0,delay:2.8,ease:Linear.easeNone},0).to(showcasePaths[3],".4",{alpha:1,strokeDashoffset:0,delay:3.2,ease:Linear.easeNone},0).addLabel("showSpan").to(showcaseSpans[0],.3,{alpha:1,delay:2.2,ease:Linear.easeNone},0).to(showcaseSpans[1],.3,{alpha:1,delay:2.6,ease:Linear.easeNone},0).to(showcaseSpans[2],.3,{alpha:1,delay:3,ease:Linear.easeNone},0).to(showcaseSpans[3],.3,{alpha:1,delay:3.4,ease:Linear.easeNone},0).to(".showcase__spacer",.3,{alpha:0,ease:Linear.easeNone}),scene_visual=new ScrollMagic.Scene({triggerElement:visualSection,triggerHook:"onLeave",duration:"100%"}).setPin(visualSection,{pushFollowers:!1}).setTween([tween_visual_text,tween_visual_video]).addTo(controller).addIndicators({name:"비주얼 씬 트리거"}).setClassToggle(batterySection,"is-hidden").on("progress",function(e){visualPlayer.style.transform=`translateZ(${10*e.progress}rem)`}),scene_showcase=new ScrollMagic.Scene({triggerElement:showcase,triggerHook:0,duration:"260%"}).setPin(showcase).setTween([tween_showcase_title,tween_showcase_img,tween_showcase_img_all,tween_showcase_img_1,tween_showcase_text_1]).addTo(controller).addIndicators({name:"쇼케이스 씬 트리거"}).on("end",function(e){$(".points__button").toggleClass("on")}),scene_app_pallax=new ScrollMagic.Scene({triggerElement:ess,triggerHook:"onEnter",duration:"100%"}).setPin(ess,{pushFollowers:!1}).addIndicators({name:"패럴렉스 씬 트리거"}),scene_app=new ScrollMagic.Scene({triggerElement:ess,triggerHook:"onStart",duration:"100%"}).setTween([]).addIndicators({name:"APP 씬 트리거"});controller.scrollTo(function(e){TweenMax.to(window,.5,{scrollTo:{y:e}})}),$(".footer__top").on("click",function(e){e.preventDefault(),controller.scrollTo(0)}),$(".header__menu-link").on("click",function(e){e.preventDefault();var a=$(this).attr("href").split("#")[1];controller.scrollTo(`#${a}`)});