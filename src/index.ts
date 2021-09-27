function checkDayMonth(value: number){
  if(value <= 9 ){
    return "0"+value.toString();
  }
  else {
    return value.toString();
  }
}

function calculateAge(day:number, month:number, year: number) {
  if((day >= 1 && day <= 31) && (month >= 1 && month <= 12) && (year >= 1 && year <= 9999)) {
    //  conver date
    let dayStr:string = checkDayMonth(day);
    let monthStr: string = checkDayMonth(month);
    
    const todayDateRaw: Date = new Date();
    const todayDate: Date = new Date((todayDateRaw.getTime() - (todayDateRaw.getTimezoneOffset() * 60000)));
  
    const pastYearString: string = year.toString()+"-"+monthStr+"-"+dayStr+"T00:00:00";
    const pastYearRaw: Date = new Date(pastYearString);
    
    const pastTime = (todayDate.getTime() - pastYearRaw.getTime());
    return {
      seconds:  Math.floor(pastTime/1000),
      minutes:  Math.floor(pastTime/1000/60),
      hours:    Math.floor(pastTime/1000/60/60),
      days:     Math.floor(pastTime/1000/60/60/24),
      weeks:    Math.floor(pastTime/1000/60/60/24/7),
      month:    Math.floor(pastTime/1000/60/60/24/7/4.345), //Average time of how many weeks a month have
      years:    Math.floor(pastTime/1000/60/60/24/365)
    }
  } else {
    return false;
  }
}
const data:any = calculateAge(3, 12, 1999)
console.log(data.month/12);