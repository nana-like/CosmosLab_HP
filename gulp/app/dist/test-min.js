/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-06 15:48:28
 * -----------------------------------------------
 */

var scrollPosition,winScrollTop,$window=$(window),$body=$("body"),$test=$(".test"),$articles=$(".articles"),articlesOffsetTop=$test.offset().top;$window.scroll(function(e){var o=e.originalEvent;o.deltaY||o.wheelDelta;(winScrollTop=$window.scrollTop())>=articlesOffsetTop?($test.addClass("is-fixed"),$test.css("top",winScrollTop)):$test.removeClass("is-fixed")}),$window.on("mousewheel DOMMouseScroll",function(e){console.log("휠 이벤트");e.originalEvent.wheelDelta/30||e.originalEvent.detail});var $slidesContainer=$(".articles"),$allSlides=$(".article"),$currentSlide=$allSlides.first();function goToPrevSlide(){console.log("scroll up"),$currentSlide.prev().length&&goToSlide($currentSlide.prev())}function goToNextSlide(){console.log("scroll down"),$currentSlide.next().length&&goToSlide($currentSlide.next())}function goToSlide(e){!isAnimating&&e.length&&(isAnimating=!0,$currentSlide=e,currentID=$currentSlide.attr("id"),NextSlide=$currentSlide.next(),console.log($currentSlide),TweenLite.to($slidesContainer,1,{scrollTo:{y:pageHeight*$currentSlide.index()},onComplete:onSlideChangeEnd,onCompleteScope:this}),TweenLite.to($allSlides.filter(".active"),.1,{className:"-=active"}),TweenLite.to($allSlides.filter($currentSlide),.1,{className:"+=active"}))}var articlePos=[];$(".article").each(function(e,o){articlePos.push(o.offsetTop)});var isAnimating=!1;new ScrollMagic.Scene({triggerElement:".test",triggerHook:"onLeave",duration:"200%"}).addTo(controller).addIndicators({name:"FIXED--"}),new ScrollMagic.Scene({triggerElement:"#tg2",triggerHook:"onLeave",duration:"100%"}).addTo(controller).addIndicators({name:"트리거2"}).on("enter",function(e){console.log("엔터!")});