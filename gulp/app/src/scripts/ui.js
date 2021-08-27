
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
  .8,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);

// 비주얼 - 비디오
const tween_visual_video = TweenMax
.to(
  '.visual__player',
  .8,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);


// 쇼케이스 - 타이틀
const tween_showcase_title = TweenMax
.from(
  showcaseTitle,
  .4,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
);

const tween_showcase_img = TweenMax
.from(
  showcaseMain,
  .4,
  {
    alpha: 0,
    delay: .2,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_all = new TimelineMax()
.fromTo(
  showcaseImgs[0],
  .4,
  {
    scale: 1.3
  },
  {
    scale: 1,
    delay: .8,
    ease: Linear.easeNone
  }
)
.to(
  showcaseImgs[0],
  .4,
  {
    x: -208,
    scale: 1,
    delay: 0,
    ease: Linear.easeNone
  }
);

const tween_showcase_img_1 = new TimelineMax()
.to(
  showcaseImgs[1],
  .4,
  {
    alpha: 1,
    y: 50,
    x: -54,
    delay: 1.3,
    ease: Linear.easeNone
  }
)
.to(
  showcaseImgs[2],
  .4,
  {
    alpha: 1,
    y: 50,
    x: 54,
    delay: 1.3,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseImgs[3],
  .4,
  {
    alpha: 1,
    y: 106,
    x: 112,
    delay: 1.3,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseImgs[4],
  .4,
  {
    alpha: 1,
    y: 128,
    x: 170,
    delay: 1.3,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseImgs[5],
  .4,
  {
    alpha: 1,
    y: 146,
    x: 230,
    delay: 1.3,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseImgs[6],
  .4,
  {
    alpha: 1,
    y: 164,
    x: 292,
    delay: 1.3,
    ease: Linear.easeNone
  }, 0
);

const timing = '.4',
const tween_showcase_text_1 = new TimelineMax()
.to(
  showcaseDots[0],
  timing,
  {
    alpha: 1,
    delay: 2,
    ease: Linear.easeNone
  }
)
.to(
  showcaseDots[1],
  timing,
  {
    alpha: 1,
    delay: 2.4,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseDots[2],
  timing,
  {
    alpha: 1,
    delay: 2.8,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseDots[3],
  timing,
  {
    alpha: 1,
    delay: 3.2,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[0],
  timing,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 2,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[1],
  timing,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 2.4,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[2],
  timing,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 2.8,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcasePaths[3],
  timing,
  {
    alpha: 1,
    strokeDashoffset: 0,
    delay: 3.2,
    ease: Linear.easeNone
  }, 0
)
.addLabel("showSpan")
.to(
  showcaseSpans[0],
  .3,
  {
    alpha: 1,
    delay: 2.2,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseSpans[1],
  .3,
  {
    alpha: 1,
    delay: 2.6,
    ease: Linear.easeNone
  },0
)
.to(
  showcaseSpans[2],
  .3,
  {
    alpha: 1,
    delay: 3,
    ease: Linear.easeNone
  }, 0
)
.to(
  showcaseSpans[3],
  .3,
  {
    alpha: 1,
    delay: 3.4,
    ease: Linear.easeNone
  }, 0
)
.to (
  '.showcase__spacer',
  .3,
  {
    alpha: 0,
    ease: Linear.easeNone
  }
)



// .eventCallback("onRepeat", function() {
//   $(".points").removeClass('on');
// });


// tween_showcase_text_1.eventCallback("onComplete", function() {
//   $(".points").addClass('on');
// });

// tween_showcase_img_6.eventCallback("onComplete", function() {
//   $(".sc-path").addClass('on');
// });





// 1. 비주얼 - 물속으로 들어가기!
const visualSection = document.querySelector("#visual");
const batterySection = document.querySelector("#battery");
const appSection = document.querySelector("#app");
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
.addTo(controller)
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
  duration: "260%",
  // reverse:false,
})
.setPin(showcase)
.setTween([
  tween_showcase_title,
  tween_showcase_img,
  tween_showcase_img_all,
  tween_showcase_img_1,
  // tween_showcase_img_2,
  // tween_showcase_img_3,
  // tween_showcase_img_4,
  // tween_showcase_img_5,
  // tween_showcase_img_6,
  tween_showcase_text_1
])
.addTo(controller)
.addIndicators({
  name: "쇼케이스 씬 트리거"
})
.on("end", function (event) {
  $(".points__button").toggleClass("on");
})

// function test() {
//   scene_visual.removePin(true);
//   scene_visual.reverse(false);
// }

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



// IntersectionObserver 를 등록한다.
const options = {
  root: null,
  threshold: 0
}
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.intersectionRatio);
    // 관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('on');
      test();
    }
    // 그 외의 경우 'tada' 클래스 제거
    else {
      entry.target.classList.remove('on');
    }
  })
},options)

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.points__button');
boxElList.forEach((el) => {
  // io.observe(el);
})

// io.observe(appSection);
