function calculateDateDiference(date1, date2) {
  let y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate();
  let y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();

  if (d1 < d2) {
      m1--;
      d1 += new Date(y2, m2, 1, 12);
  }
  if (m1 < m2) {
      y1--;
      m1 += 12;
  }
  return [y1 - y2, m1 - m2, (d1 - d2) ? (d1 - d2) : 0];
}

function calcularFechas(dia, mes, ano)
{
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth()+1;
  const currentYear = currentDate.getFullYear();

  //	Campos del selector, dia, mes y ano
  const customerDay   = dia;
  const customerMonth = mes;
  const customerYear  = ano;

  let curd = new Date(currentYear,currentMonth-1,currentDay);
  let cald = new Date(customerYear,customerMonth-1,customerDay);
  
  var diff =  Date.UTC(currentYear,currentMonth,currentDay,0,0,0) - Date.UTC(customerYear,customerMonth,customerDay,0,0,0);
  
  const dateDiference = calculateDateDiference(curd,cald);

  const dataInfo = {
    years:  dateDiference[0],
    months: dateDiference[1],
    days:   dateDiference[2],
    daysRaw: diff/1000/60/60/24,
    hoursRaw:  diff/1000/60/60,
    minutesRaw: diff/1000/60,
    secondsRaw: diff/1000
  }

  const stringFrase = dateDiference[0]+" años, "+dateDiference[1]+" meses y "+dateDiference[2]+" días";
  
  //alert(""+parseInt(customerYear)+"--"+dife[0]+"--"+1);
  const as = parseInt(customerYear) + dateDiference[0] + 1;

  var diff =  Date.UTC(as,customerMonth,customerDay,0,0,0)  - Date.UTC(currentYear,currentMonth,currentDay,0,0,0);
  const daysRemainings = diff/1000/60/60/24;
  const stringRestantes = dataInfo.days + " días para tu cumpleaños";	 
  console.log(stringRestantes," ---- ",stringFrase);
  console.log(dataInfo.secondsRaw, dataInfo.hoursRaw, dataInfo.daysRaw)
  return dataInfo;
}
console.log(calcularFechas(26, 11, 1966))