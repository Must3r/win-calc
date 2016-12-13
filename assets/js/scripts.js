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

        $('.gal-icon.checked-icon').removeClass('checked-icon');
        $(this).addClass('checked-icon');

        $('.wcalc__box.isframe').removeClass('isframe');
        $('.' + panelToShow).addClass('isframe');
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

    var sliderVone = document.getElementById('slider-v-one');

    noUiSlider.create(sliderVone, {
        start: [1650],
        orientation: "vertical",
        step: 10,
        range: {
            'min': [1000],
            'max': [1650]
        },
        pips: {
            mode: 'values',
            values: [1000, 1650],
            density: 2
        }
    });

    var slider2 = document.getElementById('slider2');

    noUiSlider.create(slider2, {
        start: [1000],
        step: 10,
        range: {
            'min': [1000],
            'max': [1400]
        },
        pips: {
            mode: 'values',
            values: [1000, 1400],
            density: 2
        }
    });

    var sliderVtwo = document.getElementById('slider-v-two');

    noUiSlider.create(sliderVtwo, {
        start: [1500],
        orientation: "vertical",
        step: 10,
        range: {
            'min': [1500],
            'max': [2200]
        },
        pips: {
            mode: 'values',
            values: [1500, 2200],
            density: 2
        }
    });

    var slider4 = document.getElementById('slider4');

    noUiSlider.create(slider4, {
        start: [1000],
        step: 10,
        range: {
            'min': [1000],
            'max': [1700]
        },
        pips: {
            mode: 'values',
            values: [1000, 1700],
            density: 2
        }
    });

    var sliderVthree = document.getElementById('slider-v-three');

    noUiSlider.create(sliderVthree, {
        start: [950],
        orientation: "vertical",
        step: 10,
        range: {
            'min': [950],
            'max': [2200]
        },
        pips: {
            mode: 'values',
            values: [900, 2200],
            density: 2
        }
    });

});
