
console.log("ui.js");

var winH = $(window).height();
// $('section').css('height', winH);


// 💪 컨트롤러 추가
var controller = new ScrollMagic.Controller();


const tween_visual_text = TweenMax.to(
  '.visual__text',
  .8,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);

const tween_visual_video = TweenMax.to(
  '.visual__player',
  1,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);

const tween_battery_title = new TimelineMax().from(
  '.showcase__title',
  .5,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
)
.from(
  '.showcase__img',
  .5,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);




// 1. 비주얼 - 물속으로 들어가기!
const visualSection = document.querySelector("#visual");
const visualPlayer = document.querySelector(".visual__player");

const scene_visual = new ScrollMagic.Scene({
  triggerElement: ".visual",
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(visualSection, {pushFollowers: false})
.setTween([
  tween_visual_text,
  tween_visual_video
])
.addTo(controller)
.addIndicators({
  name: "비주얼 씬 트리거"
})
.setClassToggle('.battery', 'is-hidden')
.on("progress", function (e) {
  visualPlayer.style.transform = `translateZ(${(e.progress)*10}rem)`;
})
// .on("end", function (e) {
//   batterySection.classList.add("is-visible");
// });
// .on("start", function (e) {
//   batterySection.classList.remove("is-visible");
// });

const batterySection = document.querySelector("#battery");
const showcaseArticle = document.querySelector(".showcase");
const scene_battery = new ScrollMagic.Scene({
  triggerElement: ".showcase",
  triggerHook: 0,
  duration: "200%"
})
.setPin(showcaseArticle)
.setTween([
  tween_battery_title
])
.addTo(controller)
.addIndicators({
  name: "쇼케이스 씬 트리거"
})


// --------



const tween_bt_title = TweenMax.from(
  '.battery__title',
  0.5,
  {
    y: "50%",
    alpha: 0,
    ease: Linear.easeNone
  }
);

const tween_bt_images = TweenMax.to(
  '.battery__main-1',
  0.5,
  {
    x: "50%",
    y: "100%",
    alpha: 1,
    ease: Linear.easeNone
  }
);



// const scene_bt_title = new ScrollMagic.Scene({
//   triggerElement: "#bt-trigger1"
// })
// .setTween(tween_bt_title)
// .addTo(controller)
// .addIndicators({
//   name: "1"
// });


// var batterySection = document.querySelector(".battery__showcase");
// const scene_bt_images = new ScrollMagic.Scene({
//   triggerElement: "#battery",
//   triggerHook: 'onLeave',
//   duration: "100%"
// })
// .setPin(batterySection)
// .setTween(tween_bt_images)
// .addTo(controller)
// .addIndicators({
//   name: "이미지 트리거"
// });
