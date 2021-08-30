/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-08-30 21:56:52
 * -----------------------------------------------
 */

console.log("ui.js");

var winH = $(window).height();
// $('section').css('height', winH);



const visualSection = document.querySelector("#visual");
const batterySection = document.querySelector("#battery");
const appSection = document.querySelector("#app");
const visualPlayer = document.querySelector("#player");
const showcase = document.querySelector("#showcase");
const showcaseTitle = document.querySelector(".showcase__title");
const showcaseMain = document.querySelector(".showcase__main");
const showcaseImgs = document.querySelectorAll(".showcase__img");
const showcaseSpans = document.querySelectorAll(".sc-span");
const showcasePaths = document.querySelectorAll(".sc-path");
const showcaseDots = document.querySelectorAll(".sc-dot");
const batteryPoints = document.querySelector(".points");
const ess = document.querySelector(".ess");
const essImg = document.querySelector(".ess__img");
const essImgShadow = document.querySelector(".ess__img-shadow");

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
    .8, {
      alpha: 0,
      ease: Linear.easeNone
    }
  );

// 비주얼 - 비디오
const tween_visual_video = TweenMax
  .to(
    '.visual__player',
    .8, {
      alpha: 0,
      ease: Linear.easeNone
    }
  );


// 쇼케이스 - 타이틀
const tween_showcase_title = TweenMax
  .from(
    showcaseTitle,
    .4, {
      alpha: 0,
      ease: Linear.easeNone
    }
  );

const tween_showcase_img = TweenMax
  .from(
    showcaseMain,
    .4, {
      alpha: 0,
      delay: .2,
      ease: Linear.easeNone
    }
  );

const tween_showcase_img_all = new TimelineMax()
  .fromTo(
    showcaseImgs[0],
    .4, {
      scale: 1.3
    }, {
      scale: 1,
      delay: .8,
      ease: Linear.easeNone
    }
  )
  .to(
    showcaseImgs[0],
    .4, {
      x: -208,
      scale: 1,
      delay: 0,
      ease: Linear.easeNone
    }
  );

