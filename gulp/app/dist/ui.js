/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-09 18:46:17
 * -----------------------------------------------
 */


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


// * 팝업

var $body = $('body');
var scrollPosition;
var scrollBarWidth = getScrollBarWidth();

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
  if ($(document).height() <= $(window).height()) {
    return false;
  };
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  $body.css({
    'overflow': 'hidden',
    'padding-right': scrollBarWidth + 'px'
  });
  $('.header__inner').css('margin-right', 0+scrollBarWidth+'px');
};

function allowScroll() {
  $body.css({
    'overflow': '',
    'padding-right': ''
  });
  $('.header__inner').css('margin-right', '');
  window.scrollTo(0, scrollPosition);
};

function openPopup(e) {
  e.preventDefault();
  preventScroll();
  var target = $(this).data('popup');
  $(this).addClass('is-active');
  $('.lp-' + target).addClass('is-opened');
}

function closePopup(e) {
  e.preventDefault();
  $('.lp.is-opened').removeClass('is-opened');
  $('.points__button').removeClass('is-active');
  setTimeout(allowScroll, 300);
}

$('[data-popup').on('click', openPopup)
$('.lp__close').on('click', closePopup)
$('.lp__dim').on('click', closePopup)



// * 모바일 분기

if(navigator.maxTouchPoints > 1 ) {
  $('body').addClass('is-mobile');

  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' // notice 'resize' isn't in the list
  });
}


// * 인트로

function stopIntro(){
  $('body').removeClass('is-intro');
  $('body').addClass('is-loaded');
  setTimeout(allowScroll, 1000);
}

$(window).on('beforeunload', function() {
  // $(window).scrollTop(0); //TODO: 활성화!!
});

$(window).on('load', function(){
  // gsap.to(window, 1, {scrollTo: 0});//TODO: 활성화!!
  $('body').addClass('is-intro');
  // preventScroll();
  setTimeout(function(){
    stopIntro();
  }, 0); //2000 TODO:

  $('.intro').on('click', function(){
    stopIntro();
  });
});

// * 반응형 체크

var breakPoint = 1024;
var isTabletSize = function () {
  var winW = window.innerWidth;
  if (winW < breakPoint) {
    return true;
  } else {
    return false;
  }
}

var tabletEvt = function () {
  var winW = window.innerWidth;
  if (winW < breakPoint) {
    $('body').addClass('mq-mobile');
  } else {
    $('.header').removeClass('is-opened');
    $('body').removeClass('mq-mobile');
  }
};

// 버거
var headerMenuTween;
var headerLnagTween;

function setNavHeight() {
  var vh = $(window).innerHeight();
  $('.header__nav').css('height', (vh - 68));
}

$('.burger').on('click', function () {

  $('.mq-mobile .header').toggleClass('is-opened');
  if ($('body').hasClass('mq-mobile') && $('.header').hasClass('is-opened')) {
    preventScroll();
    if (gsap.isTweening('.header__menu-link')) { // ? 트위닝 중일 때 다시 연 경우
      headerMenuTween.progress(1);
      headerLnagTween.progress(1);
    }
    headerMenuTween = gsap.fromTo('.header__menu-link', {autoAlpha: 0, y: 20}, {autoAlpha: 1, delay: 0.3, y: 0, duration: 0.45, stagger: 0.25});
    headerLnagTween = gsap.fromTo('.header__lang', {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, delay: 1, duration: 0.45});
  } else {
    allowScroll();
  }

});


var resizeHandler = function () {
  tabletEvt();
}
var loadHandler = function () {
  tabletEvt();

}

window.addEventListener('resize', resizeHandler);
window.addEventListener('load', loadHandler);
