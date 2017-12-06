/**
 * Required RegExps in the form
 * @author Pablo Leon Alcaide
 * @version 1.0
 */
{
let regexps = {
	patternMail : /^[_a-z0-9-]+([\._a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/ ,
	patternWeb : /^www\.(\w)*\.(\w){2,4}/ ,
	patternAccount : /^(\d{4})\-(\d{4})\-(\d{2})\-(\d{10})$/ ,
	patternPhone : /^[6789][123456789]{8}/ ,
	patternDni : /^\d{8}[A-Za-z]$/ 
};

expresions = {
	/** Check if an input text is empty */
	isEmpty : function(inputfield){
		if(inputfield.value==null || inputfield.value=='')
			throw 'El campo está vacío';
		return false;
	},
	/** check the checkbox */
	checkTheCheckBox : function(iCB1,iCB2,iCB3){
		if(!iCB1.checked && !iCB2.checked && !iCB3.checked)
			return false;
		return true;
	},
	/** Check if the mail has a correct format */
	checkMail : function(inputMail){
		return regexps.patternMail.test(inputMail.value);
	},
	
	/** Check if the url has a correct format */
	checkWeb : function(inputWeb){
		return regexps.patternWeb.test(inputWeb.value);
	},

	/** Check if the account has a correct format */
	checkAccount : function(inputAccount){
		return regexps.patternAccount.test(inputAccount.value);
	},

	/** Check if the date format is correct */
	checkBirth : function(inputBirth){
		let d = new Date(inputBirth.value);
		if(d == "Invalid Date")
			return false;
		return true;
	},

	/** Check if the phone format is correct */
	checkPhone : function(inputPhone){
			return regexps.patternPhone.test(inputPhone.value);
	},

	/** Check if the dni is valid */
	checkDni : function(inputDni){
		
		let letter = inputDni.value.substr(inputDni.value.length-1)
		letter = letter.toLowerCase();
		let number = parseInt(inputDni.value.slice(0,8));
		let letters = ['t','r','w','a','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','e'];
		let correctLetter = letters[number%23];

		if(regexps.patternDni.test(inputDni.value)) {		
			if(letter==correctLetter){
				return true;
			}
			else{
				return false;
			}
		}else{
			return false;
		}
	},
	/** Check if at least one option is selected of the combobox */
	checkGender : function(){
		if(inputGender.value != "female" && inputGender.value != "male" && inputGender.value != "other")
			return false;
		return true;
	},
}
}