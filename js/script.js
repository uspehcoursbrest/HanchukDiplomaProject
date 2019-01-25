window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes();

        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;

        document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year + "г.";
        document.getElementById("time").innerHTML = hour + ":" + min;

    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock();

    }

    clockStart();

};

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.plusMinus').on('click', function (event) {
        var plus = $(event.target);
        if (plus.hasClass('plus')) {
            plus.removeClass('plus');
            plus.addClass('minus');
            var downHill = plus.parent().parent().next();
            console.log(downHill);
            // downHill.css('display', 'table-row');
            downHill.removeAttr('style');
        } else {
            plus.removeClass('minus');
            plus.addClass('plus');
            var downHill = plus.parent().parent().next();
            downHill.css('display', 'none');
        }
    });

    $('.rangeSum').ionRangeSlider({
        min: 20,
        max: 70000,
        from: 15670,
        grid: true,
        postfix: "$",
    });

    var clock = $('.clock');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            clock.fadeOut();
        } else {
            clock.fadeIn();
        }
    });

});