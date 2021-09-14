// VARIABLES
var headerHeight;
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
  return headerHeight;
}

gsap.delayedCall( 1.0, function() {
	ScrollTrigger.refresh();
});

// SVG 길이 계산
function pathPrepare(el) {
  var lineLength = el.getTotalLength();
  el.style.strokeDasharray = lineLength + 10;
  el.style.strokeDashoffset = lineLength + 10;
}

showcasePaths.forEach(function (e) {
  pathPrepare(e);
});


// 비디오 재생 및 정지
var videoElem = document.getElementById("video");
function playVideo() {
  videoElem.play();
}
function pauseVideo() {
  videoElem.pause();
}


// * ----- INTRO
var intro = gsap.timeline();
gsap.set('.visual__title em', {
  opacity: 0,
  y: "100%",
});
gsap.set('.visual__link', {
  opacity: 0
})

function showIntro() {
  intro.to('.visual__title em', {
    ease: "power4",
    y: 0,
    opacity: 1,
    duration: 2.2,
    stagger: 0.3,
    delay: 0.2,
  })
  .to('.visual__link', {
    opacity: 1
  }, '-=1')
}



// * ----- VISUAL
var visualPlayer = document.querySelector("#player");
var visual_animation = gsap.timeline({
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
var sc_title = gsap.timeline();
sc_title.from(".sc-title-1", { opacity: 0, y: 80 }, 0)
sc_title.from(".sc-title-2", { opacity: 0, y: 80, delay: 0.2 }, 0)

gsap.set(showcaseImgs[0], { scale:1.3, opacity: 0, y: 50 });
gsap.set(showcaseImgs[1], { opacity: 0, x: -20 });
gsap.set(showcaseImgs[2], { opacity: 0, x: -40 });
gsap.set(showcaseImgs[3], { opacity: 0, x: -60 });
gsap.set(showcaseImgs[4], { opacity: 0, x: -80 });
gsap.set(showcaseImgs[5], { opacity: 0, x: -100 });
gsap.set(showcaseImgs[6], { opacity: 0, x: -120 });
gsap.set(showcaseSpans[0], { opacity: 0, x: 10 });
gsap.set(showcaseSpans[1], { opacity: 0, x: -10 });
gsap.set(showcaseSpans[2], { opacity: 0, x: -10 });
gsap.set(showcaseSpans[3], { opacity: 0, x: 10 });
gsap.set(showcaseDots[0], { opacity: 0 });
gsap.set(showcaseDots[1], { opacity: 0 });
gsap.set(showcaseDots[2], { opacity: 0 });
gsap.set(showcaseDots[3], { opacity: 0 });

var sc_img = gsap.timeline();
var sc_img_m = gsap.timeline();
var battery_animation;
var sc_img_trigger;

ScrollTrigger.matchMedia({
  //PC
  "( min-width: 1024px )": function() {
    sc_img
    .addLabel("start")
    .to(showcaseImgs[0], { opacity: 1, y: 0, duration: .9 })
    .addLabel("show_0")
    .fromTo(showcaseImgs[0],{ scale: 1.3 }, { scale: 1, x: -208 })
    .to(showcaseImgs[1], { opacity: 1, x: 0, duration: 0.4}, )
    .to(showcaseImgs[2],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35" )
    .to(showcaseImgs[3],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35" )
    .to(showcaseImgs[4],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35")
    .to(showcaseImgs[5],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35")
    .to(showcaseImgs[6],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35")
    .set(".points__list", { className: "points__list on"}, "-=0.3" )
    .addLabel("jump");
    // .addLabel("start")
    // .to( showcaseImgs[0], { opacity: 1, y: 0, duration: .9 })
    // .addLabel("show_0")
    // .to( showcaseImgs[0], { scale: 1, x: -208 })
    // .to( showcaseDots[0], { opacity: 1, } )
    // .set( showcaseDots[0], { className: "sc-dot is-active"}, "-=0.3")
    // .to( showcasePaths[0], { opacity: 1, strokeDashoffset: 0, }, "-=0.3")
    // .to( showcaseSpans[0], { opacity: 1, x: 0 }, "-=0.2" )
    // .set( showcaseDots[0], { className: "sc-dot"})
    // .addLabel("show_1")
    // .to( showcaseImgs[1], { opacity: 1, y: 0, x: 0 }, "-=0.6" )
    // .to( showcaseDots[1],{ opacity: 1 }, "-=0.3" )
    // .set( showcaseDots[1], { className: "sc-dot is-active"}, "-=0.3")
    // .to( showcasePaths[1],{ opacity: 1,strokeDashoffset: 0 }, "-=0.3")
    // .to( showcaseSpans[1],{ opacity: 1, x: 0 }, "-=0.2" )
    // .set( showcaseDots[1], { className: "sc-dot"})
    // .addLabel("show_2")
    // .to( showcaseImgs[2],{ opacity: 1, x: -0 }, "-=0.6" )
    // .to( showcaseDots[2],{ opacity: 1 }, "-=0.3" )
    // .to( showcasePaths[2],{ opacity: 1, strokeDashoffset: 0 }, "-=0.3")
    // .set( showcaseDots[2], { className: "sc-dot is-active"}, "-=0.3")
    // .to( showcaseSpans[2],{ opacity: 1, x: 0 }, "-=0.2" )
    // .set( showcaseDots[2], { className: "sc-dot"})
    // .addLabel("show_3")
    // .to(showcaseDots[3],{ opacity: 1 }, "-=0.3" )
    // .to(showcasePaths[3],{ opacity: 1, strokeDashoffset: 0 }, "-=0.3")
    // .set( showcaseDots[3], { className: "sc-dot is-active"}, "-=0.3")
    // .to(showcaseImgs[3],{ opacity: 1, x: 0 }, "-=0.6" )
    // .to(showcaseSpans[3],{ opacity: 1, x: 0 }, "-=0.2" )
    // .set( showcaseDots[3], { className: "sc-dot"})
    // .addLabel("show_4")
    // .to(showcaseImgs[4],{ opacity: 1, x: 0 }, "-=0.4")
    // .addLabel("show_5")
    // .to(showcaseImgs[5],{ opacity: 1, x: 0 }, "-=0.4")
    // .addLabel("show_6")
    // .to(showcaseImgs[6],{ opacity: 1, x: 0 }, "-=0.4")
    // .addLabel("points")
    // .set(".points__list", { className: "points__list on"}, "-=0.2" )
    // .addLabel("jump");

    // battery_animation = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.showcase',
    //     scrub: 1,
    //     // pin: true,
    //     start: () => "0 " + getheaderHeight(),
    //     end: "bottom -=20%",
    //   }
    // });

    ScrollTrigger.create({
      animation: sc_title,
      trigger: '.showcase__title',
      scrub: 1,
      start: "top 80%",
      end: "bottom 70%",
      ease: "back(2)"
    });

    sc_img_trigger = ScrollTrigger.create({
      animation: sc_img,
      trigger: '.showcase__main',
      scrub: 1,
      start: "top 90%",
      toggleActions: 'play reverse play reverse',
      markers: true,
      end: "bottom 60%",
    });
  },

  // MOBILE
  "( max-width: 1023px )": function() {
    sc_img_m
    .addLabel("start")
    .to(showcaseImgs[0], { opacity: 1, y: 0, duration: .9 })
    .addLabel("show_0")
    .fromTo(showcaseImgs[0],{ scale: 1.3 }, { scale: 1, x: -208 })
    .to(showcaseImgs[1], { opacity: 1, x: 0, duration: 0.4}, )
    .to(showcaseImgs[2],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35" )
    .to(showcaseImgs[3],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35" )
    .to(showcaseImgs[4],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35")
    .to(showcaseImgs[5],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35")
    .to(showcaseImgs[6],{ opacity: 1, x: 0, duration: 0.4}, "-=0.35")
    .from(showcaseSpans_M[0], { opacity: 0, x: 10, duration: 0.6 }, "-=0.3" )
    .from(showcaseSpans_M[1], { opacity: 0, x: 10, duration: 0.6  }, "-=0.35" )
    .from(showcaseSpans_M[2], { opacity: 0, x: 10, duration: 0.6  }, "-=0.35" )
    .from(showcaseSpans_M[3], { opacity: 0, x: 10, duration: 0.6  }, "-=0.35" )
    .addLabel("jump");

    ScrollTrigger.create({
      animation: sc_title,
      trigger: ".showcase",
      start: "top 60%",
      ease: "power1.out",
      toggleActions: 'play reverse play reverse',
    });

    ScrollTrigger.create({
      animation: sc_img_m,
      trigger: ".showcase__main",
      start: "top 60%",
      ease: "power1.out",
      // onEnter: () => pauseVideo(),
      // onLeaveBack: () => playVideo()
    });

    ScrollTrigger.create({
      animation: sc_img_m,
      trigger: ".showcase__title",
      start: "top 60%",
      toggleActions: 'play none resume reset',
    });

    ScrollTrigger.create({
      trigger: ".points",
      start: "top 80%",
      end: 'bottom -=100%',
      onEnter: () => $(".points__list").addClass("on"),
    });

    ScrollTrigger.create({
      trigger: ".showcase",
      start: "top 60%",
      onLeaveBack: () => $(".points__list").removeClass("on")
    });
  }
});


// * ----- ESS

var ess_title = gsap.timeline();
ess_title.from(".ess__title", { opacity: 0, y: 100, duration: 0.5 })
ess_title.from(".ess__info", { opacity: 0, y: 100, delay: 0.2},0 )
ess_title.from(".ess", {
  backgroundSize: "140% 140%",
  backgroundPosition: "45% 15%",
  ease: Sine.easeOut,
  duration: 1.5,
},"-=0.5")

ScrollTrigger.matchMedia({

  // PC
  "( min-width: 1024px )": function() {
    ScrollTrigger.create({
      animation: ess_title,
      trigger: '.ess__title',
      scrub: 1,
      end: "bottom 50%",
      ease: "power1.out",
    });
  },

  // MOBILE
  "( max-width: 1024px )": function() {
    ScrollTrigger.create({
      animation: ess_title,
      trigger: ".ess",
      start: "top 60%",
      ease: "power1.out",
      toggleActions: 'play reverse play reverse',
    });

  }
});

var ess_img = gsap.timeline();
ess_img.from(".ess__img", { z:-100, x: 40, y:20, duration: 1.2, ease: "power1.inOut"})
ess_img.from(".ess__img-shadow", { opacity: 0, x: -90, y: 28, delay: 0.2,duration: 1,  ease:Linear.easeNone},0)
ess_img.addLabel("jump");
ScrollTrigger.create({
  animation: ess_img,
  trigger: '.ess__main',
  start: "top 70%",
  toggleActions: 'play none play none',
});
ScrollTrigger.create({
  animation: ess_img,
  trigger: '.ess',
  start: "top 70%",
  toggleActions: 'none none none reverse',
});


// * ----- ARTICLE
var articles_animation = gsap.timeline();
articles_animation.to('.article__title', { opacity: 1, duration: 0.5} )
articles_animation.to('#at-bg1', { opacity: 1, x: 0, duration: 1.5} )
articles_animation.to('#at-main0', { opacity: 0, x: 0, duration: 0.8 }, '0.5')
articles_animation.to('#at-main1', { opacity: 1, x: 0, duration: 1.2 },  '1.2' )
articles_animation.to('#at-bg2', { opacity: 1, x: 0,  duration: 1.5}, '+=1.2')
articles_animation.to('#at-main1', { opacity: 0, x: 0, duration: 0.8 }, '-=1.4')
articles_animation.to('#at-main2', { opacity: 1, x: 0, duration: 1.2 },  '-=1' )
articles_animation.to('#at-bg3', { opacity: 1, x: 0,  duration: 1.5  }, '+=1.2' )
articles_animation.to('#at-main2', { opacity: 0, x: 0, duration: 0.8 }, '-=1.4' )
articles_animation.to('#at-main3', { opacity: 1, x: 0, duration: 1.2 },  '-=1' )
articles_animation.to('#at-bg4', { opacity: 1, x: 0,  duration: 1.5  }, '+=1.2' )
articles_animation.to('#at-main3', { opacity: 0, x: 0, duration: 0.8 }, '-=1.4' )
articles_animation.to('#at-main4', { opacity: 1, x: 0, duration: 1.2 },  '-=1' )
articles_animation.to('.article__title', { opacity: 1,  duration: 0.5  },)


var article_content = gsap.timeline();
article_content.from('.article__title', {opacity: 0, y: 10, duration: 1});
article_content.from('.article__main--camp', {opacity: 0, y: 10, duration: 0.5}, '0.2');
article_content.to('.at-line1', {opacity: 1, x: 0, duration: 0.5 }, 0);
article_content.to('.at-line2', {opacity: 1, y: 0, duration: 0.5 }, 0);
article_content.to('.at-line3', {opacity: 1, x: 0, duration: 0.5 }, 0);
article_content.to('.at-line4', {opacity: 1, y: 0, duration: 0.5 }, 0);
article_content.from('.article__content-bg', {opacity: 0, duration: 0.5}, '-=0.2');
article_content.to('.article__content-line', {opacity: 0, duration: 0.5}, '-=0.3');

ScrollTrigger.matchMedia({

  // PC
  "( min-width: 1024px )": function() {
    ScrollTrigger.create({
      trigger: '.article',
      animation: articles_animation,
      pin: true,
      scrub: 1,
      start: () => '0 ' + getheaderHeight(),
      end: 'bottom -=100%',
      ease: 'quart.inOut',
      invalidateOnRefresh: true
    });


    ScrollTrigger.create({
      trigger: '.article',
      animation: article_content,
      scrub: 1,
      start: 'top 70%',
      end: 'top 100+=10%',
    });


  },

  // MOBILE
  "( max-width: 1024px )": function() {
    ScrollTrigger.create({
      trigger: '.article',
      animation: articles_animation,
      pin: true,
      scrub: 1,
      start: () => "0 " + getheaderHeight(),
      end: "bottom -=100%",
      ease: "quart.inOut",
      // invalidateOnRefresh: false
    });
  }
});





// * ----- CONTACT
var contact_animation = gsap.timeline();
contact_animation.from(".contact__content", { opacity: 0, duration: 0.7, ease: "power1.inOut" })
contact_animation.from(".contact__title", { opacity: 0, y: 40, duration: 0.45 , ease: "power1.inOut"}, "-=0.4")
contact_animation.from(".contact__text", { opacity: 0, y: 40, duration: 0.45 , ease: "power1.inOut"}, "-=0.3")
contact_animation.from(".contact__bottom", { opacity: 0, y: 40, duration: 0.45 , ease: "power1.inOut"}, "-=0.3")

ScrollTrigger.create({
  trigger: '.contact',
  animation: contact_animation,
  start: "top 85%",
  end: "bottom +=80%",
  ease: "quart.inOut",
  toggleActions: 'play none none reset',
});


// * ----- NAVIGATION

ScrollTrigger.matchMedia({

  // PC
  "( min-width: 1024px )": function() {
    var marker__battery = gsap.timeline({
      scrollTrigger: {
        trigger: '.battery',
        start: "top top+=101px",
        end:"bottom top+=100px",
        toggleActions: "play reverse play reverse",
        toggleClass: {targets: ".header__nav a[href$='battery']", className: "is-active"},
      }
    });

    var marker__app = gsap.timeline({
      scrollTrigger: {
        trigger: '.app',
        start: "top top+=101px",
        end:"bottom top+=100px",
        toggleActions: "play reverse play reverse",
        toggleClass: {targets: ".header__nav a[href$='app']", className: "is-active"},
      }
    });

    var marker__contact = gsap.timeline({
      scrollTrigger: {
        trigger: '.marker-contact',
        start: "top top+=101px",
        toggleClass: {targets: ".header__nav a[href$='contact']", className: "is-active"},
      }
    });
  }
});

var header = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrap',
    start: "top top",
    end:"bottom -=500%",
    toggleClass: {targets: ".header", className: "is-active"}
  }
});


// 네비용 각 스크롤 위치 계산
function getScrollPos(animation, trigger){
  var percent = animation.labels["jump"] / animation.totalDuration();
  var myST = trigger;
  var scrollPos = (myST.start + (myST.end - myST.start) * percent);
  return scrollPos;
}


$(".header__logo-link, .footer__top").on("click", function (e) {
  e.preventDefault();
  gsap.to(window, 1, {scrollTo: 0});
});

$(".header__menu-link").on("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href").split("#")[1];

  if (target === "battery") {
    if (isTabletSize()) {
      gsap.to(window, {scrollTo: {y: "#battery", offsetY: getheaderHeight()}});
    } else {
      gsap.to(window, {scrollTo: {y: battery_animation.scrollTrigger.end}});
    }
  }
  if (target === "app") {
    gsap.to(window, {scrollTo: {y: "#app", offsetY: getheaderHeight()}});
  }
  if (target === "contact") {
    gsap.to(window, {scrollTo: {y: "#contact", offsetY: getheaderHeight()}});
  }
  if ($(".header").hasClass('is-opened')) {
    allowScroll();
    $('.header').removeClass('is-opened');
  }
});

// * 인트로
// function stopIntro(){
//   $('body').removeClass('is-intro');
//   $('body').addClass('is-loaded');
//   setTimeout(showIntro, 500);
//   setTimeout(allowScroll, 1000);
// }

// $(window).on('beforeunload', function() {
//   $(window).scrollTop(0);
// });

// $(window).on('load', function(){
//   gsap.to(window, 1, {scrollTo: 0});
//   $('body').addClass('is-intro');
//   preventScroll();
//   setTimeout(function(){
//     stopIntro();
//   }, 2000);

//   $('.intro').on('click', function(){
//     stopIntro();
//   });

//   $("#video").css('opacity', 1);
// });
