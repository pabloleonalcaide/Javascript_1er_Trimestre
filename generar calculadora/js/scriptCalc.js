/**
 * Script Calculadora como Objeto 
 * @author Pablo Leon
 * @version 1.0
 */
{
    let calculadora = {
        total : "",        
        textBox: "",
        operando1: 0,
        operando2: 0,
        operador: "",
        number : "0",
        buttons : [
            "CE", "C", "%", "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", "0" ,"+/-", ",", "=" ],
        form : "",
        result : "",

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
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.clearLast;
                    break;
                    case 'CE':
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.clearAll;
                    break;
                    case ',':
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.setDecimal;
                    break;
                    default:
                    document.getElementById(calculadora.buttons[i]).onclick = calculadora.addNumber;
                    break; 
                }  
            }
        },
        //Remodelar cuando añadamos funcionalidad de verdad
        addNumber : function() {
            calculadora.total = calculadora.textBox.value;
            if (calculadora.number === 0) {
                if(this.value != 0 && this.value != '-'){    //no permitimos que ponga varios ceros seguidos al inicio
                    calculadora.operando1 = this.value;
                    calculadora.number = this.value;
                }
                calculadora.textBox.value = calculadora.number;
                
            }
            //Posible mejora --> operandos en un array, y buscar con includes()
            else if (calculadora.textBox.value ==='+' || calculadora.textBox.value === '-' ||calculadora.textBox.value ==='*' || calculadora.textBox.value === '/' ){
                calculadora.textBox.value = this.value;
                calculadora.operando2 = this.value;
            }else {
                if (this.value ==='+' || this.value === '-' ||this.value ==='*' || this.value === '/' ){
                    calculadora.textBox.value = this.value;
                    calculadora.operador.value = this.value;
                }                    
                else 
                    calculadora.textBox.value = (calculadora.total + this.value);                
            }
        },
        

        clearLast : function() {
            calculadora.textBox.value = calculadora.textBox.value.substring(0, calculadora.textBox.value.length-1)
            if(calculadora.textBox.value == "")
                calculadora.textBox.value = 0;
        },
        
        clearAll : function() {
            calculadora.result = 0;
            calculadora.number = 0;
            calculadora.textBox.value = 0;
        },
        
        setDecimal: function() {
            if(calculadora.textBox.value.indexOf(',') === -1) {
                calculadora.textBox.value +=  this.value;                
                
            }
        }
    };
 

    
    calculadora.paintCalc();
    calculadora.init();
}
