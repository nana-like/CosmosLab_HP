/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-08-31 17:35:08
 * -----------------------------------------------
 */



const visualPlayer = document.querySelector("#player");

var visual_animation = gsap.timeline({
  scrollTrigger: {
    // id: ' VISUAL 애니메이션',
    // markers: {startColor: "#adff2f", endColor: "#008bb1", fontSize: "18px"},
    trigger: '.visual',
    scrub: 1,
    start: "0 0%",
    // end: "100% 50%",
    // pin: true,
    // pinSpacing: false,
    // toggleClass: "is-visible",
    // onUpdate: slef => {
    //   visualPlayer.style.transform = `translateZ(${(e.progress)*10}rem)`;
    //  }
  }
});

visual_animation
  .to(".visual__text", {
    opacity: 0,
    // delay: .2,
    duration: .5,
  })
  .to(".visual__player",{
    z: 80,
    // delay: .4,
    duration: 1,
  }, 0)
  .to(".visual__player",{
    opacity: 0,
    // delay: .6,
    duration: .6,
  }, 0);


var battery_animation = gsap.timeline({
  scrollTrigger: {
    id: ' battery 애니메이션',
    markers: {startColor: "#b0da77", endColor: "#0124b6", fontSize: "18px"},
    trigger: '.battery',
    scrub: 1,
    pin: true,
    // pinSpacing: false,
    // toggleClass: "is-visible",
  }
})


gsap.from(".showcase__title", {
  scrollTrigger: {
    // id: 'showcaseTitle',
    // markers: {startColor: "#28d17a", endColor: "#bb4214", fontSize: "18px"},
    trigger: '.showcase__title',
    scrub: 1,
    start: "top 80%",
    end: "bottom 60%",
    ease: "back(2)"
  },
  opacity: 0,
  y: "20%"
});

gsap.from(".sc-all", {
  scrollTrigger: {
    // id: 'showcaseIMG',
    // markers: {startColor: "#28d17a", endColor: "#bb4214", fontSize: "18px"},
    trigger: '.showcase__main',
    scrub: 1,
    start: "top 70%",
    end: "bottom 50%",
    ease: "back(2)"
  },
  opacity: 0,
  y: 50,
  duration: .9,
});


// var showcase_animation = gsap.timeline({
//   scrollTrigger: {
//     id: 'showcaseTitle',
//     markers: {startColor: "#78a17a", endColor: "#bb4214", fontSize: "18px"},
//     trigger: '.showcase__title',
//     scrub: 1,
//     start: "top 80%",
//     end: "bottom 60%"
//   }
// })

// showcase_animation
//   .from(".showcase__title", {
//     opacity: 0,
//   })


// var speed = 10;
// var ess_animation = gsap.timeline({
//   defaults: {
//     duration: 1,
//     opacity: 0,
//   },
//   scrollTrigger: {
//     // id: ' ESS 애니메이션',
//     // markers: {startColor: "#adff2f", endColor: "#008bb1", fontSize: "18px"},
//     trigger: '.ess',
//     scrub: 1,
//     // pin: true,
//     start:"0 0%",
//     // end: "bottom 70%",
//   }
// });

// ess_animation
//   .from('.ess__title', {
//     y: speed * 5,
//     ease: 'back(2)'
//   })
//   .from('.ess__img', {
//     y: 100,
//     ease: 'back(2)'
//   })












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
