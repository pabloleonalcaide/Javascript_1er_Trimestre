function calculateAverage(sum,count){
	return sum/count;
}

let sum= 0;
let count =0;
let number=0;
do{
	number= parseInt(prompt("introduce un número"));
	if(number>0){
		sum += number;
		count++;
	}

}while(number>0);

alert("introduciste un número negativo, la media de los anteriores es: "+calculateAverage(sum,count));