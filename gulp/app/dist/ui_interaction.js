/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-07 17:40:48
 * -----------------------------------------------
 */

// VARIABLES
let headerHeight;
var showcaseImgs = document.querySelectorAll(".showcase__img");
var showcaseSpans = document.querySelectorAll(".sc-span");
var showcaseSpans_M = document.querySelectorAll(".sc-span-mo");
var showcasePaths = document.querySelectorAll(".sc-path");
var showcaseDots = document.querySelectorAll(".sc-dot");
var showcasePoints = document.querySelectorAll(".points__button");

// 반응형에 따른 헤더 높이 계산
function getheaderHeight() {
  if(isTabletSize()) {
    headerHeight = 68;
  } else {
    headerHeight = 100;
  }
  console.log(headerHeight);
  return headerHeight;
}

gsap.delayedCall( 1.0, function() {
	ScrollTrigger.refresh();
});

// SVG 길이 계산
function pathPrepare(el) {
  var lineLength = el.getTotalLength();
  console.log(lineLength);
  el.style.strokeDasharray = lineLength + 10;
  el.style.strokeDashoffset = lineLength + 10;
}

showcasePaths.forEach(function (e) {
  pathPrepare(e);
});

// 네비용 각 스크롤 위치 계산
function getScrollPos(animation, trigger){
  var percent = animation.labels["jump"] / animation.totalDuration();
  var myST = trigger;
  var scrollPos = (myST.start + (myST.end - myST.start) * percent);
  return scrollPos;
}


$(".header__logo-link").on("click", function (e) {
  e.preventDefault();
  gsap.to(window, 1, {scrollTo: 0});
});

$(".footer__top").on("click", function (e) {
  e.preventDefault();
  gsap.to(window, 1, {scrollTo: 0});
});

$(".header__menu-link").on("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href").split("#")[1];

  if (target === "battery") {
    gsap.to(window, {scrollTo: getScrollPos(sc_img, battery_animation.scrollTrigger)});
  }
  if (target === "app") {
    // gsap.to(window, {scrollTo: getScrollPos(ess_img, ess_img.scrollTrigger)});
    gsap.to(window, {scrollTo: {y: "#app", offsetY: getheaderHeight()}});
  }
  if (target === "contact") {
    gsap.to(window, {scrollTo: {y: "#contact", offsetY: getheaderHeight()}});
  }

  if ($(".header").hasClass('is-opened')) {
    $('.header').removeClass('is-opened');
  }
});



// * ----- VISUAL
const visualPlayer = document.querySelector("#player");
const visual_animation = gsap.timeline({
  scrollTrigger: {
    trigger: '.visual',
    scrub: 1,
    start: "0 0"
  }
});
visual_animation
  .to(".visual__text", { opacity: 0, duration: .5 })
  .to(".visual__player",{ z: 80, duration: 1 }, 0)
  .to(".visual__player",{ opacity: 0, duration: .6 }, 0);



// * ----- BATTERY

const sc_title = gsap.timeline();
sc_title.from(".sc-title-1", { opacity: 0, y: 100 }, 0)
sc_title.from(".sc-title-2", { opacity: 0, y: 100, delay: 0.2 }, 0)



