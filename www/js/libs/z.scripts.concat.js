/**
 * scripts.js
 */
/*global Modernizr:true, enquire:true*/


// Add Google Webfont Oswald
// Using the JS version so the page isn't blocked while downloading
var WebFontConfig = {
  google: { families: [ 'Oswald::latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();



(function($) {
  
  var $main = $('main');


  // when the user hasn't already scrolled and on a mobile device
  if (!window.pageYOffset && /mobile/i.test(navigator.userAgent)) {
    // scroll the page up to hide the URL UI bar
    window.scrollTo(0,1);
  }


  /**
   * RSVP click()
   */
  $('.btn-rsvp').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#rsvp').offset().top}, 600, 'linear');
  });


  /**
   * Button click()
   */
  $main.find('.btn').on('click', function(e) {
    e.preventDefault(); // vars would get hoisted to the top of the function declaration

    var $btn = $(this), // prefix jQuery variables with $ to signify a jQuery object
        msgText = "Thank you for RSVP'ing.";

    // reset, remove any previously existing messages or selections
    $('.message').remove();
    $('.selected').removeClass('selected');

    $btn.addClass('selected');

    $('html, body').animate({scrollTop: $('.btn-no').offset().top}, 600, 'linear');

    if ($btn.hasClass('btn-yes')) {
      msgText += ' We look forward to seeing you, don\'t forget your camera!';
    } else {
      msgText += ' Sorry we won\'t be seeing you.';
    }

    $main.find('p').after('<p class="message padded">'+ msgText +'</p>');
  });


}(jQuery));
