/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-07 17:40:48
 * -----------------------------------------------
 */


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


// const controller = new ScrollMagic.Controller();

// ======================
// 클릭 시 이동
// controller.scrollTo(function (newpos) {
//   TweenMax.to(window, 0.5, {
//     scrollTo: {
//       y: newpos
//     }
//   });
// });

$(".footer__top").on("click", function (e) {
  e.preventDefault();
  // controller.scrollTo(0);
});



// ======================
// 팝업

var $body = $('body');
var scrollPosition;

function getScrollBarWidth() {
  $body.css('overflow', 'hidden');
  var width = $body.innerWidth();
  $body.css('overflow', 'scroll');
  width -= $body.innerWidth();
  if (!width) {
    width = $body.width() - $body.innerWidth();
  };
  $body.css('overflow', '');
  return width;
};

function preventScroll() {

  console.log(getScrollBarWidth());
  if ($(document).height() <= $(window).height()) {
    return false;
  };
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  $body.css({
    'overflow': 'hidden',
    // 'position': 'fixed',
    // 'top': '-' + scrollPosition + 'px',
    'left': 0,
    'right': 0,
    'padding-right': getScrollBarWidth() + 'px'
  });
};

function allowScroll() {
  $body.css({
    'overflow': '',
    'position': '',
    'top': '',
    'left': '',
    'right': '',
    'padding-right': ''
  });
  window.scrollTo(0, scrollPosition);
};

function openPopup(e) {
  e.preventDefault();
  preventScroll();
  var target = $(this).data('popup');
  $(this).addClass("is-active");
  $(".lp-" + target).addClass("is-opened");
}

function closePopup(e) {
  e.preventDefault();
  $(".lp.is-opened").removeClass("is-opened");
  $(".points__button").removeClass("is-active");
  setTimeout(allowScroll, 300);
}

$("[data-popup").on("click", openPopup)
$(".lp__close").on("click", closePopup)
$(".lp__dim").on("click", closePopup)



// ======================
// 모바일 분기

if(navigator.maxTouchPoints > 1 ) {
  // alert("모바일 접속!");
  $('body').addClass('is-mobile');
}





// ======================
// 인트로

function stopIntro(){
  $("body").removeClass("is-intro");
  $("body").addClass("is-loaded");
  setTimeout(allowScroll, 1000);
}

$(window).on('beforeunload', function() {
  // $(window).scrollTop(0); //TODO: 활성화!!
});

$(window).on("load", function(){
  // gsap.to(window, 1, {scrollTo: 0});//TODO: 활성화!!
  $("body").addClass("is-intro");
  preventScroll();
  setTimeout(function(){
    stopIntro();
  }, 0); //2000

  $(".intro").on("click", function(){
    stopIntro();
  });
});


// 💪 반응형 체크
var breakPoint = 1024;

var isTabletSize = function () {
  var winW = window.innerWidth;
  if (winW < breakPoint) {
    return true;
  } else {
    return false;
  }
}

// 💪 태블릿 사용하는 함수
var tabletEvt = function () {
  var winW = window.innerWidth;


  if (winW < breakPoint) {
    $("body").addClass("mq-mobile");
  } else {
    $('.header').removeClass("is-opened");
    // gsap.to(".header__nav", 0, {opacity: 1});
    $("body").removeClass("mq-mobile");
  }
};


var resizeHandler = function () {
  tabletEvt();
}
var loadHandler = function () {
  tabletEvt();

}




window.addEventListener("resize", resizeHandler);
window.addEventListener("load", loadHandler);


// 버거
let headerMenuTween;
let headerLnagTween;

$(".burger").on("click", function () {


  if ($("body").hasClass("mq-mobile") && $('.header').hasClass('is-opened')) {
    console.log("MOBILE CLOSE")
    // headerMenuTween.progress(1);
    // headerLnagTween.progress(1);
    // gsap.killTweensOf(".header__menu-link");
    // gsap.killTweensOf(".header__lang");
  }
  $('.mq-mobile .header').toggleClass('is-opened');
  if ($("body").hasClass("mq-mobile") && $('.header').hasClass('is-opened')) {




    if (gsap.isTweening(".header__menu-link")) {
      console.log("트위닝중인데 열다니..");
      headerMenuTween.progress(1);
      headerLnagTween.progress(1);
    }





    // alert("a-ha!");
    // headerNavTween = gsap.to(".header__nav", {opacity: 1, duration: 0.5});
    // headerNavTween = gsap.fromTo(".header__nav", {autoAlpha: 0}, {autoAlpha: 1, duration: 0.5});
    headerMenuTween = gsap.fromTo(".header__menu-link", {autoAlpha: 0, y: 20}, {autoAlpha: 1, delay: 0.3, y: 0, duration: 0.45, stagger: 0.25});
    headerLnagTween = gsap.fromTo(".header__lang", {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, delay: 1, duration: 0.45});

    // gsap.to('.header__nav', {
    //   duration: 0.15,
    //   opacity: 1,
    // })
    // gsap.to($('.header__menu-link'), 0.2, {
    //   stagger: 0.2,
    //   delay: 0.15,
    //   y: 0,
    //   opacity: 1,
    // })
    // gsap.to($('.header__lang'), 0.2, {
    //   delay: 0.7,
    //   opacity: 1,
    //   y: 0,
    // })
  }
});