const tween_showcase_img_1 = new TimelineMax()
  .to(
    showcaseImgs[1],
    .4, {
      alpha: 1,
      y: 50,
      x: -54,
      delay: 1.3,
      ease: Linear.easeNone
    }
  )
  .to(
    showcaseImgs[2],
    .4, {
      alpha: 1,
      y: 50,
      x: 54,
      delay: 1.3,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseImgs[3],
    .4, {
      alpha: 1,
      y: 106,
      x: 112,
      delay: 1.3,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseImgs[4],
    .4, {
      alpha: 1,
      y: 128,
      x: 170,
      delay: 1.3,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseImgs[5],
    .4, {
      alpha: 1,
      y: 146,
      x: 230,
      delay: 1.3,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseImgs[6],
    .4, {
      alpha: 1,
      y: 164,
      x: 292,
      delay: 1.3,
      ease: Linear.easeNone
    }, 0
  );

const timing = '.4';
const tween_showcase_text_1 = new TimelineMax()
  .to(
    showcaseDots[0],
    timing, {
      alpha: 1,
      delay: 2,
      ease: Linear.easeNone
    }
  )
  .to(
    showcaseDots[1],
    timing, {
      alpha: 1,
      delay: 2.4,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseDots[2],
    timing, {
      alpha: 1,
      delay: 2.8,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseDots[3],
    timing, {
      alpha: 1,
      delay: 3.2,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcasePaths[0],
    timing, {
      alpha: 1,
      strokeDashoffset: 0,
      delay: 2,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcasePaths[1],
    timing, {
      alpha: 1,
      strokeDashoffset: 0,
      delay: 2.4,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcasePaths[2],
    timing, {
      alpha: 1,
      strokeDashoffset: 0,
      delay: 2.8,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcasePaths[3],
    timing, {
      alpha: 1,
      strokeDashoffset: 0,
      delay: 3.2,
      ease: Linear.easeNone
    }, 0
  )
  .addLabel("showSpan")
  .to(
    showcaseSpans[0],
    .3, {
      alpha: 1,
      delay: 2.2,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseSpans[1],
    .3, {
      alpha: 1,
      delay: 2.6,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseSpans[2],
    .3, {
      alpha: 1,
      delay: 3,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    showcaseSpans[3],
    .3, {
      alpha: 1,
      delay: 3.4,
      ease: Linear.easeNone
    }, 0
  )
  .to(
    '.showcase__spacer',
    .3, {
      alpha: 0,
      ease: Linear.easeNone
    }
  )

// const tween_app_title = TweenMax
// .from(
//   '.ess__title',
//   .5,
//   {
//     alpha: 0,
//     ease: Linear.easeNone
//   }
// );

// const tween_ess = new TimelineMax()
// .fromTo(
//   '.ess__img',
//   .7,
//   {
//     scale: 0.5,
//     alpha: 0,
//   },
//   {
//     scale: 1,
//     alpha: 1,
//     delay: .5,
//     ease: Linear.easeNone
//   }, 0
// )
// .from(
//   '.ess__title',
//   .4,
//   {
//     alpha: 0,
//     y: 40,
//     delay: 1,
//   }
// )
// .from(
//   '.ess__info',
//   .4,
//   {
//     alpha: 0,
//     y: 20,
//     delay: 0,
//   }
// )
// .to(
//   '.ess__img',
//   .6,
//   {
//     x: -40,
//     delay: 2,
//   }, 0
// )
// .from(
//   '.ess__img-shadow',
//   .6,
//   {
//     alpha: 0,
//     x: -40,
//     y: 10,
//     delay: 2,
//   }, 0
// )
// .to (
//   '.ess__spacer',
//   1,
//   {
//     alpha: 0,
//     ease: Linear.easeNone
//   }
// )


// const tween_parallax = TweenMax
// .to (
//   ess,
//   .6,
//   {
//     y: "-100%"
//   }
// )







// 1. 비주얼 - 물속으로 들어가기!
const scene_visual = new ScrollMagic.Scene({
    triggerElement: visualSection,
    triggerHook: "onLeave",
    duration: "100%"
  })
  .setPin(visualSection, {
    pushFollowers: false
  }) // 비주얼 섹션 고정
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
    tween_showcase_text_1,
    // tween_parallax
  ])
  .addTo(controller)
  .addIndicators({
    name: "쇼케이스 씬 트리거"
  })
  .on("end", function (event) {
    $(".points__button").toggleClass("on");
  })


// 3. 어플리케이션 - 패럴렉싱!
const scene_app_pallax = new ScrollMagic.Scene({
    triggerElement: ess,
    triggerHook: "onEnter",
    duration: "100%",
    // offset: "-50"
  })
  .setPin(ess, {
    pushFollowers: false
  }) // 비주얼 섹션 고정

  // .addTo(controller)
  .addIndicators({
    name: "패럴렉스 씬 트리거"
  })

// 3. 어플리케이션 - !
const scene_app = new ScrollMagic.Scene({
    triggerElement: ess,
    triggerHook: "onStart",
    duration: "100%",
    // offset: "50%"
  })
  .setTween([ // 트윈 지정
    // tween_app_title,
    // tween_ess,
  ])
  // .addTo(controller)
  .addIndicators({
    name: "APP 씬 트리거"
  })

// const tween_slide5 = new TimelineMax({
//     paused: true
//   })
//   .from(
//     '#slide4',
//     .6, {
//       x: "-100%"
//     }, {
//       x: 0
//     }
//   )

// const tween_slide4 = new TimelineMax({
//     paused: true
//   })
//   .from(
//     '#slide4',
//     .6, {
//       x: "-100%"
//     }, {
//       x: 0
//     }
//   )

// const tween_slide3 = new TimelineMax({
//     paused: true
//   })
//   .from(
//     '#slide3',
//     .6, {
//       x: "-100%"
//     }, {
//       x: 0
//     }
//   )

// const tween_slide2 = new TimelineMax({
//     paused: true
//   })
//   .from(
//     '#slide2',
//     .6, {
//       x: "-100%"
//     }, {
//       x: 0
//     }
//   )

// const tween_slide1 = new TimelineMax({
//     paused: true
//   })
//   .from(
//     '#slide1',
//     .6, {
//       x: "-100%"
//     }, {
//       x: 0
//     }
//   )


// *****************************


// new ScrollMagic.Scene({
//   triggerElement: ".articles",
//   triggerHook: "onLeave",
//   duration: "500%"
// })
// .setPin(".articles", {pushFolloxwers: true})
// .addTo(controller)
// .addIndicators({
//   name: "FIXED--"
// })


// new ScrollMagic.Scene({
//   triggerElement: "#tg2",
//   triggerHook: "onStart"
// })
// .addTo(controller)
// .addIndicators({
//   name: "트리거2"
// })

// *****************************



/// 클릭 시 이동
controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.5, { scrollTo: { y: newpos } });
});
$(".footer__top").on("click", function (e) {
  e.preventDefault();
  controller.scrollTo(0);
});

$(".header__menu-link").on("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href").split("#")[1];
  controller.scrollTo(`#${target}`);

  if (target === "battery") {

  }
});


// 한영 판단 //하드코딩..
// if ( document.documentElement.lang.toLowerCase() === "en" ) {
//   $(".lang-en").addClass("is-active");
// } else {
//   $(".lang-ko").addClass("is-active");
// };
