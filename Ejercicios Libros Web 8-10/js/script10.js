/*
 * Pablo León Alcaide - Script Ejercicio 10
 */

//check if the string is a palindrome
function checkPalindrome(myString) {
    //save the regEx with strange characters	
    let regex = /[\W_]/g;
    //lowercase the string and remove strange characters
    let lowerString = myString.toLowerCase().replace(regex, '');
    /*reverse the string
     * split() --> return a string into an array
     * join() --> commit an array
     */
    let reverseString = lowerString.split('').reverse().join('');
    return reverseString === lowerString;
}
let phrase = prompt("introduce una frase, te diré si es un palíndromo");
if (checkPalindrome(phrase)) {
    alert("Es un palíndromo");
} else {
    alert("No es palíndromo");
}