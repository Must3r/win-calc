$(document).ready(function() {
// announcing the variables
    var picImg = $('.wcalc__frame .pic'),
        picImgRev = $('.wcalc__frame .pic-rev'),
        picImgSec = $('.wcalc__frame .pic-sec'),
        picImgThird = $('.wcalc__frame .pic-third'),
        trigger = $('.wcalc__option p'),
        allClasses = 'active effect-1 effect-2 effect-1-reverse effect-2-reverse effect-3';

    $('.wcalc__icons .gal-icon').on('click', function() {
      var panelToShow = $(this).attr('rel');

      $('.gal-icon.checked').removeClass('checked');
      $(this).addClass('checked');

      $('.wcalc__box.isframe').removeClass('isframe');
      $('.'+panelToShow).addClass('isframe');
      $('.wcalc__frame img').removeClass(allClasses);
    })

    trigger.on('click', function() {
        $('.checked').removeClass('checked');
        $(this).addClass('checked');
    });
    $('.closed').on('click', function() {
        picImg.removeClass(allClasses);
    });
    $('.closed-sec').on('click', function() {
        picImgSec.removeClass(allClasses);
    });
    $('.closed-rev').on('click', function() {
        picImgRev.removeClass(allClasses);
    });
    $('.closed-third').on('click', function() {
        picImgThird.removeClass(allClasses);
    });
    $('.turn-left').on('click', function() {
        picImgRev.removeClass(allClasses);
        picImgRev.addClass('active effect-1-reverse');
    });
    $('.turn-left-sec').on('click', function() {
        picImgSec.removeClass(allClasses);
        picImgSec.addClass('active effect-1-reverse');
    });
    $('.turn-right').on('click', function() {
        picImg.removeClass(allClasses);
        picImg.addClass('active effect-1');
    });
    $('.turn-down').on('click', function() {
        picImg.removeClass(allClasses);
        picImg.addClass('active effect-2');
    });
    $('.turn-down-rev').on('click', function() {
        picImgRev.removeClass(allClasses);
        picImgRev.addClass('active effect-2-reverse');
    });
    $('.turn-down-sec').on('click', function() {
        picImgSec.removeClass(allClasses);
        picImgSec.addClass('active effect-2-reverse');
    });
    $('.turn-down-third').on('click', function() {
        picImgThird.removeClass(allClasses);
        picImgThird.addClass('active effect-3');
    });

});
