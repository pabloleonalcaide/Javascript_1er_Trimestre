/**
 * Form script
 * @author Pablo Leon Alcaide
 */
{
	//Inputs
	let inputName = document.getElementById("name");
	let inputPhone= document.getElementById("phone");
	let inputDni = document.getElementById("dni");
	let inputBirth = document.getElementById("birth");
	let inputMail = document.getElementById("mail");
	let inputAccount = document.getElementById("account");
	let inputWeb = document.getElementById('web');
	let inputGender = document.getElementById("gender");
	let inputCheckBox1 = document.getElementById("cb1");
	let inputCheckBox2 = document.getElementById("cb2");
	let inputCheckBox3 = document.getElementById("cb3");
	let inputSubmit = document.getElementById("submit");
	let rb1 = document.getElementById('radio1');
	let rb2 = document.getElementById('radio2');

	//Span
	let spanName = document.getElementById("errName");
	let spanPhone = document.getElementById("errPhone");
	let spanDni = document.getElementById("errDni");
	let spanBirth = document.getElementById("errBirth");
	let spanMail = document.getElementById("errMail");
	let spanAccount = document.getElementById("errAccount");
	let spanWeb = document.getElementById("errWeb");
	let spanGender = document.getElementById("errGender");
	let spanCheck = document.getElementById("errCheck");
	let spanRadio = document.getElementById("errRadio");
	let spanSubmit = document.getElementById("errSubmit");

	/** When click on submit, check all the fields */
	let validateForm = function(event){
		if(!checkTheCheckBox(inputCheckBox1,inputCheckBox2,inputCheckBox3)){
			setVisibleMsj(spanCheck,"elige al menos uno");
		}else{
			paintNormal(spanCheck);
			}
		if(!rb2.checked && !rb1.checked){
			setVisibleMsj(spanRadio,'selecciona un radio button');
		}else{
			paintNormal(spanRadio);
		}
		let idFirstError = locateFirstError();
		if(idFirstError != null){
			event.preventDefault();
			document.getElementById(idFirstError).focus();						
		}else{
			document.write('<h1>Success!</h1>'+inputName.value+', Your form has been sent to your mail: '+inputMail.value);
			document.close();
		}
		
		
	}

	var locateFirstError = function(){
		let first = null;
		validateGender();
		if(spanGender.innerHTML !="")
			first ="gender";
		validateUrl();
		if(spanWeb.innerHTML != "")
			first ="web";
		validateAccount();
		if(spanAccount.innerHTML != "")
			first="account";
		validateMail();
		if(spanMail.innerHTML != "")
			first ="mail";
		validateBirth();
		if(spanBirth.innerHTML != "")
			first = "birth";
		validateDni();
		if(spanDni.innerHTML!= "")
			first = "dni";
		validatePhone();
		if(spanPhone.innerHTML!= "")
			first = "phone";
		validateName();
		if(spanName.innerHTML != "")
			first = "name";
		return first;
	}
	let validateName =function(){
		if(isEmpty(inputName)){
			paintVacio(spanName);
		}else {
			paintNormal(spanName);
		}
	}
	let validatePhone = function(){
		if(isEmpty(inputPhone)){
			paintVacio(spanPhone);
		}else{
			if(checkPhone(inputPhone))
				paintNormal(spanPhone);
			else {
				setVisibleMsj(spanPhone,"Introduce un teléfono válido");	
			}		
		}
	}
	let validateMail = function(){
			if(isEmpty(inputMail)){
				paintVacio(spanMail);
			}else{
				if(checkMail(inputMail))
					paintNormal(spanMail);
				else {
					setVisibleMsj(spanMail,"Introduce un email válido");	
				}		
			}
		}

	let validateAccount = function(){
			if(isEmpty(inputAccount)){
				paintVacio(spanAccount);
			}else{
				if(checkAccount(inputAccount))
					paintNormal(spanAccount);
				else {
					setVisibleMsj(spanAccount,"Introduce un número de cuenta válido");	
				}		
			}
		}
	let validateDni = function(){
			if(isEmpty(inputDni)){
				paintVacio(spanDni);
			}else{
				if(checkDni(inputDni))
					paintNormal(spanDni);
				else {
					setVisibleMsj(spanDni,"Introduce un dni válido");	
				}		
			}
	}
	let validateBirth = function(){

		if(isEmpty(inputBirth)){
				paintVacio(spanBirth);
			}else{
				if(checkBirth(inputBirth))
					paintNormal(spanBirth);
				else {
					setVisibleMsj(spanBirth,"El formato de fecha no es válido");	
				}		
			}	
	}
	let validateUrl = function(){

		if(isEmpty(inputWeb)){
			paintVacio(spanWeb);
		}else{
			if(checkWeb(inputWeb))
				paintNormal(spanWeb);
			else {
				setVisibleMsj(spanWeb,"Introduce un formato válido de url");	
			}		
		}	
	}

	let validateGender = function(){
		if(isEmpty(inputGender)){
			setVisibleMsj(spanGender,"elige uno");
		}else {
			paintNormal(spanGender);
		}
	}
	inputName.addEventListener("blur",validateName);
	inputPhone.addEventListener("blur",validatePhone);
	inputMail.addEventListener("blur", validateMail);
	inputAccount.addEventListener("blur",validateAccount);
	inputDni.addEventListener("blur", validateDni);
	inputBirth.addEventListener("blur",validateBirth);
	inputWeb.addEventListener("blur",validateUrl);
	inputGender.addEventListener("blur", validateGender);
	inputSubmit.addEventListener("click",validateForm);

}