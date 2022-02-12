function checkDayMonth(value: number){
  if( value <= 9 ){ return "0"+value.toString(); } 
  else { return value.toString(); }
}
/**
 * Add two numbers together
 * @param  {Number} day 
 * @param  {Number} month 
 * @param  {Number} year 
 * @param  {boolean} timeToBirthday If enabled, returns the date values from the actual date to the birthday (must replace the input values with the ones for the next birthday)
 * @return {Dictionary}  Returns a dictionary with the days, months, years, etc. of the person's life
 */
function calculateAge(day:number, month:number, year: number, timeToBirthday: boolean) {
  if((day >= 1 && day <= 31) && (month >= 1 && month <= 12) && (year >= 1 && year <= 9999)) {
    //  Convert date
    let dayStr:string = checkDayMonth(day);
    let monthStr: string = checkDayMonth(month);
    
    const todayDateRaw: Date = new Date();
    const todayDate: Date = new Date((todayDateRaw.getTime() - (todayDateRaw.getTimezoneOffset() * 60000)));
    
    const calculateYearString: string = year.toString()+"-"+monthStr+"-"+dayStr+"T00:00:00";
    const calculateYearRaw: Date = new Date(calculateYearString);
    
    const elapsedTime = timeToBirthday ?
                        (calculateYearRaw.getTime() - todayDate.getTime()) :
                        (todayDate.getTime() - calculateYearRaw.getTime());
    return {
      seconds:  Math.floor(elapsedTime/1000),
      minutes:  Math.floor(elapsedTime/1000/60),
      hours:    Math.floor(elapsedTime/1000/60/60),
      days:     Math.floor(elapsedTime/1000/60/60/24),
      weeks:    Math.floor(elapsedTime/1000/60/60/24/7),
      month:    Math.floor(elapsedTime/1000/60/60/24/7/4.345), //Average time of how many weeks a month have
      years:    Math.floor(elapsedTime/1000/60/60/24/365)
    }
  } else {
    return false;
  }
}

// const data:any = calculateAge(3, 12, 2021, true)
// console.log(data);