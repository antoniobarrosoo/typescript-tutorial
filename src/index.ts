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

//ARRAYS

let numeros: number[] = [1,2,5,8]
let numeros2: number[] = [6,3,9,10]
console.log(`La posicion 0 del array es: ${numeros[2]}`);
//Diferentes datos

let mixto:(number|string)[]=[1,"Hola", 6];

//Dos dimensiones

let array2d:number[][]=[[1,2,3], [4,5,6], [7,8,9]]
if(array2d[0]|| array2d[0]!=undefined){
    console.log("La posicion 0,0 del array2d es" + array2d)
}
console.log(`La posicion 0 del array es: ${array2d[0]!=undefined ? array2d[0][0] : 0}`);

//Concatenar arrays

let numeros3= [...numeros,...numeros2]
console.log(numeros3);
numeros3[0]=10;
console.log(numeros3);
