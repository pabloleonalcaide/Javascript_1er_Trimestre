/**
 * Required RegExps in the form
 * @author Pablo Leon Alcaide
 * @version 1.1
 */
{
let regexps = {
	patternMail : /^[_a-z0-9-]+([\._a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/ ,
	patternWeb : /^www\.(\w)*\.(\w){2,4}/ ,
	patternAccount : /^(\d{4})\-(\d{4})\-(\d{2})\-(\d{10})$/ ,
	patternPhone : /^[6789][123456789]{8}/ ,
	patternDni : /^\d{8}[A-Za-z]$/ 
};

/* Check*/
expresions = {
	/** Check if an input text is empty */
	isEmpty : function(inputfield){
		if(inputfield.value==null || inputfield.value=='')
			throw new Error('This input is required');
		return false;
	},
	/** check the checkbox */
	checkTheCheckBox : function(iCB1,iCB2,iCB3){
		if(!iCB1.checked && !iCB2.checked && !iCB3.checked)
			throw new Error("Checkbox not selected");
		return true;
	},
	/** Check if the mail has a correct format */
	checkMail : function(inputMail){
		if(!regexps.patternMail.test(inputMail.value))
			throw new Error("invalid Mail format")
		return true;
	},
	
	/** Check if the url has a correct format */
	checkWeb : function(inputWeb){
		if(!regexps.patternWeb.test(inputWeb.value))
			throw new Error("invalid Url format");
		return true;
	},

	/** Check if the account has a correct format */
	checkAccount : function(inputAccount){
		if(!regexps.patternAccount.test(inputAccount.value))
			throw new Error("invalid Account");
		return true;
	},

	/** Check if the date format is correct */
	checkBirth : function(inputBirth){
		let d = new Date(inputBirth.value);
		if(d == "Invalid Date")
			throw new Error('Invalid date');
		return true;
	},

	/** Check if the phone format is correct */
	checkPhone : function(inputPhone){
		if(!regexps.patternPhone.test(inputPhone.value))
			throw new Error('Invalid phone format');
		return true;
	},

	/** Check if the dni is valid */
	checkDni : function(inputDni){
		let letter = inputDni.value.substr(inputDni.value.length-1).toLowerCase();
		let number = parseInt(inputDni.value.slice(0,8));
		let letters = ['t','r','w','a','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','e'];
		let correctLetter = letters[number%23];

		if(regexps.patternDni.test(inputDni.value)) {		
			if(letter==correctLetter)
				return true;
			else
				throw new Error('Invalid Letter');
		}else
			throw new Error('Invalid Dni Pattern');
	},
	/** Check if at least one option is selected of the combobox */
	checkGender : function(inputGender){
		if(inputGender.value != "female" && inputGender.value != "male" && inputGender.value != "other")
			throw new Error ('Select Gender');
		return true;
	},
}
}