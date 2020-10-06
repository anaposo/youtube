$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  videojs("my_video_1", { "controls": true, "autoplay": true, "preload": "auto" });
var player = videojs('my_video_1');

player.breakpoints(true);
});
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});

