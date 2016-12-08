$(document).ready(function() {
  $('.wcalc__icons .wcalc__icon--1').on('click', function() {
    $('.wcalc__box--1 ').removeClass('noframe');

  });

  /* wcalc__frame--1 */
  var a = $('.wcalc__frame--1 img');

  $('.wcalc__option p').on('click', function() {
    $('.wcalc__option p.checked').removeClass('checked');
    $(this).addClass('checked');
  });
  $('.closed').on('click', function() {
    a.removeClass('active effect-1 effect-2');
  });
  $('.turn-around').on('click', function() {
    a.removeClass('effect-2');
    a.addClass('active effect-1');
  });
  $('.turn-up').on('click', function() {
    a.removeClass('effect-1');
    a.addClass('active effect-2');
  });

  /* wcalc__frame--2 */
  var b = $('.wcalc__frame--2 img');

  $('.wcalc__option p').on('click', function() {
    $('.wcalc__option p.checked').removeClass('checked');
    $(this).addClass('checked');
  });
  $('.closed').on('click', function() {
    b.removeClass('active effect-1-reverse effect-2-reverse');
  });
  $('.turn-around').on('click', function() {
    b.removeClass('effect-2-reverse');
    b.addClass('active effect-1-reverse');
  });
  $('.turn-up').on('click', function() {
    b.removeClass('effect-1-reverse');
    b.addClass('active effect-2-reverse');
  });


});
