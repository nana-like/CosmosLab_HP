/**
 * -----------------------------------------------
 * Project: COSMOS LAB HOMEPAGE
 * Author: Nana <nykim@nykim.net>
 * Last Modified: 2021-09-09 19:41:16
 * -----------------------------------------------
 */




// [아티클스]

var $window = $(window);
var $document = $(document);
var $slidesContainer = $(".articles");
var $allSlides = $(".article");
var $currentSlide = $allSlides.first();

//Animating flag - is our app animating
var isAnimating = false;

//The height of the window
var pageHeight = $window.innerHeight();
var currentIndex = 0;

var timeline1 = new TimelineMax()
.reverse();

var timeline2 = new TimelineMax()
.to(".article__home", 0.5,{autoAlpha:1, repeat:3}, "+=0.5")
.reverse();

var timeline3 = new TimelineMax()
.to(".article__elec", 0.5,{autoAlpha:1, repeat:3}, "+=0.5")
.reverse();

var timelines = [timeline1, timeline2, timeline3];

//Going to the first slide
goToSlide($currentSlide);



  /*
	*   When user scrolls with the mouse, we have to change slides
	* */
  function onMouseWheel(event)
  {

    console.dir("온마우스휠");

    //Normalize event wheel delta
    var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

    //If the user scrolled up, it goes to previous slide, otherwise - to next slide
    if(delta < -1)
    {
      goToNextSlide();
    }
    else if(delta > 1)
    {
      goToPrevSlide();
    }
    event.preventDefault();
  }

  /*
	*   If there's a previous slide, slide to it
	* */
  function goToPrevSlide()
  {
    if($currentSlide.prev().length)
    {
      goToSlide($currentSlide.prev());
    }
  }

  /*
	*   If there's a next slide, slide to it
	* */
  function goToNextSlide()
  {
    if($currentSlide.next().length)
    {
      goToSlide($currentSlide.next());
    }
  }


  /*
	*   Actual transition between slides
	* */
function goToSlide($slide)
  {
    //If the slides are not changing and there's such a slide
    if(!isAnimating && $slide.length)
    {
      //setting animating flag to true
      isAnimating = true;
      $currentSlide = $slide;
      currentID = $currentSlide.attr('id');
      NextSlide = $currentSlide.next()

      //Sliding to current slide
      TweenLite.to($slidesContainer, 1, {scrollTo: {y: pageHeight * $currentSlide.index() }, onComplete: onSlideChangeEnd, onCompleteScope: this});

      //Definig slide status
      TweenLite.to($allSlides.filter(".active"), 0.1, {className: "-=active"});
      TweenLite.to($allSlides.filter($currentSlide), 0.1, {className: "+=active"});

      //Animating menu items
      // TweenLite.to($navButtons.filter(".active"), 0.5, {className: "-=active"});
      // TweenLite.to($navButtons.filter("." + currentID), 0.5, {className: "+=active"});

    }
  }


  /*
	*   Once the sliding is finished, we need to restore "isAnimating" flag.
	*   You can also do other things in this function, such as changing page title
	* */
  function onSlideChangeEnd() {
    isAnimating = false;

    // Reverse the timeline for the previous slide
    timelines[currentIndex].reversed(true).progress(0);

    // Change the index
    currentIndex = $currentSlide.index();

    // Play the timeline for the current slide
    timelines[currentIndex].reversed(false);
  }

  /*
	*   When user resize it's browser we need to know the new height, so we can properly align the current slide
	* */
  function onResize(event)
  {

    //This will give us the new height of the window
    var newPageHeight = $window.innerHeight();

    /*
		*   If the new height is different from the old height ( the browser is resized vertically ), the slides are resized
		* */
    if(pageHeight !== newPageHeight)
    {
      pageHeight = newPageHeight;

      //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
      TweenLite.set([$slidesContainer, $allSlides], {height: pageHeight + "px"});

      //The current slide should be always on the top
      TweenLite.set($slidesContainer, {scrollTo: {y: pageHeight * $currentSlide.index() }});
    }

  }
