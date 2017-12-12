    /**
     * @author Pablo Leon Alcaide
     * @version 1.0
     *  Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h" 
     */


    /**
     * Muestra los valores recogido de la hora actual
     */
       
    let clockBox = document.getElementById("container");

    let showClock = function(reloj) {
        clockBox.innerHTML = reloj + "<br>";
    }
    /**
     * Crea el reloj
     */
    let createClock = function() {
        let date = new Date();
        let hora = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();
        let parseHoras = String(hora);
        let parseMinutos = String(minutos);
        let parseSegundos = String(segundos);
        /* Damos formato a la hora de tipo hh:mm:ss*/
        if (parseHoras.length == 1) {
            hora = "0" + hora;
        }
        if (parseMinutos.length == 1) {
            minutos = "0" + minutos;
        }
        if (parseSegundos.length == 1) {
            segundos = "0" + segundos;
        }

        showClock("hora actual: "+hora + ":" + minutos + ":" + segundos);
    }   
    /*Creamos un intervalo para que se refresque el reloj cada 1000 milisegundos*/
    window.setInterval("createClock()", 1000);
