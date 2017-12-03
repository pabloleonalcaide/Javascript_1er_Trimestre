/**
 * Required RegExps in the form
 * @author Pablo Leon Alcaide
 * @version 1.0
 */

	/** Check if an input text is empty */
	let isEmpty = function(inputfield){
		if(inputfield.value==null || inputfield.value=='')
			return true;
		return false;
	}
	/** check the checkbox */
	let checkTheCheckBox = function(iCB1,iCB2,iCB3){
		if(!iCB1.checked && !iCB2.checked && !iCB3.checked)
			return false;
		return true;
	}
	/** Check if the mail has a correct format */
	let checkMail = function(inputMail){
		let pattern = /^[_a-z0-9-]+([\._a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
		return pattern.test(inputMail.value);
	}
	
	/** Check if the url has a correct format */
	let checkWeb = function(inputWeb){
		let pattern = /^www\.(\w)*\.(\w){2,4}/;
		return pattern.test(inputWeb.value);
	}

	/** Check if at least one option is selected of the combobox */
	let checkGender = function(){
		if(inputGender.value != "female" && inputGender.value != "male" && inputGender.value != "other")
			return false;
		return true;
	}

	/** Check if the account has a correct format */
	let checkAccount = function(inputAccount){
		let pattern = /^(\d{4})\-(\d{4})\-(\d{2})\-(\d{10})$/;
		return pattern.test(inputAccount.value);
	}

	let checkBirth = function(inputBirth){
		let d = new Date(inputBirth.value);
		if(d == "Invalid Date")
			return false;
		return true;
	}
	let checkPhone = function(inputPhone){
		let pattern = /^[6789][123456789]{8}/;
			return pattern.test(inputPhone.value);

	}
	let checkDni = function(inputDni){
	
		let pattern= /^\d{8}[A-Za-z]$/;

		let letter = inputDni.value.substr(inputDni.value.length-1)
		letter = letter.toLowerCase();
		let number = parseInt(inputDni.value.slice(0,8));
		let letters = ['t','r','w','a','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','e'];
		let correctLetter = letters[number%23];

		if(pattern.test(inputDni.value)) {		
			if(letter==correctLetter){
				return true;
			}
			else{
				return false;
			}
		}else{
			return false;
		}
	}

	
	