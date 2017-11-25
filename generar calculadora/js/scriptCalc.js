/**
 * Script Calculadora como Objeto 
 * @author Pablo Leon
 * @version 1.1
 */
{
    let calculadora = {
        textBox: "0",
        operando1: 0,
        operando2: 0,
        hasComa: false,
        operador: "",
        hasOperador: false,
        buttons : [
            "CE", "C", "%", "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", "0" ,"+/-", ",", "=" ],
        form : "",
        result : "0",

        /** Generate Form element */
        paintStructure: function() {
            calculadora.form = document.createElement('form');
            let div = document.getElementById("calculadora");
            div.appendChild(calculadora.form);
        },
        
        /** Generate Screen of result */
        paintScreen: function() {
            calculadora.result = calculadora.form.appendChild(document.createElement('input'));
            calculadora.result.type = "text";
            calculadora.result.id = "result";
            calculadora.result.value = "0";
            calculadora.result.disabled = "disabled"
        },
        
        /** Generate Buttons */
        paintButtons : function() {
            for (let i = 0; i < calculadora.buttons.length; i++) {
                if(i % 4 == 0)
                  calculadora.form.appendChild(document.createElement('br'));
                let boton = calculadora.form.appendChild(document.createElement('input'));     
                let atributoType = document.createAttribute('type');
                let atributoValue = document.createAttribute('value');
                let atributoID = document.createAttribute('id');
                boton.type = "button";
                boton.value = calculadora.buttons[i];
                boton.id = calculadora.buttons[i];    
            }
            document.body.appendChild(calculadora.form); 
            
            calculadora.textBox = document.getElementById("result");   
        },
        
        paintCalc: function() {
            calculadora.paintStructure();
            calculadora.paintScreen();
            calculadora.paintButtons();
        },
        
        init: function() {
            for (let i = 0; i < calculadora.buttons.length; i++) {           
                switch(calculadora.buttons[i]) {
                    case 'C':
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.clearLast;break;
                    case 'CE':
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.clearAll;break;
                    case ',':
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.setDecimal;break;
                    case '=': 
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.doOperation; break;
                    case '%': 
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.percent; break;
                    case '+/-':
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.changeSimbol; break;
                    default:
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.addNumber; break; 
                }  
            }
        },
        addNumber : function() {
            //Si había un 0 en pantalla
            if (calculadora.textBox.value === "0"){
                if(this.value ==='+' || this.value === '-' ||this.value ==='*' || this.value === '/' ){
                }   
                else if(this.value != 0){    //no permitimos que ponga varios ceros seguidos al inicio
                    calculadora.operando1 = this.value;
                    calculadora.textBox.value = this.value;
                }
            //si lo que ha introducido es una operación                
            }else if (this.value ==='+' || this.value === '-' ||this.value ==='*' || this.value === '/' ){
                calculadora.operador=this.value;
                calculadora.hasOperador = true;
                
            }else { //Si no hay una operación
                if (calculadora.operador !=""){ //si hay un operador
                    if (calculadora.operando2 === 0)
                        calculadora.operando2 = this.value;
                    else
                        calculadora.operando2 += this.value;
                    calculadora.textBox.value = calculadora.operando2
                }                  
                else{
                    calculadora.operando1 += this.value;
                    calculadora.textBox.value = calculadora.operando1;
                }
                    

            }
        },
        
        //Despejar todo
        clearLast : function() {
            calculadora.textBox.value = calculadora.textBox.value.substring(0, calculadora.textBox.value.length-1)
            if(calculadora.textBox.value == "")
                calculadora.textBox.value = "0";
        },
        
        clearAll : function() {
            calculadora.textBox.value = "0";
        },
        
        setDecimal: function() {
            if(calculadora.textBox.value.indexOf(',') === -1) {
                calculadora.textBox.value +=  this.value;                
            }
        },
        changeSimbol: function(){
                //
        },
        doOperation: function(){
            switch(calculadora.operador){
                case '+': 
                    calculadora.textBox.value = (parseFloat(calculadora.operando1) + parseFloat(calculadora.operando2)); break;
                case '-': 
                    calculadora.textBox.value = (parseFloat(calculadora.operando1) - parseFloat(calculadora.operando2)); break;
                case '*': 
                    calculadora.textBox.value = (parseFloat(calculadora.operando1) * parseFloat(calculadora.operando2)); break;
                case '/': 
                    calculadora.textBox.value = (parseFloat(calculadora.operando1) / parseFloat(calculadora.operando2)); break;
            }
            calculadora.operando1 = calculadora.textBox.value;
            calculadora.operando2 = 0;
            calculadora.operador = "";
        },

        percent: function(){
            if(calculadora.operando2 = 0){
                        calculadora.textBox.value = (calculadora.operando1 /100);
                        calculadora.operando1 = 0;
            }
        },
        //comprobamos si es una operación
        isOperation:function(){
            if(this.value ==='+' || this.value === '-' ||this.value ==='*' || this.value === '/' )
                return true;
            return false;
        }
    };
 

    
    calculadora.paintCalc();
    calculadora.init();
}