ScrollTrigger.matchMedia({
  "( min-width: 1024px )": function() {

  const sc_img = gsap.timeline();
  sc_img
  .addLabel("start")
  .from( showcaseImgs[0], { opacity: 0, y: 50, duration: .9 })
  .addLabel("show_0")
  .fromTo( showcaseImgs[0],{ scale: 1.3 }, { scale: 1, x: -208 })
  .from( showcaseDots[0], { opacity: 0, } )
  .to( showcasePaths[0], { opacity: 1, strokeDashoffset: 0, }, "-=0.3")
  .from( showcaseSpans[0], { opacity: 0, x: 10 }, "-=0.2" )
  .addLabel("show_1")
  .from( showcaseImgs[1], { opacity: 0, y: 0, x: -20 }, "-=0.6" )
  .from( showcaseDots[1],{ opacity: 0 }, "-=0.3" )
  .to( showcasePaths[1],{ opacity: 1,strokeDashoffset: 0 }, "-=0.3")
  .from( showcaseSpans[1],{ opacity: 0, x: -10 }, "-=0.2" )
  .addLabel("show_2")
  .from( showcaseImgs[2],{ opacity: 0, y: 0, x: -40 }, "-=0.6" )
  .from( showcaseDots[2],{ opacity: 0 }, "-=0.3" )
  .to( showcasePaths[2],{ opacity: 1, strokeDashoffset: 0 }, "-=0.3")
  .from( showcaseSpans[2],{ opacity: 0, x: -10 }, "-=0.2" )
  .addLabel("show_3")
  .from(showcaseDots[3],{ opacity: 0 }, "-=0.3" )
  .to(showcasePaths[3],{ opacity: 1, strokeDashoffset: 0 }, "-=0.3")
  .from(showcaseImgs[3],{ opacity: 0, y: 0, x: -60 }, "-=0.6" )
  .from(showcaseSpans[3],{ opacity: 0, x: 10 }, "-=0.2" )
  .addLabel("show_4")
  .from(showcaseImgs[4],{ opacity: 0, y: 0, x: -80 }, "-=0.4")
  .addLabel("show_5")
  .from(showcaseImgs[5],{ opacity: 0, y: 0, x: -100 }, "-=0.4")
  .addLabel("show_6")
  .from(showcaseImgs[6],{ opacity: 0, y: 0, x: -120 }, "-=0.4")
  .addLabel("jump")
  .addLabel("points")
  .set(".points__list", { className: "points__list on"}, "-=0.2" );

    var battery_animation = gsap.timeline({
      scrollTrigger: {
        trigger: '.showcase',
        scrub: 1,
        pin: true,
        start: () => "0 " + getheaderHeight(),
        end: "bottom -=40%",
        invalidateOnRefresh: true,
      }
    });

    ScrollTrigger.create({
      animation: sc_title,
      trigger: '.showcase__title',
      scrub: 1,
      start: "top 80%",
      end: "bottom 60%",
      ease: "back(2)"
    });


    ScrollTrigger.create({
      animation: sc_img,
      trigger: '.showcase__main',
      scrub: 1,
      start: "top 70%",
      end: "bottom -=20%",
    });


    // const sc_img = gsap.timeline({
    //   scrollTrigger: {
    //     markers: {startColor: "#a3017a", endColor: "#d9ba00", fontSize: "18px"},
    //     trigger: '.showcase__main',
    //     scrub: 1,
    //     start: "top 90%",
    //     end: "bottom -=10%",
    //   }
    // });







  },
  "( max-width: 1024px )": function() {

  const sc_img_m = gsap.timeline();
  sc_img_m
  .addLabel("start")
  .from( showcaseImgs[0], { opacity: 0, y: 50, duration: .9 })
  .addLabel("show_0")
  .fromTo( showcaseImgs[0],{ scale: 1.3 }, { scale: 1, x: -208 })
  .from( showcaseImgs[1], { opacity: 0, y: 0, x: -20, duration: 0.4}, )
  .from( showcaseImgs[2],{ opacity: 0, y: 0, x: -40, duration: 0.4}, "-=0.35" )
  .from( showcaseImgs[3],{ opacity: 0, y: 0, x: -60, duration: 0.4}, "-=0.35" )
  .from(showcaseImgs[4],{ opacity: 0, y: 0, x: -80, duration: 0.4}, "-=0.35")
  .from(showcaseImgs[5],{ opacity: 0, y: 0, x: -100, duration: 0.4}, "-=0.35")
  .from(showcaseImgs[6],{ opacity: 0, y: 0, x: -120, duration: 0.4}, "-=0.35")
  .from( showcaseSpans_M[0], { opacity: 0, x: 10, duration: 0.6 }, "-=0.3" )
  .from( showcaseSpans_M[1], { opacity: 0, x: 10, duration: 0.6  }, "-=0.35" )
  .from( showcaseSpans_M[2], { opacity: 0, x: 10, duration: 0.6  }, "-=0.35" )
  .from( showcaseSpans_M[3], { opacity: 0, x: 10, duration: 0.6  }, "-=0.35" );

  const sc_span_m = gsap.timeline();
  // sc_span_m
  // .from( showcaseSpans_M[0], { opacity: 0, x: 10,  }, "-=0.3" )
  // .from( showcaseSpans_M[1], { opacity: 0, x: 10,  }, "-=0.35" )
  // .from( showcaseSpans_M[2], { opacity: 0, x: 10,  }, "-=0.35" )
  // .from( showcaseSpans_M[3], { opacity: 0, x: 10,  }, "-=0.35" );

  // const sc_points_m = gsap.timeline();
  // sc_points_m
  // .from( showcasePoints[0], {autoAlpha: 0, y: -100} )
  // .addLabel("jump")
  // .addLabel("points")
  // .set(".points__list", { className: "points__list on"}, "-=0.2" );


    ScrollTrigger.create({
      animation: sc_title,
      // markers: true,
      trigger: ".showcase",
      start: "top 50%",
      end: "bottom 60%",
      ease: "back(2)",
      toggleActions: 'play none play none',
      once: true,
      // toggleActions: 'play reverse play reverse',
    });


    ScrollTrigger.create({
      animation: sc_img_m,
      // markers: {startColor: "gold", endColor: "gold", fontSize: "18px"},
      trigger: ".showcase__main",
      start: "top 60%",
      end: "-=240%",
      ease: "back(2)",
      toggleActions: 'play none play none',
      once: true,
      // onEnter: () => {
      //   sc_img_m.timeScale(1.1).play();
      //   console.log('enter')
      // },
      // toggleActions: 'play reverse play reverse',
    });
    ScrollTrigger.create({
      animation: sc_img_m,
      // markers: {startColor: "purple", endColor: "purple", fontSize: "18px"},
      trigger: ".showcase",
      start: "top 50%",
      ease: "back(2)",
      // onEnter: () => {
      //   sc_img_m.timeScale(1.1);
      //   console.log('enter')
      // },
      // onLeaveBack: () => {
      //   sc_img_m.timeScale(5.0).reverse();
      //   console.log('Leave back')
      // },
      toggleActions: 'play none play none',
      once: true,
      // toggleActions: 'none reverse none reverse',
    });

    // ScrollTrigger.create({
    //   markers: true,
    //   animation: sc_span_m,
    //   trigger: ".showcase__guide-mobile",
    //   start: "top 70%",
    //   // end: "bottom -=100%",
    //   ease: "back(2)",
    //   // toggleActions: 'play none play none',
    //   once: true,
    //   onEnter: () => {
    //     sc_span_m.timeScale(1.0).play();
    //     console.log('enter')
    //   },
    //   // toggleActions: 'play reverse play reverse',
    //   // onEnter: () => sc_span_m.play(0)
    // });

    // ScrollTrigger.create({
    //   animation: sc_span_m,
    //   trigger: ".showcase",
    //   start: "top 50%",
    //   end: 'bottom -=100%',
    //   onEnter: () => {
    //     sc_span_m.timeScale(1.0);
    //     console.log('enter')
    //   },
    //   onLeaveBack: () => {
    //     sc_span_m.timeScale(5.0).reverse();
    //     console.log('Leave back')
    //   },
    //   toggleActions: 'none reverse none reverse',
    // });


    ScrollTrigger.create({
      trigger: ".points",
      start: "top 80%",
      end: 'bottom -=100%',
      onEnter: () => $(".points__list").addClass("on"),
      once: true,
    });

    // ScrollTrigger.create({
    //   trigger: ".showcase",
    //   start: "top 50%",
    //   onLeaveBack: () => $(".points__list").removeClass("on")
    //   // toggleClass: 'on',
    //   // once: true,
    // });



  }
});





