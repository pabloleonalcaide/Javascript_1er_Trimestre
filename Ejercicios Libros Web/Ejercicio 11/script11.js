/*Pablo León Alcaide - Ejercicio 11 */
/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por
 * pantalla la  siguiente información: 
 * 1.Número de enlaces de la página
 * 2.Dirección a la que enlaza el penúltimo enlace
 * 3.Numero de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 *
 * @author Pablo Leon Alcaide
 * @version 1.0
 */
{

    //Número de enlaces de la página
    let links = document.getElementsByTagName("a");
    let num = links.length;
    console.log('hay ' + num + ' enlaces en este ejemplo');

    //Dirección a la que enlaza el penúltimo enlace
    let penultimo = links[(links.length - 2)].href;
    console.log("el penultimo enlace apunta a: " + penultimo);


    //Número de enlaces que enlazan a http://prueba	
    let count = 0;

    for (let link in links) {

        if (links[link].href == "http://prueba/")
            count++;

    }
    console.log("hay " + count + " enlaces que enlazan a http://prueba");

    //Número de enlaces del tercer párrafo

    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName("a");
    console.log("hay " + enlaces.length + " enlaces en el tercer párrafo");
}