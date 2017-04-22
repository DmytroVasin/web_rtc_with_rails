//= require jquery
//= require jquery_ujs
//= require_tree .
//= require_self

//= require bootstrap-sprockets

$( document ).ready(function() {

  $('#stopVideoButton').on('click', function() {
    if ( $(this).hasClass('glyphicon-facetime-video') ) {
      $(this).addClass('glyphicon-headphones').removeClass('glyphicon-facetime-video');
      Room.pauseVideo();
    } else {
      $(this).addClass('glyphicon-facetime-video').removeClass('glyphicon-headphones');
      Room.resumeVideo();
    }
  });

  $('#muteButton').on('click', function() {
    if ( $(this).hasClass('glyphicon-volume-up') ) {
      $(this).addClass('glyphicon-volume-off').removeClass('glyphicon-volume-up');
      Room.mute();
    } else {
      $(this).addClass('glyphicon-volume-up').removeClass('glyphicon-volume-off');
      Room.unMute();
    }
  });

});
