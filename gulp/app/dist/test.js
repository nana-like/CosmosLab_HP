/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-08-31 20:15:58
 * -----------------------------------------------
 */


var $window = $(window);
var $body = $('body');
var $test = $(".test");
var $articles = $('.articles')
var articlesOffsetTop = $test.offset().top;
var scrollPosition;
var winScrollTop;

$window.scroll(function (e) {
  var oEvent = e.originalEvent;
  var delta = oEvent.deltaY || oEvent.wheelDelta;
  winScrollTop = $window.scrollTop();
  // console.log(winScrollTop)

  if (winScrollTop >= articlesOffsetTop) {
    $test.addClass("is-fixed");
    $test.css("top", winScrollTop);
  } else {
    $test.removeClass("is-fixed");
  }
});


$window.on("mousewheel DOMMouseScroll", function (e) {
  console.log("휠 이벤트")
  var delta = e.originalEvent.wheelDelta / 30 || -e.originalEvent.detail;

  if (delta > 1) {
  } else if (delta < -1) {
  }
  // e.preventDefault();
});




var $slidesContainer = $(".articles");
var $allSlides = $(".article");
var $currentSlide = $allSlides.first();
var isAnimating;

function goToPrevSlide() {
  console.log("scroll up");
  if ($currentSlide.prev().length) {
    goToSlide($currentSlide.prev());
  }
}

function goToNextSlide() {
  console.log("scroll down");
  if ($currentSlide.next().length) {
    goToSlide($currentSlide.next());
  }
}


function goToSlide($slide) {
  if (!isAnimating && $slide.length) {
    isAnimating = true;
    $currentSlide = $slide;
    currentID = $currentSlide.attr('id');
    NextSlide = $currentSlide.next()

    console.log($currentSlide);

    //Sliding to current slide
    TweenLite.to($slidesContainer, 1, {
      scrollTo: {
        y: pageHeight * $currentSlide.index()
      },
      onComplete: onSlideChangeEnd,
      onCompleteScope: this
    });

    //Definig slide status
    TweenLite.to($allSlides.filter(".active"), 0.1, {
      className: "-=active"
    });
    TweenLite.to($allSlides.filter($currentSlide), 0.1, {
      className: "+=active"
    });

    //Animating menu items
    // TweenLite.to($navButtons.filter(".active"), 0.5, {className: "-=active"});
    // TweenLite.to($navButtons.filter("." + currentID), 0.5, {className: "+=active"});

  }
}




var articlePos = [];
$('.article').each(function (idx, el) {
  articlePos.push(el.offsetTop);
})
// controller.scrollTo(function (newpos) {
//   TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
// });

var isAnimating = false;


new ScrollMagic.Scene({
    triggerElement: ".test",
    triggerHook: "onLeave",
    duration: "200%"
  })
  // .setPin(".test", {pushFolloxwers: true})
  // .setClassToggle(".test", 'is-fixed') // 고정
  .addTo(controller)
  .addIndicators({
    name: "FIXED--"
  })

new ScrollMagic.Scene({
    triggerElement: "#tg2",
    triggerHook: "onLeave",
    duration: "100%"
  })
  // .setPin(".articles", {pushFollowers: true})
  // .setClassToggle(".test", 'is-fixed') // 고정
  // .setTween([ // 트윈 지정
  //   tween_slide,
  // ])
  .addTo(controller)
  .addIndicators({
    name: "트리거2"
  })
  .on('enter', function (event) {
    console.log("엔터!");
    // tween_slide.play(0);
  });

// $('.slide').each(function(idx, element) {

//   new ScrollMagic.Scene({
//       triggerHook: 'onEnter',
//       triggerElement: this,
//       offset: 5
//   })
//   .addTo(controller)
//   .on('enter', function (event) {
//     console.log(idx + "번째 ENTER 이벤트 - " + event.scrollDirection);
//     if (idx >= 5 || isAnimating) {
//       return false;
//     }
//     isAnimating = true;
//     // TweenMax.to(
//     //   window,
//     //   1, {
//     //     scrollTo: {y: "#slide" + (idx), autoKill:false
//     //   }, ease: Power4.easeOut
//     //   });
//     isAnimating = false;
//   });

//   new ScrollMagic.Scene({
//       triggerHook: 'onLeave',
//       triggerElement: this,
//       offset: -5
//   })
//   .addTo(controller)
//   .on('leave', function (event) {
//     console.log(idx + "번째 LEAVE 이벤트 - " + event.scrollDirection);
//     if (idx <= 0 || isAnimating) {
//       return false;
//     }
//     isAnimating = true;
//     TweenMax.to(
//       window,
//       1, {
//         scrollTo: {y: "#slide" + (idx-1), autoKill:false
//       }, ease: Power4.easeOut
//       });
//       isAnimating = false;
//   });



// //  new ScrollMagic.Scene({
// //       triggerElement: this,
// //       triggerHook: 'onEnter',
// //       offset:10 // small offset added to prevent overscrolling accidentally triggering
// //   })
// //     .addTo(controller)
// //     .on('enter', function (event) {
// //             console.log('triggered');
// //             console.log(index+1);
// //                 console.log(event.scrollDirection);
// //                 TweenLite.to(window, 1, {scrollTo:{y:".article" + (index+1),
// //                     autoKill:false},ease: Power4.easeOut});
// //      }); // scene end


// });
