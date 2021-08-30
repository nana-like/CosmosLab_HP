/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-08-30 21:56:52
 * -----------------------------------------------
 */

const controller = new ScrollMagic.Controller();

// ======================
// 클릭 시 이동
controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: newpos
    }
  });
});

$(".footer__top").on("click", function (e) {
  e.preventDefault();
  controller.scrollTo(0);
});

$(".header__menu-link").on("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href").split("#")[1];
  controller.scrollTo(`#${target}`);
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
    'position': 'fixed',
    'top': '-' + scrollPosition + 'px',
    'left': 0,
    'right': 0,
    'padding-right': getScrollBarWidth() + 'px'
  });
  // $('.wrap').css('padding-right',getScrollBarWidth());
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
  // $('.wrap').css('padding-right', '');
  window.scrollTo(0, scrollPosition);
};

function openPopup(e) {
  e.preventDefault();
  preventScroll();
  var target = $(this).data('popup');
  $(".lp-" + target).addClass("is-opened");
}

function closePopup(e) {
  e.preventDefault();
  $(".lp.is-opened").removeClass("is-opened");
  setTimeout(allowScroll, 300);
}

$("[data-popup").on("click", openPopup)
$(".lp__close").on("click", closePopup)
$(".lp__dim").on("click", closePopup)



// ======================
// 인트로

function stopIntro(){
  $("body").removeClass("is-intro");
  $("body").addClass("is-loaded");
  setTimeout(allowScroll, 1000);
}

$(window).on("load", function(){
  $("body").addClass("is-intro");
  preventScroll();
  setTimeout(function(){
    stopIntro();
  }, 2000);

  $(".intro").on("click", function(){
    stopIntro();
  });
});