// * ----- ESS

// [TODO:] ess 영역 고정할지?
// var ess_animation = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.ess',
//     scrub: 1,
//     pin: true,
//     start: () => "0 " + getheaderHeight(),
//     end: "bottom 20%",
//   }
// });

var ess_title = gsap.timeline();
ess_title.from(".ess__title", { opacity: 0, y: 100, duration: 0.5 })
ess_title.from(".ess__info", { opacity: 0, y: 100, delay: 0.2},0 )

ScrollTrigger.matchMedia({
  "( min-width: 1024px )": function() {
    ScrollTrigger.create({
      animation: ess_title,
      trigger: '.ess__title',
      scrub: 1,
      end: "bottom 50%",
      ease: "back(2)",
    });
  },
  "( max-width: 1024px )": function() {

    ScrollTrigger.create({
      animation: ess_title,
      // markers: true,
      trigger: ".ess",
      start: "top 60%",
      ease: "back(2)",
      // toggleActions: 'play none play none',
      // once: true,
      toggleActions: 'play reverse play reverse',
    });

  }
});


var ess_img = gsap.timeline();
ess_img.from(".ess__img", { z:-100, x: 40, y:20, duration: 1.2, ease: "power1.inOut"})
ess_img.from(".ess__img-shadow", { opacity: 0, x: -90, y: 28, delay: 0.2,duration: 1,  ease:Linear.easeNone},0)
ess_img.addLabel("jump");
ScrollTrigger.create({
  markers: {startColor: "#a3017a", endColor: "#d9ba00", fontSize: "18px"},
  animation: ess_img,
  trigger: '.ess__main',
  // scrub: 1,
  start: "top 70%",
  end: "bottom +=60%",
  toggleActions: 'play none play none',
});
ScrollTrigger.create({
  markers: {startColor: "#a3017a", endColor: "#d9ba00", fontSize: "18px"},
  animation: ess_img,
  trigger: '.ess',
  // scrub: 1,
  start: "top 50%",
  end: "bottom +=60%",
  // once: true,
  toggleActions: 'play none none reverse',
});

