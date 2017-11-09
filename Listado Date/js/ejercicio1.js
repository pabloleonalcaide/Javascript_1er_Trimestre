/**
 * ¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
 * @author Pablo Leon
 * @version 1.0
 */
 
document.write('<h1>Constructores del objeto Date</h1>');
let fecha1 = new Date();
document.write('Constructor 1: fecha = new Date()<br>');
document.write(fecha1);

let fecha2 = new Date(1988,8,9);
document.write('<br><br>Constructor 2: fecha = new Date(año,mes,día)<br>');
document.write(fecha2);

let fecha3 = new Date(2012,11, 12, 12, 12, 0, 0);
document.write('<br><br>Constructor 3: fecha = new Date(año,mes,dia,hora,minutos,segundos,milisegundos)<br>');
document.write(fecha3);

let fecha4 = new Date(12344543);
document.write('<br><br>Constructor 4: fecha = new Date(milisegundos)<br>');
document.write(fecha4);
