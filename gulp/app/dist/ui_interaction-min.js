/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-01 18:10:37
 * -----------------------------------------------
 */

const visualPlayer=document.querySelector("#player");var visual_animation=gsap.timeline({scrollTrigger:{trigger:".visual",scrub:1,start:"0 0%"}});visual_animation.to(".visual__text",{opacity:0,duration:.5}).to(".visual__player",{z:80,duration:1},0).to(".visual__player",{opacity:0,duration:.6},0);var battery_animation=gsap.timeline({scrollTrigger:{id:" battery 애니메이션",markers:{startColor:"#b0da77",endColor:"#0124b6",fontSize:"18px"},trigger:".showcase",scrub:1,pin:!0,end:"bottom -=70%"}}),sc_title=gsap.timeline();ScrollTrigger.create({id:"showcaseTitle",markers:{startColor:"#28d17a",endColor:"#bb4214",fontSize:"18px"},animation:sc_title,trigger:".showcase__title",scrub:1,start:"top 80%",end:"bottom 60%",ease:"back(2)"}),sc_title.from(".sc-title-1",{opacity:0,y:100},0),sc_title.from(".sc-title-2",{opacity:0,y:100,delay:.2},0);const showcaseImgs=document.querySelectorAll(".showcase__img"),showcaseSpans=document.querySelectorAll(".sc-span"),showcasePaths=document.querySelectorAll(".sc-path"),showcaseDots=document.querySelectorAll(".sc-dot");function pathPrepare(t){var a=t.getTotalLength();console.log(a),t.style.strokeDasharray=a+10,t.style.strokeDashoffset=a+10}showcasePaths.forEach(function(t){pathPrepare(t)});var showcaseImg_animation=gsap.timeline({defaults:{duration:1},scrollTrigger:{id:"showcase IMG",markers:{startColor:"#a3017a",endColor:"#d9ba00",fontSize:"18px"},trigger:".showcase__main",scrub:1,start:"top 90%",end:"bottom -=10%"}});function getScrollPos(t,a){var o=t.labels.jump/t.totalDuration(),s=a;return s.start+(s.end-s.start)*o}showcaseImg_animation.addLabel("start").from(showcaseImgs[0],{opacity:0,y:50,duration:.9}).fromTo(showcaseImgs[0],{scale:1.3},{scale:1,x:-208}).addLabel("show_0").from(showcaseDots[0],{opacity:0},"show_0+=0.2").to(showcasePaths[0],{opacity:1,strokeDashoffset:0},"show_0+=0.2").from(showcaseSpans[0],{opacity:0,x:10},"show_0+=0.5").addLabel("show_1").from(showcaseImgs[1],{opacity:0,y:0,x:-20},"show_0+=0.2").from(showcaseDots[1],{opacity:0},"show_0+=0.4").to(showcasePaths[1],{opacity:1,strokeDashoffset:0},"show_0+=0.4").from(showcaseSpans[1],{opacity:0,x:-10},"show_0+=0.7").addLabel("show_2").from(showcaseImgs[2],{opacity:0,y:0,x:-40},"show_0+=0.8").from(showcaseDots[2],{opacity:0},"show_1+=0.4").to(showcasePaths[2],{opacity:1,strokeDashoffset:0},"show_1+=0.4").from(showcaseSpans[2],{opacity:0,x:-10},"show_1+=0.7").addLabel("show_3").from(showcaseImgs[3],{opacity:0,y:0,x:-60},"show_2+=0.4").from(showcaseDots[3],{opacity:0},"show_2+=0.8").to(showcasePaths[3],{opacity:1,strokeDashoffset:0},"show_2+=0.8").from(showcaseSpans[3],{opacity:0,x:10},"show_2+=1").addLabel("show_4").from(showcaseImgs[4],{opacity:0,y:0,x:-80},"show_2+=0.8").addLabel("show_5").from(showcaseImgs[5],{opacity:0,y:0,x:-100},"show_2+=1").addLabel("show_6").from(showcaseImgs[6],{opacity:0,y:0,x:-120},"show_2+=1.2").addLabel("jump").addLabel("points").set(".points__list",{className:"points__list on"},"show_6"),$(".header__logo-link").on("click",function(t){t.preventDefault(),gsap.to(window,1,{scrollTo:0})}),$(".footer__top").on("click",function(t){t.preventDefault(),gsap.to(window,1,{scrollTo:0})}),$(".header__menu-link").on("click",function(t){t.preventDefault();var a=$(this).attr("href").split("#")[1];"battery"===a&&gsap.to(window,{scrollTo:getScrollPos(showcaseImg_animation,battery_animation.scrollTrigger)}),"app"===a&&gsap.to(window,{scrollTo:getScrollPos(ess_img,ess_img.scrollTrigger)})});var ess_animation=gsap.timeline({defaults:{},scrollTrigger:{id:" ESS 애니메이션",trigger:".ess",scrub:1,pin:!0,start:"0 0%",end:"bottom 20%"}}),ess_title=gsap.timeline();ScrollTrigger.create({id:"essTitle",markers:{startColor:"#28d17a",endColor:"#bb4214",fontSize:"18px"},animation:ess_title,trigger:".ess__title",scrub:1,end:"bottom 50%",ease:"back(2)"}),ess_title.from(".ess__title",{opacity:0,y:100,duration:.5}),ess_title.from(".ess__info",{opacity:0,y:100,delay:.2},0),ess_title.from(".ess__main",{y:50},0);var ess_img=gsap.timeline();ScrollTrigger.create({id:"essTitle",markers:{startColor:"#28d17a",endColor:"#bb4214",fontSize:"18px"},animation:ess_img,trigger:".ess__main",scrub:1,start:"top 50%",end:"bottom +=60%",ease:"back(2)"}),ess_img.from(".ess__img",{z:-100,x:40,y:0,duration:1.2,ease:Sine.easeOut}),ess_img.from(".ess__img-shadow",{opacity:0,x:-180,y:50,delay:.4,ease:Sine.easeOut},0),ess_img.addLabel("jump"),ess_title.from(".ess",{backgroundSize:"130% 130%",backgroundPosition:"45% 15%",ease:Sine.easeOut,duration:1.5},0);var articles_animation=gsap.timeline();ScrollTrigger.create({id:"아티클",markers:{startColor:"#e87134",endColor:"#d6ab93",fontSize:"22px"},trigger:".article",animation:articles_animation,pin:!0,scrub:1,end:"bottom -=100%",ease:"quart.inOut"}),articles_animation.to("#at-bg1",{opacity:1,x:0,duration:1.5},"first"),articles_animation.to("#at-main0",{opacity:0,x:0,duration:.4},"first"),articles_animation.to("#at-main1",{opacity:1,x:0,duration:.4},"first+=0.4"),articles_animation.to("#at-bg2",{opacity:1,x:0,duration:1.5},"second"),articles_animation.to("#at-main1",{opacity:0,x:0,duration:.4},"second"),articles_animation.to("#at-main2",{opacity:1,x:0,duration:.4},"second+=0.4"),articles_animation.to("#at-bg3",{opacity:1,x:0,duration:1.5},"third"),articles_animation.to("#at-main2",{opacity:0,x:0,duration:.4},"third"),articles_animation.to("#at-main3",{opacity:1,x:0,duration:.4},"third+=0.4"),articles_animation.to("#at-bg4",{opacity:1,x:0,duration:1.5},"4"),articles_animation.to("#at-main3",{opacity:0,x:0,duration:.4},"4"),articles_animation.to("#at-main4",{opacity:1,x:0,duration:.4},"4+=0.4"),articles_animation.to("#at-bg5",{opacity:1,x:0,duration:1.5},"5");const sections=gsap.utils.toArray(".marker");var marker__battery=gsap.timeline({scrollTrigger:{trigger:".marker-battery",id:"BATTERY!",start:"top top+=100px",end:"bottom top+=100px",toggleActions:"play reverse play reverse",toggleClass:{targets:".header__nav a[href$='battery']",className:"is-active"}}}),marker__app=gsap.timeline({scrollTrigger:{trigger:".marker-app",id:"APP!",start:"top top+=100px",end:"bottom top+=100px",toggleActions:"play reverse play reverse",toggleClass:{targets:".header__nav a[href$='app']",className:"is-active"}}}),marker__contact=gsap.timeline({scrollTrigger:{trigger:".marker-contact",id:"CONTACT!",markers:{startColor:"#13a4a0",endColor:"#bb4214",fontSize:"58px"},start:"top top+=100px",toggleClass:{targets:".header__nav a[href$='contact']",className:"is-active"}}}),header=gsap.timeline({scrollTrigger:{trigger:".wrap",id:"HEADER!",markers:{startColor:"#13a4a0",endColor:"#bb4214",fontSize:"58px"},start:"top top",end:"bottom top",toggleClass:{targets:".header",className:"is-active"}}});