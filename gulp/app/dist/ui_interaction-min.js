/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-08-31 17:35:08
 * -----------------------------------------------
 */

const visualPlayer=document.querySelector("#player");var visual_animation=gsap.timeline({scrollTrigger:{trigger:".visual",scrub:1,start:"0 0%"}});visual_animation.to(".visual__text",{opacity:0,duration:.5}).to(".visual__player",{z:80,duration:1},0).to(".visual__player",{opacity:0,duration:.6},0);var battery_animation=gsap.timeline({scrollTrigger:{id:" battery 애니메이션",markers:{startColor:"#b0da77",endColor:"#0124b6",fontSize:"18px"},trigger:".battery",scrub:1,pin:!0}});gsap.from(".showcase__title",{scrollTrigger:{trigger:".showcase__title",scrub:1,start:"top 80%",end:"bottom 60%",ease:"back(2)"},opacity:0,y:"20%"}),gsap.from(".sc-all",{scrollTrigger:{trigger:".showcase__main",scrub:1,start:"top 70%",end:"bottom 50%",ease:"back(2)"},opacity:0,y:50,duration:.9});