ess_title.from(".ess", {
  backgroundSize: "130% 130%",
  backgroundPosition: "45% 15%",
  ease: Sine.easeOut,
  duration: 1.5,
},0)


// * ----- ARTICLE

var articles_animation = gsap.timeline();
ScrollTrigger.create({
  id: '아티클',
  markers: {startColor: "#e87134", endColor: "#d6ab93", fontSize: "22px"},
  trigger: '.article',
  animation: articles_animation,
  pin: true,
  scrub: 1,
  start: () => "0 " + getheaderHeight(),
  end: "bottom -=100%",
  ease: "quart.inOut"
});

articles_animation.to("#at-bg1", { opacity: 1, x: 0, duration: 1.5 }, 'first')
articles_animation.to("#at-main0", { opacity: 0, x: 0, duration: 0.4 }, 'first' )
articles_animation.to("#at-main1", { opacity: 1, x: 0, duration: 0.4 },  'first+=0.4' )
articles_animation.to("#at-bg2", { opacity: 1, x: 0,  duration: 1.5  }, 'second' )
articles_animation.to("#at-main1", { opacity: 0, x: 0, duration: 0.4 }, 'second' )
articles_animation.to("#at-main2", { opacity: 1, x: 0, duration: 0.4 },  'second+=0.4' )
articles_animation.to("#at-bg3", { opacity: 1, x: 0,  duration: 1.5  }, 'third' )
articles_animation.to("#at-main2", { opacity: 0, x: 0, duration: 0.4 }, 'third' )
articles_animation.to("#at-main3", { opacity: 1, x: 0, duration: 0.4 },  'third+=0.4' )
articles_animation.to("#at-bg4", { opacity: 1, x: 0,  duration: 1.5  }, '4' )
articles_animation.to("#at-main3", { opacity: 0, x: 0, duration: 0.4 }, '4' )
articles_animation.to("#at-main4", { opacity: 1, x: 0, duration: 0.4 },  '4+=0.4' )
articles_animation.to("#at-bg5", { opacity: 1, x: 0,  duration: 1.5  }, '5' )

const sections = gsap.utils.toArray(".marker");

var marker__battery = gsap.timeline({
  scrollTrigger: {
    trigger: '.marker-battery',
    id: 'BATTERY!',
    // markers: {startColor: "#13a4a0", endColor: "#bb4214", fontSize: "58px"},
    start: "top top+=100px",
    // endTrigger:"html",
    end:"bottom top+=100px",
    toggleActions: "play reverse play reverse",
    toggleClass: {targets: ".header__nav a[href$='battery']", className: "is-active"}
  }
});


var marker__app = gsap.timeline({
  scrollTrigger: {
    trigger: '.marker-app',
    id: 'APP!',
    // markers: {startColor: "#13a4a0", endColor: "#bb4214", fontSize: "58px"},
    start: "top top+=100px",
    // endTrigger:"html",
    end:"bottom top+=100px",
    toggleActions: "play reverse play reverse",
    toggleClass: {targets: ".header__nav a[href$='app']", className: "is-active"}
  }
});


var marker__contact = gsap.timeline({
  scrollTrigger: {
    trigger: '.marker-contact',
    id: 'CONTACT!',
    // markers: {startColor: "#13a4a0", endColor: "#bb4214", fontSize: "58px"},
    start: "top top+=100px",
    // endTrigger:"html",
    // end:"bottom bottom",
    // toggleActions: "play reverse play reverse",
    // toggleClass: {targets: ".header__nav a[href$='contact']", className: "is-active"},
    toggleClass: {targets: ".header__nav a[href$='contact']", className: "is-active"}

          // onEnter: () => {
          //   console.log($(".header__nav a[href$='contact']"))
          // },
  }
});




var header = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrap',
    id: 'HEADER!',
    // markers: {startColor: "#13a4a0", endColor: "#bb4214", fontSize: "58px"},
    // endTrigger:"html",
    start: "top top",
    end:"bottom top",
    // toggleActions: "play reverse play reverse",
    // toggleClass: {targets: ".header__nav a[href$='contact']", className: "is-active"},
    toggleClass: {targets: ".header", className: "is-active"}

          // onEnter: () => {
          //   console.log($(".header__nav a[href$='contact']"))
          // },
  }
});









