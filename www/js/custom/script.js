/**
 * scripts.js
 */
/*global Modernizr:true, enquire:true*/

// add matchMedia support, specifically for enquire.js
Modernizr.load([
  {
    test: window.matchMedia,
    nope: ['../libs/matchMedia.js', '../libs/matchMedia.addListener.js']
  }
]);


(function($) {

  var $callout = $('.callout-project'),
      // define media queries (should match _vars.scss)
      sm_mq      = 'screen and (min-width: 0) and (max-width: 35em)',
      header_mq  = 'screen and (min-width: 0) and (max-width: 45em)',
      med_mq     = 'screen and (min-width: 45em) and (max-width: 72em)',
      lg_mq      = 'screen and (min-width: 72em)',
      $hero = $('.container-hero'),
      $img,
      img_path,
      onHeroImageLoaded,
      manageFitText;


  /**
   * onHeroImageLoaded()
   */
  onHeroImageLoaded = function() {
    enquire.register(header_mq, {
      match:   function() { $hero.find('img').fadeIn(800); },
      unmatch: function() { $hero.find('img').fadeOut(400); }
    });
  };


  if ($hero.length > 0) {
    img_path = $hero.data('hero-image');
    if (img_path) {
      $img = $('<img id="hero" src="'+ img_path +'" alt="" style="display:none;">');
      //$img = $('<img id="hero" src="'+ img_path +'" alt="" style="display:none;">');
      $hero.prepend($img.imagesLoaded(onHeroImageLoaded));
    }
  }



  /**
   * manageFitText
   */
  manageFitText = {
    destroySingle: function($callout) {
      $(window).off('.FitText');
      $callout.css('font-size', '');
    },

    destroyStacked: function($callout) {
      $(window).off('.FitText');
      $callout.find('span').css('font-size', '');
      $callout.find('em').css('font-size', '');
    },

    initSingle: function($callout) {
      $callout.fitText(2.15);
    },

    initStacked: function($callout) {
      $callout.find('span').fitText(0.9);
      $callout.find('em').fitText(1.275);
      setTimeout(function() { $(window).resize(); }, 500); // trigger resize to avoid any hangups
    }
  };


  enquire.register(header_mq, {
    match: function() {
      manageFitText.destroySingle($callout);
      manageFitText.initStacked($callout);
    }
  });

  enquire.register(med_mq, {
    match: function() {
      manageFitText.destroyStacked($callout);
      manageFitText.initSingle($callout);
    }
  });

  enquire.register(lg_mq, {
    match: function() {
      manageFitText.destroySingle($callout);
      manageFitText.initStacked($callout);
    }
  });


/*
  // Smart Resize
  (function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
          if (!execAsap) { func.apply(obj, args); }
          timeout = null;
        }
        if (timeout)       { clearTimeout(timeout); }
        else if (execAsap) { func.apply(obj, args); }

        timeout = setTimeout(delayed, threshold || 100);
      };
    };

    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
  })(jQuery,'smartresize');

  var equalizeHeights = function() {
        $('#intro').equalize();
      };

  $('#intro-featured').imagesLoaded(equalizeHeights);

  // re-equalize on resize
  $(window).smartresize(function(){ equalizeHeights(); });
*/



}(jQuery));
