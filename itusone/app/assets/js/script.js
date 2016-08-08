$(document).ready( function() {
  loadHeaderText();
  $('#learn').on('click', function() {
    var homeSection = $('#home-section');
    scrollTo(homeSection);
  })
  $('#mission').on('click', function() {
    var missionSection = $('#mission-section');
    scrollTo(missionSection);
  })
})
$('#process').on('click', function() {
  var productSection = $('#mission-section');
  scrollTo(productSection);
})
$('#meet').on('click', function() {
  var intro = $('#intro');
  scrollTo(intro);
})
$('#contact-btn').on('click', function() {
  var contact = $('#contact');
  scrollTo(contact);
})
function loadHeaderText() {
  var first = $('.headline-first');
  var second = $('.headline-second');
  first.css('opacity', '1');
  setTimeout(function(){
    second.css('opacity', '1');
  }, 500);
}
function scrollTo(el) {
  $('html, body').animate({
    scrollTop: el.offset().top
  }, 1000);
}