"use strict";

//          WHILE
/**
 * Declarer une variable a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let a=3;
while(a<9){
    a++
    if(a==7){
        continue;
    }
    if(a==8){
        break;
    }
    console.log(a);
}
console.log("J'ai cassé la boucle au bout de "+a+" tours");