{
    var calculadora = {
        acumulado : "",        
        cajaTexto: "",
        numero : 0,
        botones : ["CE", "C", "%", "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", "0" ,"+-", ",", "=" ],
        formulario : "",
        resultado : "",
        crearFormulario: function() {
            calculadora.formulario = document.createElement('form');

        },
        
        crearResultado: function() {
            calculadora.resultado = calculadora.formulario.appendChild(document.createElement('input'));
            calculadora.resultado.type = "text";
            calculadora.resultado.id = "output";
            calculadora.resultado.value = "0";
        },
        
        crearBotones : function() {
            for (let i = 0; i < calculadora.botones.length; i++) {
                // Insertamos un salto de linea cada 4 botones
                if(i % 4 == 0)
                calculadora.formulario.appendChild(document.createElement('br'));
                let boton = calculadora.formulario.appendChild(document.createElement('input'));     
                let atributoType = document.createAttribute('type');
                let atributoValue = document.createAttribute('value');
                let atributoID = document.createAttribute('id');
                boton.type = "button";
                boton.value = calculadora.botones[i];
                boton.id = calculadora.botones[i];    
            }
            document.body.appendChild(calculadora.formulario); 
            
            calculadora.cajaTexto = document.getElementById("resultado");   
        },
        
        crearCalculadora: function() {
            calculadora.crearFormulario();
            calculadora.crearResultado();
            calculadora.crearBotones();
        },

        iniciar: function() {
            for (let i = 0; i < calculadora.botones.length; i++) {           
                switch(calculadora.botones[i]) {
                    case 'C':
                    document.getElementById(calculadora.botones[i]).onclick = calculadora.borrarC;
                    break;
                    case 'CE':
                    document.getElementById(calculadora.botones[i]).onclick = calculadora.borrarCE;
                    break;
                    case ',':
                    document.getElementById(calculadora.botones[i]).onclick = calculadora.ponerComa;
                    break;
                    default:
                    document.getElementById(calculadora.botones[i]).onclick = calculadora.introducirNumero;
                    break; 
                }  
            }
        },
        
        introducirNumero : function() {
            calculadora.acumulado = calculadora.cajaTexto.value;
            if (calculadora.numero === 0) {
                calculadora.numero = parseFloat(this.value);
                calculadora.cajaTexto.value = calculadora.numero;
                
            } else {
                calculadora.cajaTexto.value = parseFloat(calculadora.acumulado + this.value);   
                             
            }
        },
        
        borrarC : function() {
            calculadora.cajaTexto.value = calculadora.cajaTexto.value.substring(0, calculadora.cajaTexto.value.length-1)
        },
        
        borrarCE : function() {
            calculadora.resultado = 0;
            calculadora.numero = 0;
            calculadora.cajaTexto.value = 0;
        },
        
        ponerComa: function() {
            if(calculadora.cajaTexto.value.indexOf(',') === -1) {
                calculadora.cajaTexto.value +=  this.value;                
                
            }
        }
    };
    
    
    calculadora.crearCalculadora();
    calculadora.iniciar();
}
