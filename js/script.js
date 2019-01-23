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
        if (sec < 10) sec = "0" + sec;

        document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year + "г.";
        document.getElementById("time").innerHTML = hour + ":" + min;

    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 10000);
        clock();

    }

    clockStart();
}