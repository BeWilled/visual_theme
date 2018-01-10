(function ($) {
  'use strict';
  Drupal.behaviors.visual_js = {
    attach: function (context, settings) {

      $('.main-content .header .menu-button').once('clicked').click(function() {
        $('.main-content .header , .main-content .overlay, .main-content .content').toggleClass('clicked');
        $('.main-content .menu-button').toggleClass('clicked');

      });

      $('.content-video .comments .c-count').once('clicked').click(function() {
        $('.content-video .add-comment').toggleClass('clicked');
      });

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