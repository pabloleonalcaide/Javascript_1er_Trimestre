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
			setVisibleMsg(spanCheck,"");
		}catch(e){
			setVisibleMsg(spanCheck,e.message);
		}try{
			expresions.checkButton(rb1,rb2);	
			setVisibleMsg(spanRadio,"");
		}catch(e){
			setVisibleMsg(spanRadio, e.message);
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
	let locateFirstError = () =>{
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
	let validateCheckBox = ()=>{

	try {
		if(expresions.checkTheCheckBox(inputCheckBox1,inputCheckBox2,inputCheckBox3))
			setVisibleMsg(spanCheck,"")
	} catch (e) {
		setVisibleMsg(spanCheck,e.message);
	}
	}
	/** Validate the Name input */
	let validateName =() =>{  
	  try{
	  	if(expresions.isEmpty(inputName)){			
		}else
			setVisibleMsg(spanName,"");
	  }catch (e) {
		  setVisibleMsg(spanName, e.message);
	  	}  
	};

	/** Validate the Phone input */
	let validatePhone = () =>{ 
  		try {
  			if(expresions.isEmpty(inputPhone)){
			}else{
				if(expresions.checkPhone(inputPhone))
					setVisibleMsg(spanPhone,"");	
			}
		  } catch (e) {
	  		setVisibleMsg(spanPhone,e.message);
  		}
	};

	/** Validate the Mail input */
	let validateMail = () =>{	   
	   try {
	   	if(expresions.isEmpty(inputMail)){
			}else{
				if(expresions.checkMail(inputMail))
					setVisibleMsg(spanMail,"");		
				}
   		} catch (e) {
			setVisibleMsg(spanMail,e.message);
   		}
	};
	/** Validate the Account input */
	let validateAccount = () =>{   
	   try {
	   	if(expresions.isEmpty(inputAccount)){
		}else{
			if(expresions.checkAccount(inputAccount))
				setVisibleMsg(spanAccount,"");
			}
	   } catch (e) {
			setVisibleMsg(spanAccount,e.message);	   
	   } 
	};

	/** Validate the DNI input*/	
	let validateDni = () =>{		   
	   try {
		   	if(expresions.isEmpty(inputDni)){
				}else{
					if(expresions.checkDni(inputDni))
						setVisibleMsg(spanDni,"");		
				}
   		} catch (e) {
			setVisibleMsg(spanDni,e.message);
   		}
	};

	/** Validate the Birth input */
	let validateBirth = () =>{		  
		  try {
		  	if(expresions.isEmpty(inputBirth)){
				}else{
					if(expresions.checkBirth(inputBirth))
						setVisibleMsg(spanBirth,"");
				}	
	  } catch (e) {
			setVisibleMsg(spanBirth,e.message);
	  }
	};

	/** Validate the URL input */
	let validateUrl = () =>{
		try{
			if(expresions.isEmpty(inputWeb)){
			}else{
				if(expresions.checkWeb(inputWeb))
					setVisibleMsg(spanWeb,"");		
			}
		}catch(e){
				setVisibleMsg(spanWeb,e.message);
		}		
	};
	/** Validate the Gender Select */
	let validateGender = () =>{		 
		 try {
	 		if(expresions.checkGender(inputGender)){
					setVisibleMsg(spanGender,"");
				}
		 }catch(e){
				setVisibleMsg(spanGender,e.message);		 
		 }	 
	};
	//Declaring variables
	let init = () =>{
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
		inputCheckBox3.addEventListener("blur",validateCheckBox);
		inputSubmit.addEventListener("click",validateForm);
	};
	window.onload = init;
}
