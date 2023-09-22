"use strict";

/**         Fonction
 * 
 * 
 * Declarer trois variables a="Jean" et b="Paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identiques
 * 
 * console log le result
 * 
 */

let a="Jean";
let b="Paul";
let result=checkName(a,b);

function checkName(name1, name2){
    if(name1===name2){
        return true;
    }else{
        return false;
    }
}
console.log(result);