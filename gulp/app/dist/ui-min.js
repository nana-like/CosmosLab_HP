/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-08-17 18:27:57
 * -----------------------------------------------
 */

console.log("ui.js");var winH=$(window).height(),controller=new ScrollMagic.Controller;const tween_visual_text=TweenMax.to(".visual__text",.8,{alpha:0,ease:Linear.easeNone}),tween_visual_video=TweenMax.to(".visual__player",1,{alpha:0,ease:Linear.easeNone}),tween_battery_section=TweenMax.from(".showcase__title",1,{alpha:0,ease:Linear.easeNone}),visualSection=document.querySelector("#visual"),visualPlayer=document.querySelector(".visual__player"),scene_visual=new ScrollMagic.Scene({triggerElement:".visual",triggerHook:"onLeave",duration:"100%"}).setPin(visualSection,{pushFollowers:!1}).setTween([tween_visual_text,tween_visual_video]).addTo(controller).addIndicators({name:"비주얼 씬 트리거"}).on("progress",function(e){visualPlayer.style.transform=`translateZ(${10*e.progress}rem)`}),batterySection=document.querySelector("#battery"),showcaseArticle=document.querySelector(".showcase"),tween_bt_title=TweenMax.from(".battery__title",.5,{y:"50%",alpha:0,ease:Linear.easeNone}),tween_bt_images=TweenMax.to(".battery__main-1",.5,{x:"50%",y:"100%",alpha:1,ease:Linear.easeNone});