// gsap.to(".visual__title", {
//   scrollTrigger: {
//     id: ' VISUAL 애니메이션',
//     markers: {startColor: "#adff2f", endColor: "#008bb1", fontSize: "18px"},
//     trigger: ".visual",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     start: "0 0",
//     end: "100% 0",
//     ease: "power1.out"
//   },
//   scale: .5,
//   opacity: 0,
//   onUpdate: function() {
//     this.targets().forEach(function(target) {
//       target.style.transform = "perspective(500px) " + target.style.transform.replace(" perspective(500px)", "");
//     });
//   }
// });

// ScrollTrigger.create({
//   id: ' ESS 애니메이션',
//   markers: {startColor: "#adff2f", endColor: "#008bb1", fontSize: "18px"},
//   trigger: ".visual",
//   pin: true,
//   start: "0% 0%",
//   end: "100% 0%",
// });


/*

  markers
  - 화면에 인디케이터 표시
  - id와 결합 가능
  - ex) markers: {startColor: "#adff2f", endColor: "#2fd2ff", fontSize: "18px"}

  start
  - 시작 스크롤 위치(숫자, 픽셀 단위). 창/스크롤 크기 조정될 때마다 재계산됨
  - 요소의 top이 보이면 동작 시작
  - ex) start: "top center"일 때
    top은 객체, center는 페이지를 의미
    따라서 "0 50%"와 동일

  end
  - 스크롤 트리거의 끝 위치.
  - ex) end: "bottom center"일 때 end 트리거가 하단 중앙에 위치하면 종료함
        end: "100% 0%"일 때 end 트리거가 상단에 위치하면 종료함
  - start와 end 트리거는 `+=100%`와 같이 상대적 값 지정 가능

*/

// let speed = 100;

// let scene1 = gsap.timeline();
// gsap.from(".ess__title", {
//   scrollTrigger: {
//     trigger: ".ess",
//     scrub: true,
//     pin: true,
//     start: "center center",
//     end: "bottom -100%",
//     toggleClass: "active",
//     ease: "power2"
//   },
//   transform: 'translateY(50%) scale(1.1)',
//   opacity: 0,
//   y: '50%',
// });

// // ScrollTrigger.create({
// //     animation: scene1,
// //     trigger: ".ess",
// //     start: "top top",
// //     end: "45% 100%",
// //     scrub: 1,
// //     pin: true,
// // });


// scene1.from(".ess__title", { y: 2 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)

// sections.forEach((section, i) => {
//   const active = $(".header__nav a[href$='"+$(section).data('marker')+"']");
//   const sectionTrigger = gsap.timeline({
//     scrollTrigger: {
//       trigger: section,
//       id: $(section).data('marker')+'!!!!!!!!',
//       markers: {startColor: "#13a4a0", endColor: "#bb4214", fontSize: "58px"},
//       start: "top top+=100px",
//       end: "bottom bottom",
//       toggleActions: "play reverse play reverse",
//       onEnter: ({progress, direction, isActive}) => console.log("onEnter:", active, direction),
//       onEnterBack: ({progress, direction, isActive}) => console.log("onEnterBack:",active, direction),
//       onLeave: ({progress, direction, isActive}) => console.log("onLeave:",progress, direction, isActive),
//       onLeaveBack: ({progress, direction, isActive}) => console.log("onLeaveBack:",progress, direction, isActive),
//       onToggle: ({progress, direction, isActive}) => console.log("onToggle:",progress, direction, isActive)


//       // onEnter: () => {
//       //   console.dir(active)
//       //   active.siblings().removeClass("is-active")
//       //   active.addClass("is-active")
//       // },
//       // onEnterBack: () => {
//       //   console.log("onEnterBack", active)
//       //   active.removeClass("is-active")
//       //   active.prev().addClass("is-active")
//       // },
//       // onLeaveBack: () => {
//       //   console.log("onLeaveBack", active)
//       //   active.removeClass("is-active")
//       //   active.prev().addClass("is-active")
//       // },
//       // onLeaveBack: () => {
//       //   console.dir(active)
//       //   active.siblings().removeClass("is-active")
//       //   active.addClass("is-active")
//       // },
//       // onLeave: () => {
//       //   console.dir(active)
//       //   // active.removeClass("ㅁ넝리ㅏㅁ어리ㅏㅁㄴㅇ")
//       // },
//       // toggleClass: {targets: active, className: "ㅁㅁㄴ어리망ㄴ러ㅏㅁㅇㄴ러"}
//     }
//   });
//   sectionTrigger.fromTo(active, {
//     color: '#828282',
//   }, {
//     color: 'black',
//     ease: "sine.out",
//     duration: 0.2,
//   });
// });
