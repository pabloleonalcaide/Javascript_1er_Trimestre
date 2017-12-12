/**
 * Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
*
* Introduce 10 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
* Eliminar 10 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
*  @author Pablo Leon
*  @version 1.0
 */

	var arrayPush = new Array(10);
	var arrayUnshift = new Array(10);
/**
 * Comprobación introducir elementos
 */
let testAniadir = function(){

	//Comprobamos eficiencia con push
	let tpush0 = performance.now();
	for (let i = 0; i<arrayPush; i++){
		arrayPush.push('push');
	}
	let tpush1 = performance.now();

	
	//Comprobamos eficiencia con unshift
	let tunshift0 = performance.now();
	for (let i = 0; i<arrayUnshift; i++){
		arrayUnshift.unshift('unshift');
	}
	let tunshift1 = performance.now();


	var timePush = (tpush1 - tpush0);
	var timeUnshift = (tunshift1 - tunshift0);

	
	if(timePush > timeUnshift){
		document.write('<br> Unshift es más eficiente que Push');
	}else if(timePush < timeUnshift){
		document.write('<br> Unshift es menos eficiente que Push');
	}else{
		document.write('<br> Ambos(unshift y push) han tardado lo mismo');
	}
}
/**
 * Comprobación eliminar elementos
 */
let testEliminar = function(){
//Comprobamos eficiencia con push
	let tpop0 = performance.now();
	while(arrayPush.length>0){
		arrayPush.pop();
	}

	let tpop1 = performance.now();

	//Comprobamos eficiencia con unshift
	let tshift0 = performance.now();
	while(arrayUnshift.length>0){
		arrayUnshift.shift();
	}
	let tshift1 = performance.now();

	let timePop = tpop1 - tpop0;
	let timeshift = tshift1 - tshift0;
	if(timePop > timeshift){
		document.write('<br> Shift es más eficiente que pop');
	}else if(timePop < timeshift){
		document.write('<br> Shift es menos eficiente que Pop');
	}else{
		document.write('<br> Ambos(shift y pop) han tardado lo mismo');
	}
}

testAniadir();
testEliminar();