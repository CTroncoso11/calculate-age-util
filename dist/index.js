function checkDayMonth(value) {
    if (value <= 9) {
        return "0" + value.toString();
    }
    else {
        return value.toString();
    }
}
/**
 * Add two numbers together
 * @param  {Number} day
 * @param  {Number} month
 * @param  {Number} year
 * @param  {boolean} timeToBirthday If enabled, returns the date values from the actual date to the birthday (must replace the input values with the ones for the next birthday)
 * @return {Dictionary}  Returns a dictionary with the days, months, years, etc. of the person's life
 */
function calculateAge(day, month, year, timeToBirthday) {
    if ((day >= 1 && day <= 31) && (month >= 1 && month <= 12) && (year >= 1 && year <= 9999)) {
        //  Convert date
        var dayStr = checkDayMonth(day);
        var monthStr = checkDayMonth(month);
        var todayDateRaw = new Date();
        var todayDate = new Date((todayDateRaw.getTime() - (todayDateRaw.getTimezoneOffset() * 60000)));
        var calculateYearString = year.toString() + "-" + monthStr + "-" + dayStr + "T00:00:00";
        var calculateYearRaw = new Date(calculateYearString);
        var elapsedTime = timeToBirthday ?
            (calculateYearRaw.getTime() - todayDate.getTime()) :
            (todayDate.getTime() - calculateYearRaw.getTime());
        return {
            seconds: Math.floor(elapsedTime / 1000),
            minutes: Math.floor(elapsedTime / 1000 / 60),
            hours: Math.floor(elapsedTime / 1000 / 60 / 60),
            days: Math.floor(elapsedTime / 1000 / 60 / 60 / 24),
            weeks: Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 7),
            month: Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 7 / 4.345),
            years: Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 365)
        };
    }
    else {
        return false;
    }
}
var data = calculateAge(3, 12, 2021, true);
console.log(data);
