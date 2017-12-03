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

	/** Identify the first error in the form */
	let locateFirstError = function(){
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
	/** Validate the Name input */
	let validateName =function(){  
	  try {
	  	if(isEmpty(inputName)){			
		}else {
			paintNormal(spanName);
		}
	  	} catch (e) {
		  paintVacio(spanName);
	  	}
	  
	}

	/** Validate the Phone input */
	let validatePhone = function(){
		  
  		try {
  			if(isEmpty(inputPhone)){
			}else{
				if(checkPhone(inputPhone))
					paintNormal(spanPhone);
				else {
					setVisibleMsj(spanPhone,"Introduce un teléfono válido");	
				}		
			}
		  } catch (e) {
	  	paintVacio(spanPhone);
  		}
	}
	/** Validate the Mail input */
	let validateMail = function(){	   
	   try {
	   	if(isEmpty(inputMail)){
				}else{
					if(checkMail(inputMail))
						paintNormal(spanMail);
					else {
						setVisibleMsj(spanMail,"Introduce un email válido");	
					}		
				}
   		} catch (e) {
			paintVacio(spanMail);
   }
   
		}
	/** Validate the Account input */
	let validateAccount = function(){   
	   try {
	   	if(isEmpty(inputAccount)){
		}else{
			if(checkAccount(inputAccount))
				paintNormal(spanAccount);
			else {
				setVisibleMsj(spanAccount,"Introduce un número de cuenta válido");	
				}		
					}
	   } catch (e) {
			paintVacio(spanAccount);	   
	   }
	   
		}
	/** Validate the DNI input*/	
	let validateDni = function(){
			   
	   try {
		   	if(isEmpty(inputDni)){
				}else{
					if(checkDni(inputDni))
						paintNormal(spanDni);
					else {
						setVisibleMsj(spanDni,"Introduce un dni válido");	
					}		
				}
   		} catch (e) {
					paintVacio(spanDni);
   		}
   
	}

	/** Validate the Birth input */
	let validateBirth = function(){
			  
		  try {
		  	if(isEmpty(inputBirth)){
				}else{
					if(checkBirth(inputBirth))
						paintNormal(spanBirth);
					else {
						setVisibleMsj(spanBirth,"El formato de fecha no es válido");	
					}		
				}	
	  } catch (e) {
			paintVacio(spanBirth);
	  }
	  
	}

	/** Validate the URL input */
	let validateUrl = function(){
		try{
			if(isEmpty(inputWeb)){
			}else{
				if(checkWeb(inputWeb))
					paintNormal(spanWeb);
				else {
					setVisibleMsj(spanWeb,"Introduce un formato válido de url");	
				}		
			}
		}catch(e){
				paintVacio(spanWeb);
		}		
	}
	/** Validate the Gender Select */
	let validateGender = function(){
			 
		 try {
	 		if(isEmpty(inputGender)){
				}else {
					paintNormal(spanGender);
				}
		 }catch(e){
				setVisibleMsj(spanGender,"elige uno");		 
		 }
		 
	}


	// Adding the event listeners 
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