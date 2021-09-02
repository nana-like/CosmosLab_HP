/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-02 16:10:14
 * -----------------------------------------------
 */

gsap.registerPlugin(ScrollToPlugin,ScrollTrigger),$(".footer__top").on("click",function(e){e.preventDefault()});var scrollPosition,$body=$("body");function getScrollBarWidth(){$body.css("overflow","hidden");var e=$body.innerWidth();return $body.css("overflow","scroll"),(e-=$body.innerWidth())||(e=$body.width()-$body.innerWidth()),$body.css("overflow",""),e}function preventScroll(){if(console.log(getScrollBarWidth()),$(document).height()<=$(window).height())return!1;scrollPosition=window.pageYOffset||document.documentElement.scrollTop,$body.css({overflow:"hidden",left:0,right:0,"padding-right":getScrollBarWidth()+"px"})}function allowScroll(){$body.css({overflow:"",position:"",top:"",left:"",right:"","padding-right":""}),window.scrollTo(0,scrollPosition)}function openPopup(e){e.preventDefault(),preventScroll();var o=$(this).data("popup");$(this).addClass("is-active"),$(".lp-"+o).addClass("is-opened")}function closePopup(e){e.preventDefault(),$(".lp.is-opened").removeClass("is-opened"),$(".points__button").removeClass("is-active"),setTimeout(allowScroll,300)}function stopIntro(){$("body").removeClass("is-intro"),$("body").addClass("is-loaded"),setTimeout(allowScroll,1e3)}$("[data-popup").on("click",openPopup),$(".lp__close").on("click",closePopup),$(".lp__dim").on("click",closePopup),$(window).on("load",function(){$("body").addClass("is-intro"),preventScroll(),setTimeout(function(){stopIntro()},0),$(".intro").on("click",function(){stopIntro()})});var breakPoint=1024,isTabletSize=function(){return window.innerWidth<breakPoint},tabletEvt=function(){window.innerWidth<breakPoint?$("body").addClass("mq-mobile"):($(".header").removeClass("is-opened"),gsap.to(".header__nav",0,{opacity:1}),$("body").removeClass("mq-mobile"))},resizeHandler=function(){tabletEvt()},loadHandler=function(){tabletEvt()};let headerMenuTween,headerLnagTween;window.addEventListener("resize",resizeHandler),window.addEventListener("load",loadHandler),$(".burger").on("click",function(){$("body").hasClass("mq-mobile")&&$(".header").hasClass("is-opened")&&(console.log("MOBILE CLOSE"),headerMenuTween.progress(1),headerLnagTween.progress(1),gsap.killTweensOf(".header__menu-link"),gsap.killTweensOf(".header__lang")),$(".mq-mobile .header").toggleClass("is-opened"),$("body").hasClass("mq-mobile")&&$(".header").hasClass("is-opened")&&(gsap.to(".header__nav",{opacity:1,duration:.5}),headerMenuTween=gsap.fromTo(".header__menu-link",{autoAlpha:0,y:20},{autoAlpha:1,delay:.3,y:0,duration:.45,stagger:.25}),headerLnagTween=gsap.fromTo(".header__lang",{autoAlpha:0,y:20},{autoAlpha:1,y:0,delay:1,duration:.45}))});