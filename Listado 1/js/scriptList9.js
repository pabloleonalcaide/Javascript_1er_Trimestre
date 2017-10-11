/**
* Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si es correcta.
* Si lo fuera, ha de mostrar la hora un segundo después
* @author Pablo Leon Alcaide <pabloleonpsico@gmail.com>
* @version 1.0 
*/

/** Check if the hour is correct */
function checkHour(hour){
	if(hour >0 && hour <=24)
		return true;
	return false;
}

/** Check if the minutes or seconds are correct */
function checkMinuteSecond(time){
	if(time > 0 && time <= 60)
		return true;
	return false;
}
/**Return the time in the next second */
function nextSecond(seconds,minutes,hour){
	let newTime="";
	      if(seconds == 59 && minutes == 59){ //new second and new minute
            if(hour==24){
                newTime = "01:00:00";
            }else{
                newTime = (parseInt(hour)+1)+":00:00";
            }
        }else{
            if ((parseInt(seconds)+1) < 60) //not new minute
                newTime = hour+":"+minutes+":"+(parseInt(seconds)+1);
            else {
                if((parseInt(minutes)+1) < 60) 
                    newTime = hour+":"+(parseInt(minutes)+1)+":00";
                else{
                    newTime= (parseInt(hour)+1)+":00:00";
                }
            }
        }

let second, minute, hour;
do{
second = prompt("por favor, introduce los segundos");
}while(isNaN(second));
if(checkMinuteSecond(second)){
	do{
		minute= prompt("por favor, introduce los minutos");
	}while(isNaN(minute));
	
	if(checkMinuteSecond(minute)){
		  
	  do {
	  	hour = prompt("por favor, introduce la hora");
	  } while (isNaN(hour));
	
		if(checkHour(hour)){

			alert("los datos son correctos. El siguiente segundo será en: "+nextSecond(second,minute,hour));
		}else 
			alert("hora incorrecta");
	}else{
		alert("minutos incorrectos");}
}else{
	alert("segundos incorrectos");
}
