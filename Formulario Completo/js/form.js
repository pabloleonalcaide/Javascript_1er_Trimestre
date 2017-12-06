/**
 * Form script
 * @author Pablo Leon Alcaide
 */
{
	//Declarations
	let spanName;
	let spanDni;
	let spanBirth;
	let spanMail;
	let spanAccount;
	let spanWeb;
	let spanGender;
	let spanCheck;
	let spanRadio;
	let spanSubmit;
	let inputName; 
	let inputPhone;
	let inputDni; 
	let inputBirth;
	let inputMail;
	let inputAccount;
	let inputWeb;
	let inputGender;
	let inputCheckBox1; 
	let inputCheckBox2; 
	let inputCheckBox3; 
	let inputSubmit;
	let rb1;
	let rb2;

	/** When click on submit, check all the fields */
	let validateForm = function(event){
		if(!expresions.checkTheCheckBox(inputCheckBox1,inputCheckBox2,inputCheckBox3)){
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
	};

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
	};

	/** Validate the Name input */
	let validateName =function(){  
	  try{
	  	if(expresions.isEmpty(inputName)){			
		}else {
			paintNormal(spanName);
		}
	  }catch (e) {
		  paintVacio(spanName);
	  	}  
	};

	/** Validate the Phone input */
	let validatePhone = function(){ 
  		try {
  			if(expresions.isEmpty(inputPhone)){
			}else{
				if(expresions.checkPhone(inputPhone))
					paintNormal(spanPhone);
				else {
					setVisibleMsj(spanPhone,"Introduce un teléfono válido");	
				}		
			}
		  } catch (e) {
	  		paintVacio(spanPhone);
  		}
	};

	/** Validate the Mail input */
	let validateMail = function(){	   
	   try {
	   	if(expresions.isEmpty(inputMail)){
				}else{
					if(expresions.checkMail(inputMail))
						paintNormal(spanMail);
					else {
						setVisibleMsj(spanMail,"Introduce un email válido");	
					}		
				}
   		} catch (e) {
			paintVacio(spanMail);
   		}
	};
	/** Validate the Account input */
	let validateAccount = function(){   
	   try {
	   	if(isEmpty(inputAccount)){
		}else{
			if(expresions.checkAccount(inputAccount))
				paintNormal(spanAccount);
			else {
				setVisibleMsj(spanAccount,"Introduce un número de cuenta válido");	
				}		
					}
	   } catch (e) {
			paintVacio(spanAccount);	   
	   } 
	};

	/** Validate the DNI input*/	
	let validateDni = function(){		   
	   try {
		   	if(expresions.isEmpty(inputDni)){
				}else{
					if(expresions.checkDni(inputDni))
						paintNormal(spanDni);
					else {
						setVisibleMsj(spanDni,"Introduce un dni válido");	
					}		
				}
   		} catch (e) {
					paintVacio(spanDni);
   		}
	};

	/** Validate the Birth input */
	let validateBirth = function(){		  
		  try {
		  	if(expresions.isEmpty(inputBirth)){
				}else{
					if(expresions.checkBirth(inputBirth))
						paintNormal(spanBirth);
					else {
						setVisibleMsj(spanBirth,"El formato de fecha no es válido");	
					}		
				}	
	  } catch (e) {
			paintVacio(spanBirth);
	  }
	};

	/** Validate the URL input */
	let validateUrl = function(){
		try{
			if(expresions.isEmpty(inputWeb)){
			}else{
				if(expresions.checkWeb(inputWeb))
					paintNormal(spanWeb);
				else {
					setVisibleMsj(spanWeb,"Introduce un formato válido de url");	
				}		
			}
		}catch(e){
				paintVacio(spanWeb);
		}		
	};
	/** Validate the Gender Select */
	let validateGender = function(){		 
		 try {
	 		if(expresions.isEmpty(inputGender)){
				}else {
					paintNormal(spanGender);
				}
		 }catch(e){
				setVisibleMsj(spanGender,"elige uno");		 
		 }	 
	};
	let init = function(){
	//Inputs
		inputName = document.getElementById("name"); 
		inputPhone= document.getElementById("phone");
		inputDni = document.getElementById("dni");
		inputBirth = document.getElementById("birth");
		inputMail = document.getElementById("mail");
		inputAccount = document.getElementById("account");
		inputWeb = document.getElementById('web');
		inputGender = document.getElementById("gender");
		inputCheckBox1 = document.getElementById("cb1");
		inputCheckBox2 = document.getElementById("cb2");
		inputCheckBox3 = document.getElementById("cb3");
		inputSubmit = document.getElementById("submit");
		rb1 = document.getElementById('radio1');
		rb2 = document.getElementById('radio2');

		//Span
		spanName = document.getElementById("errName");
		spanPhone = document.getElementById("errPhone");
		spanDni = document.getElementById("errDni");
		spanBirth = document.getElementById("errBirth");
		spanMail = document.getElementById("errMail");
		spanAccount = document.getElementById("errAccount");
		spanWeb = document.getElementById("errWeb");
		spanGender = document.getElementById("errGender");
		spanCheck = document.getElementById("errCheck");
		spanRadio = document.getElementById("errRadio");
		spanSubmit = document.getElementById("errSubmit");
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
	};
	window.onload = init;
}
