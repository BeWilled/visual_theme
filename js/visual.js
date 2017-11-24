(function ($) {
  'use strict';
  Drupal.behaviors.visual_js = {
    attach: function (context, settings) {

      $('.content-layout .header .fa.fa-bars').once('clicked').click(function() {
        $('.content-layout .header').toggleClass('clicked');
      })
      $(window).once('scrolled').on( 'DOMMouseScroll mousewheel', function ( event ) {
        if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
          $('.content-layout .header .header-inner .search-div').removeClass('opened');
        } else {
          $('.content-layout .header .header-inner .search-div').addClass('opened');
        }
      });
      $('.content-layout .header .search-div .loop').once('clicked').click(function() {
        $('.content-layout .header .header-inner .search-div').toggleClass('opened');
      })
    }
  };
}(jQuery));