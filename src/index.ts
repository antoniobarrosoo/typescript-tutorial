/**
 * Declaración de variables
 * 
*/
const z= "Fran";
if(true){
    var x="Maria";
    let y="Jose"; //Tiene ambito de bloque
}
x="Jose" // x tiene un ambito global por eso puede modificar el valor asignado del if
console.log(x);

/**
 * Datos primitivos
 * string
 * number
 * boolean (true/ false)
 * 
 */

let nombre:string="Antonio";
let edad:number=20;
let mayorEdad:boolean=true;


/**
 * Tipos de datos especiales
 * 
 * any= nos permite asignar cualquier tipo de variable, es decir puede ser un numero y durante ele codigo se convierta en una palabra o en un booleano
 * unknown
 * void
 */
//Any provocaría un error en tiempo de compilacion
let cualquierCosa:any="HOLA";
cualquierCosa="Adios";

console.log(cualquierCosa.toLowerCase());

//uso tipo unknown(tienes q poner un if para verificar el tipo de dato)

let tipoDeDatoDesconocido:unknown;
tipoDeDatoDesconocido="Nombre";
tipoDeDatoDesconocido=18;
tipoDeDatoDesconocido="Hola"

if(typeof(tipoDeDatoDesconocido)=="string"){
console.log(tipoDeDatoDesconocido.toUpperCase());
}

//Concatenar

console.log("Tu nombre es " +nombre);
console.log(`Tu nombre es ${nombre}`);

