/**
 * Form script
 * @author Pablo Leon Alcaide
 * @version 1.1
 */
{
	//Declarations
	let spanName, spanDni, spanBirth, spanMail, spanAccount, spanWeb, spanGender, spanCheck, spanRadio, spanSubmit;
	let inputName, inputPhone, inputDni, inputBirth, inputMail, inputAccount, inputWeb, inputGender;
	let inputCheckBox1, inputCheckBox2, inputCheckBox3, inputSubmit, rb1, rb2;

	/** When click on submit, check all the fields */
	let validateForm = function(event){
		try{
			expresions.checkTheCheckBox(inputCheckBox1,inputCheckBox2,inputCheckBox3);
			setVisibleMsj(spanCheck,"");
		}catch(e){
			setVisibleMsj(spanCheck,e.message);
		}try{
			expresions.checkButton(rb1,rb2);	
			setVisibleMsj(spanRadio,"");
		}catch(e){
			setVisibleMsj(spanRadio, e.message);
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
		}else
			setVisibleMsj(spanName,"");
	  }catch (e) {
		  setVisibleMsj(spanName, e.message);
	  	}  
	};

	/** Validate the Phone input */
	let validatePhone = function(){ 
  		try {
  			if(expresions.isEmpty(inputPhone)){
			}else{
				if(expresions.checkPhone(inputPhone))
					setVisibleMsj(spanPhone,"");	
			}
		  } catch (e) {
	  		setVisibleMsj(spanPhone,e.message);
  		}
	};

	/** Validate the Mail input */
	let validateMail = function(){	   
	   try {
	   	if(expresions.isEmpty(inputMail)){
			}else{
				if(expresions.checkMail(inputMail))
					setVisibleMsj(spanMail,"");		
				}
   		} catch (e) {
			setVisibleMsj(spanMail,e.message);
   		}
	};
	/** Validate the Account input */
	let validateAccount = function(){   
	   try {
	   	if(expresions.isEmpty(inputAccount)){
		}else{
			if(expresions.checkAccount(inputAccount))
				setVisibleMsj(spanAccount,"");
			}
	   } catch (e) {
			setVisibleMsj(spanAccount,e.message);	   
	   } 
	};

	/** Validate the DNI input*/	
	let validateDni = function(){		   
	   try {
		   	if(expresions.isEmpty(inputDni)){
				}else{
					if(expresions.checkDni(inputDni))
						setVisibleMsj(spanDni,"");		
				}
   		} catch (e) {
					setVisibleMsj(spanDni,e.message);
   		}
	};

	/** Validate the Birth input */
	let validateBirth = function(){		  
		  try {
		  	if(expresions.isEmpty(inputBirth)){
				}else{
					if(expresions.checkBirth(inputBirth))
						setVisibleMsj(spanBirth,"");
				}	
	  } catch (e) {
			setVisibleMsj(spanBirth,e.message);
	  }
	};

	/** Validate the URL input */
	let validateUrl = function(){
		try{
			if(expresions.isEmpty(inputWeb)){
			}else{
				if(expresions.checkWeb(inputWeb))
					setVisibleMsj(spanWeb,"");		
			}
		}catch(e){
				setVisibleMsj(spanWeb,e.message);
		}		
	};
	/** Validate the Gender Select */
	let validateGender = function(){		 
		 try {
	 		if(expresions.checkGender(inputGender)){
					setVisibleMsj(spanGender,"");
				}
		 }catch(e){
				setVisibleMsj(spanGender,e.message);		 
		 }	 
	};
	//Declaring variables
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
