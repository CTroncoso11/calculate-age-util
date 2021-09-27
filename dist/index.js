function checkDayMonth(value) {
    if (value <= 9) {
        return "0" + value.toString();
    }
    else {
        return value.toString();
    }
}
function calculateAge(day, month, year) {
    if ((day >= 1 && day <= 31) && (month >= 1 && month <= 12) && (year >= 1 && year <= 9999)) {
        //  conver date
        var dayStr = checkDayMonth(day);
        var monthStr = checkDayMonth(month);
        var todayDateRaw = new Date();
        var todayDate = new Date((todayDateRaw.getTime() - (todayDateRaw.getTimezoneOffset() * 60000)));
        var pastYearString = year.toString() + "-" + monthStr + "-" + dayStr + "T00:00:00";
        var pastYearRaw = new Date(pastYearString);
        var pastTime = (todayDate.getTime() - pastYearRaw.getTime());
        return {
            seconds: Math.floor(pastTime / 1000),
            minutes: Math.floor(pastTime / 1000 / 60),
            hours: Math.floor(pastTime / 1000 / 60 / 60),
            days: Math.floor(pastTime / 1000 / 60 / 60 / 24),
            weeks: Math.floor(pastTime / 1000 / 60 / 60 / 24 / 7),
            month: Math.floor(pastTime / 1000 / 60 / 60 / 24 / 7 / 4.345),
            years: Math.floor(pastTime / 1000 / 60 / 60 / 24 / 365)
        };
    }
    else {
        return false;
    }
}
var data = calculateAge(3, 12, 1999);
console.log(data.month / 12);
