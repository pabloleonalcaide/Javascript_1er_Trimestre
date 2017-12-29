/**
 *  Script Ejercicio 2 - Examen Diciembre
 *  @author Pablo Leon Alcaide
 *  @version 2.0
 */
//inputs
const name = document.getElementById("name");
const subname1 = document.getElementById("subname1");
const subname2 = document.getElementById("subname2");
const birth = document.getElementById("birth");
//error messages
const errName = document.getElementById("errName");
const errSubname1 = document.getElementById("errSubName1");
const errSubname2 = document.getElementById("errSubName2");
const errBirth = document.getElementById("errBirth");
//button
const submit = document.getElementById("create");

/**
 * Alert if an input is empty
 * @param      string  input   The input
 * @param      string  span    The span
 * @return     boolean 
 */
isEmptyInput = (input,span) =>{
	input.value.length === 0 ? span.innerHTML = "Campo obligatorio" : checkDatePattern();
	return span.innerHTML !== "";
}
/**
 * Alert if the user Date has valid format or not
 * @return     boolean
 */
checkDatePattern = ()=>{
	const datePattern = /^\d{2}-\d{2}-\d{4}$/ ;
	datePattern.test(birth.value) ? checkValidDate() : errBirth.innerHTML = "Formato de Fecha Inválido" ;
}
/**
 * Alert if the user Date is really a Date
 * @return     boolean
 */
checkValidDate =() =>{
	inputDate = birth.value.replace(/-/g,'/');
	date = new Date(inputDate);
	date  == "Invalid Date" ? errBirth.innerHTML = "Fecha Inválida" : errBirth.innerHTML ="";
	return errBirth.innerHTML === "";
}

name.addEventListener("blur", isEmptyInput.bind(null,name,errName),false);
subname1.addEventListener("blur", isEmptyInput.bind(null,subname1,errSubname1),false);
subname2.addEventListener("blur", isEmptyInput.bind(null,subname2,errSubname2),false);
birth.addEventListener("blur", isEmptyInput.bind(null,birth,errBirth),false);
