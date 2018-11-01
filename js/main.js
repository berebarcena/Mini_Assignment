$(document).ready(function() {
  // Button hover animation
  $('.cta').hover(
    function() {
      TweenLite.to(this, 1, {
        backgroundColor: '#ff00ff',
        ease: Elastic.easeInOut,
      });
    },
    function() {
      TweenLite.to(this, 1, {
        backgroundColor: '#000000',
        ease: Elastic.easeInOut,
      });
    }
  );
});
