
console.log("ui.js");

var winH = $(window).height();
// $('section').css('height', winH);




const showcaseTitle = document.querySelector(".showcase__title");
const showcaseMain = document.querySelector(".showcase__main");
const showcaseImgs = document.querySelectorAll(".showcase__img");
const showcaseSpans = document.querySelectorAll(".sc-span");
const showcasePaths = document.querySelectorAll(".sc-path");
const showcaseDots = document.querySelectorAll(".sc-dot");
const batteryPoints = document.querySelector(".points");

const controller = new ScrollMagic.Controller(); // 컨트롤러 추가


function pathPrepare(el) {
  var lineLength = el.getTotalLength();
  console.log(lineLength);
  el.style.strokeDasharray = lineLength + 10;
  el.style.strokeDashoffset = lineLength + 10;
}

showcasePaths.forEach(function (e) {
  pathPrepare(e);
});


// 비주얼 - 텍스트
const tween_visual_text = TweenMax
.to(
  '.visual__text',
  .9,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);

// 비주얼 - 비디오
const tween_visual_video = TweenMax
.to(
  '.visual__player',
  1,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);


// 쇼케이스 - 타이틀
const tween_showcase_title = TweenMax
.from(
  showcaseTitle,
  .6,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);

const tween_showcase_img = TweenMax
.from(
  showcaseMain,
  .6,
  {
    alpha: 0,
    delay: .3,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_all = TweenMax
.to(
  showcaseImgs[0],
  .6,
  {
    x: -208,
    delay: 1,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_1 = TweenMax
.to(
  showcaseImgs[1],
  .6,
  {
    alpha: 1,
    y: 50,
    x: -54,
    delay: 1,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_2 = TweenMax
.to(
  showcaseImgs[2],
  .6,
  {
    alpha: 1,
    y: 50,
    x: 54,
    delay: 1,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_3 = TweenMax
.to(
  showcaseImgs[3],
  .6,
  {
    alpha: 1,
    y: 106,
    x: 112,
    delay: 1,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_4 = TweenMax
.to(
  showcaseImgs[4],
  .6,
  {
    alpha: 1,
    y: 128,
    x: 170,
    delay: 1,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_5 = TweenMax
.to(
  showcaseImgs[5],
  .6,
  {
    alpha: 1,
    y: 146,
    x: 230,
    delay: 1,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_6 = TweenMax
.to(
  showcaseImgs[6],
  .6,
  {
    alpha: 1,
    y: 164,
    x: 292,
    delay: 1,
    ease: Linear.easeNone
  }
);

const tween_showcase_text_1 = new TimelineMax()
.to(
  showcaseDots[0],
  .2,
  {
    alpha: 1,
    delay: 1.6,
    ease: Linear.easeNone
  }
)
.to(
  showcaseDots[1],
  .2,
  {
    alpha: 1,
    delay: 1.6,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseDots[2],
  .2,
  {
    alpha: 1,
    delay: 1.6,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseDots[3],
  .2,
  {
    alpha: 1,
    delay: 1.6,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[0],
  .2,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 1.6,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[1],
  .2,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 1.6,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[2],
  .2,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 1.6,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[3],
  .2,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 1.6,
    ease: Linear.easeNone
  }, 0
)
.addLabel("showSpan")
.to(
  showcaseSpans[0],
  .2,
  {
    alpha: 1,
    delay: 0,
    ease: Linear.easeNone
  }, "showSpan-=0.1"
)
.to(
  showcaseSpans[1],
  .2,
  {
    alpha: 1,
    delay: 0,
    ease: Linear.easeNone
  }, "showSpan-=0.1"
)
.to(
  showcaseSpans[2],
  .2,
  {
    alpha: 1,
    delay: 0,
    ease: Linear.easeNone
  }, "showSpan-=0.1"
)
.to(
  showcaseSpans[3],
  .2,
  {
    alpha: 1,
    delay: 0,
    ease: Linear.easeNone
  }, "showSpan-=0.1"
)
.eventCallback("onComplete", function() {
  tween_points.play(1);
})



// .eventCallback("onRepeat", function() {
//   $(".points").removeClass('on');
// });

const tween_points = new TimelineMax({paused:true})
.staggerFromTo('.points__button', 0.4,
{
  backgroundColor: "#000"
},
{
  backgroundColor: "#dc143c",
  rotation: 360
},
0.3
);


// tween_showcase_text_1.eventCallback("onComplete", function() {
//   $(".points").addClass('on');
// });

// tween_showcase_img_6.eventCallback("onComplete", function() {
//   $(".sc-path").addClass('on');
// });


const tween_showcase_spacer = TweenMax
.from (
  '.showcase__spacer',
  2.6,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
)



// 1. 비주얼 - 물속으로 들어가기!
const visualSection = document.querySelector("#visual");
const batterySection = document.querySelector("#battery");
const visualPlayer = document.querySelector("#player");
const showcase = document.querySelector("#showcase");

const scene_visual = new ScrollMagic.Scene({
  triggerElement: visualSection,
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(visualSection, {pushFollowers: false}) // 비주얼 섹션 고정
.setTween([ // 트윈 지정
  tween_visual_text,
  tween_visual_video
])
// .addTo(controller)
.addIndicators({
  name: "비주얼 씬 트리거"
})
.setClassToggle(batterySection, 'is-hidden') // 배터리 섹션 숨김
.on("progress", function (e) {
  visualPlayer.style.transform = `translateZ(${(e.progress)*10}rem)`;
})

// 2. 배터리 - 쇼케이스!
const scene_showcase = new ScrollMagic.Scene({
  triggerElement: showcase,
  triggerHook: 0,
  duration: "300%"
})
.setPin(showcase)
.setTween([
  tween_showcase_title,
  tween_showcase_img,
  tween_showcase_img_all,
  tween_showcase_img_1,
  tween_showcase_img_2,
  tween_showcase_img_3,
  tween_showcase_img_4,
  tween_showcase_img_5,
  tween_showcase_img_6,
  tween_showcase_text_1,
  tween_showcase_spacer
])
.addTo(controller)
.addIndicators({
  name: "쇼케이스 씬 트리거"
})

// 배터리 - 포인트!
// const scene_points = new ScrollMagic.Scene({
//   triggerElement: batteryPoints,
//   triggerHook: "0.8",
//   duration: "100%"
// })
// .setTween([
//   tween_points
// ])
// .addTo(controller)
// .addIndicators({
//   name: "포인츠 씬 트리거"
// })

// . 어플리케이션 - 멀리서 두둥!

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
