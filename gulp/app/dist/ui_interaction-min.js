/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-06 15:48:28
 * -----------------------------------------------
 */

let headerHeight;var showcaseImgs=document.querySelectorAll(".showcase__img"),showcaseSpans=document.querySelectorAll(".sc-span"),showcaseSpans_M=document.querySelectorAll(".sc-span-mo"),showcasePaths=document.querySelectorAll(".sc-path"),showcaseDots=document.querySelectorAll(".sc-dot");function getheaderHeight(){return headerHeight=isTabletSize()?68:100,console.log(headerHeight),headerHeight}function pathPrepare(a){var t=a.getTotalLength();console.log(t),a.style.strokeDasharray=t+10,a.style.strokeDashoffset=t+10}function getScrollPos(a,t){var e=a.labels.jump/a.totalDuration(),o=t;return o.start+(o.end-o.start)*e}gsap.delayedCall(1,function(){ScrollTrigger.refresh()}),showcasePaths.forEach(function(a){pathPrepare(a)}),$(".header__logo-link").on("click",function(a){a.preventDefault(),gsap.to(window,1,{scrollTo:0})}),$(".footer__top").on("click",function(a){a.preventDefault(),gsap.to(window,1,{scrollTo:0})}),$(".header__menu-link").on("click",function(a){a.preventDefault();var t=$(this).attr("href").split("#")[1];"battery"===t&&gsap.to(window,{scrollTo:getScrollPos(showcaseImg_animation,battery_animation.scrollTrigger)}),"app"===t&&gsap.to(window,{scrollTo:{y:"#app",offsetY:getheaderHeight()}}),"contact"===t&&gsap.to(window,{scrollTo:{y:"#contact",offsetY:getheaderHeight()}}),$(".header").hasClass("is-opened")&&$(".header").removeClass("is-opened")});const visualPlayer=document.querySelector("#player"),visual_animation=gsap.timeline({scrollTrigger:{trigger:".visual",scrub:1,start:"0 0"}});visual_animation.to(".visual__text",{opacity:0,duration:.5}).to(".visual__player",{z:80,duration:1},0).to(".visual__player",{opacity:0,duration:.6},0);var battery_animation=gsap.timeline({scrollTrigger:{trigger:".showcase",scrub:1,pin:!0,start:()=>"0 "+getheaderHeight(),end:"bottom -=70%",invalidateOnRefresh:!0}});const sc_title=gsap.timeline();ScrollTrigger.create({id:"showcaseTitle",animation:sc_title,trigger:".showcase__title",scrub:1,start:"top 80%",end:"bottom 60%",ease:"back(2)"}),sc_title.from(".sc-title-1",{opacity:0,y:100},0),sc_title.from(".sc-title-2",{opacity:0,y:100,delay:.2},0);const showcaseImg_animation=gsap.timeline({scrollTrigger:{markers:{startColor:"#a3017a",endColor:"#d9ba00",fontSize:"18px"},trigger:".showcase__main",scrub:1,start:"top 90%",end:"bottom -=10%"}});showcaseImg_animation.addLabel("start").from(showcaseImgs[0],{opacity:0,y:50,duration:.9}).fromTo(showcaseImgs[0],{scale:1.3},{scale:1,x:-208}).addLabel("show_0").from(showcaseDots[0],{opacity:0},"show_0+=0.2").to(showcasePaths[0],{opacity:1,strokeDashoffset:0},"show_0+=0.2").from(showcaseSpans[0],{opacity:0,x:10},"show_0+=0.5").from(showcaseSpans_M[0],{opacity:0,x:-10},"show_0+=0.5").addLabel("show_1").from(showcaseImgs[1],{opacity:0,y:0,x:-20},"show_0+=0.2").from(showcaseDots[1],{opacity:0},"show_0+=0.4").to(showcasePaths[1],{opacity:1,strokeDashoffset:0},"show_0+=0.4").from(showcaseSpans[1],{opacity:0,x:-10},"show_0+=0.7").from(showcaseSpans_M[1],{opacity:0,x:-10},"show_0+=0.7").addLabel("show_2").from(showcaseImgs[2],{opacity:0,y:0,x:-40},"show_0+=0.8").from(showcaseDots[2],{opacity:0},"show_1+=0.4").to(showcasePaths[2],{opacity:1,strokeDashoffset:0},"show_1+=0.4").from(showcaseSpans[2],{opacity:0,x:-10},"show_1+=0.7").from(showcaseSpans_M[2],{opacity:0,x:-10},"show_1+=0.7").addLabel("show_3").from(showcaseImgs[3],{opacity:0,y:0,x:-60},"show_2+=0.4").from(showcaseDots[3],{opacity:0},"show_2+=0.8").to(showcasePaths[3],{opacity:1,strokeDashoffset:0},"show_2+=0.8").from(showcaseSpans[3],{opacity:0,x:10},"show_2+=1").from(showcaseSpans_M[3],{opacity:0,x:-10},"show_2+=1").addLabel("show_4").from(showcaseImgs[4],{opacity:0,y:0,x:-80},"show_2+=0.8").addLabel("show_5").from(showcaseImgs[5],{opacity:0,y:0,x:-100},"show_2+=1").addLabel("show_6").from(showcaseImgs[6],{opacity:0,y:0,x:-120},"show_2+=1.2").addLabel("jump").addLabel("points").set(".points__list",{className:"points__list on"},"show_6"),ScrollTrigger.matchMedia({"( min-width: 1024px )":function(){}});var ess_title=gsap.timeline();ScrollTrigger.create({animation:ess_title,trigger:".ess__title",scrub:1,end:"bottom 50%",ease:"back(2)"}),ess_title.from(".ess__title",{opacity:0,y:100,duration:.5}),ess_title.from(".ess__info",{opacity:0,y:100,delay:.2},0);var ess_img=gsap.timeline();ScrollTrigger.create({animation:ess_img,trigger:".ess__main",scrub:1,start:"top 50%",end:"bottom +=60%",ease:"back(2)"}),ess_img.from(".ess__img",{z:-100,x:40,y:20,duration:1.2,ease:Linear.easeNone}),ess_img.from(".ess__img-shadow",{opacity:0,x:-100,y:38,delay:.2,ease:Linear.easeNone},0),ess_img.addLabel("jump"),ess_title.from(".ess",{backgroundSize:"130% 130%",backgroundPosition:"45% 15%",ease:Sine.easeOut,duration:1.5},0);var articles_animation=gsap.timeline();ScrollTrigger.create({id:"아티클",markers:{startColor:"#e87134",endColor:"#d6ab93",fontSize:"22px"},trigger:".article",animation:articles_animation,pin:!0,scrub:1,start:()=>"0 "+getheaderHeight(),end:"bottom -=100%",ease:"quart.inOut"}),articles_animation.to("#at-bg1",{opacity:1,x:0,duration:1.5},"first"),articles_animation.to("#at-main0",{opacity:0,x:0,duration:.4},"first"),articles_animation.to("#at-main1",{opacity:1,x:0,duration:.4},"first+=0.4"),articles_animation.to("#at-bg2",{opacity:1,x:0,duration:1.5},"second"),articles_animation.to("#at-main1",{opacity:0,x:0,duration:.4},"second"),articles_animation.to("#at-main2",{opacity:1,x:0,duration:.4},"second+=0.4"),articles_animation.to("#at-bg3",{opacity:1,x:0,duration:1.5},"third"),articles_animation.to("#at-main2",{opacity:0,x:0,duration:.4},"third"),articles_animation.to("#at-main3",{opacity:1,x:0,duration:.4},"third+=0.4"),articles_animation.to("#at-bg4",{opacity:1,x:0,duration:1.5},"4"),articles_animation.to("#at-main3",{opacity:0,x:0,duration:.4},"4"),articles_animation.to("#at-main4",{opacity:1,x:0,duration:.4},"4+=0.4"),articles_animation.to("#at-bg5",{opacity:1,x:0,duration:1.5},"5");const sections=gsap.utils.toArray(".marker");var marker__battery=gsap.timeline({scrollTrigger:{trigger:".marker-battery",id:"BATTERY!",start:"top top+=100px",end:"bottom top+=100px",toggleActions:"play reverse play reverse",toggleClass:{targets:".header__nav a[href$='battery']",className:"is-active"}}}),marker__app=gsap.timeline({scrollTrigger:{trigger:".marker-app",id:"APP!",start:"top top+=100px",end:"bottom top+=100px",toggleActions:"play reverse play reverse",toggleClass:{targets:".header__nav a[href$='app']",className:"is-active"}}}),marker__contact=gsap.timeline({scrollTrigger:{trigger:".marker-contact",id:"CONTACT!",start:"top top+=100px",toggleClass:{targets:".header__nav a[href$='contact']",className:"is-active"}}}),header=gsap.timeline({scrollTrigger:{trigger:".wrap",id:"HEADER!",start:"top top",end:"bottom top",toggleClass:{targets:".header",className:"is-active"}}});