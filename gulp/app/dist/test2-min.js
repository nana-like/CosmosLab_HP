/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-07 17:21:23
 * -----------------------------------------------
 */

var $window=$(window),$document=$(document),$slidesContainer=$(".articles"),$allSlides=$(".article"),$currentSlide=$allSlides.first(),isAnimating=!1,pageHeight=$window.innerHeight(),currentIndex=0,timeline1=(new TimelineMax).reverse(),timeline2=(new TimelineMax).to(".article__home",.5,{autoAlpha:1,repeat:3},"+=0.5").reverse(),timeline3=(new TimelineMax).to(".article__elec",.5,{autoAlpha:1,repeat:3},"+=0.5").reverse(),timelines=[timeline1,timeline2,timeline3];function onMouseWheel(e){console.dir("온마우스휠");var i=e.originalEvent.wheelDelta/30||-e.originalEvent.detail;i<-1?goToNextSlide():i>1&&goToPrevSlide(),e.preventDefault()}function goToPrevSlide(){$currentSlide.prev().length&&goToSlide($currentSlide.prev())}function goToNextSlide(){$currentSlide.next().length&&goToSlide($currentSlide.next())}function goToSlide(e){!isAnimating&&e.length&&(isAnimating=!0,$currentSlide=e,currentID=$currentSlide.attr("id"),NextSlide=$currentSlide.next(),TweenLite.to($slidesContainer,1,{scrollTo:{y:pageHeight*$currentSlide.index()},onComplete:onSlideChangeEnd,onCompleteScope:this}),TweenLite.to($allSlides.filter(".active"),.1,{className:"-=active"}),TweenLite.to($allSlides.filter($currentSlide),.1,{className:"+=active"}))}function onSlideChangeEnd(){isAnimating=!1,timelines[currentIndex].reversed(!0).progress(0),currentIndex=$currentSlide.index(),timelines[currentIndex].reversed(!1)}function onResize(e){var i=$window.innerHeight();pageHeight!==i&&(pageHeight=i,TweenLite.set([$slidesContainer,$allSlides],{height:pageHeight+"px"}),TweenLite.set($slidesContainer,{scrollTo:{y:pageHeight*$currentSlide.index()}}))}goToSlide($currentSlide);