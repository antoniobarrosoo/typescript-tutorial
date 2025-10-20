import console = require("console");
import os = require("os");

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

//MÉTODOS PARA TRABAJAR CON ARRAYS

let anumeros= [1, 3, 5, 7, 9];

//PUSH
anumeros.push(11);//[1,3,5,7,9,11]

//POP
anumeros.pop()//[1,3,5,7,9

anumeros.push(13,15,17);

//UNSHIFT-SHIFT

anumeros.unshift(0);
console.log(anumeros);
console.log(anumeros.shift());

//ACCESO, REEMPLAZO
anumeros[0]=-1;
console.log(anumeros[0]);
console.log(anumeros.length);

//BÚSQUEDA DE ELEMENTOS

let frutas= ["manzana", "pera", "mandarina"];

console.log(frutas.indexOf("mandarina"));

//Includes
console.log(frutas.includes("manzana"));

//FIND = búsqueda primer elemento que cumple una determinada condición
console.log(frutas.find((value)=>{return value.length>5;}))

function buscar(frutas:string[]):string|undefined{
    for(let x=0; x<frutas.length;x++){
        const valorX= frutas[x];

        if(valorX!=undefined && valorX.length>5){
            return valorX;
            break;
        }
    }
}
//NOT NULL ASSERTION
//valor[x]!.length=ejecuta si o si
//valor[x]?.length= en caso de que valor[x] no sea undefined o null no se ejecuta el length
//FINDINDEX
console.log(frutas.findIndex((value)=>{return value.length>5;}))

//FOREACH

frutas.forEach((valor:string)=>{console.log(valor)})
console.log("--------------")
frutas.forEach((valor:string)=>{valor.length >5 ? console.log(valor):null})

//MAP -> TRANSFORMAR LOS ELEMENTOS DE UN ARRAY SIN MODIFICAR EL ORIGINAL
console.log("--------------")
let frutaUpper= frutas.map((fruta:string)=>{return fruta.toUpperCase()});
console.log(frutaUpper)

console.log("--------------")

//FILTER -> FILTRAR LOS ELEMENTOS DE UN ARRAY
let frutasFiltradas= frutas.filter((frutas:string)=>{return frutas.length>6})
console.log(frutasFiltradas);

//REDUCE -> ACUMULAR EL VALOR
let arrayNumeros=[1,6,10,3,5];
arrayNumeros.reduce((acc:number, elementoActual:number)=>{return acc=acc+elementoActual})
let minNombre=["Antonio", "Barroso", "Rodríguez"]
let nombreConcatenado= minNombre.reduce((elementoAnterior, elementoActual)=>{return elementoAnterior+=" "+elementoActual})

//SORT
console.log(nombreConcatenado)
console.log(arrayNumeros.sort((a:number, b:number)=>{return a-b}));

//SLICE
console.log("--------------")
console.log(minNombre.slice(0,2));

//JOIN
console.log(minNombre.join(" "));

//TUPLAS
console.log("--------------")
let nombreEdad: [string,number];
nombreEdad=["Antonio", 20]
console.log(`Mi nombre es${nombreEdad[0]}`)
console.log(`Tengo ${nombreEdad[1]} años`)

//DICCIONARIOS
 console.log("--------------")
let diccionario={1: "Antonio", 2:"Manolo"};
console.log(diccionario[1]);

//FUNCION DECLARAS
/**
 * Función para sumar dos elementos
 * @param a primer parametro a sumar
 * @param b segundo parametro a sumar
 * @returns numero sumado
 */
function sumar(a:number, b:number):number{
    return a+b;
}
let suma2numeros= sumar(10,20);
console.log(suma2numeros)

//NO TIENE HOISTING

const fResta= function (a:number, b:number){return a-b};

console.log(fResta(5,2))
console.log("--------------")

function saludar(nombre:string, apellido?:string){


    //Operador ternario
    apellido!=undefined ? console.log(`Hola ${apellido}`): console.log(`Hola ${nombre}`)
    


    //Otra forma
    console.log(`Hola ${nombre} ${apellido ?? ""}`)
}


//FUNCIÓN CON PARÁMETROS X DEFECTO
function potencia(base:number, exponent:number=2){
    return base**exponent;
}
console.log(potencia(2));
console.log(potencia(2,10));

//FUNCIPNES FLECHAS (parametros)=>{operaciones}

const fflecha= (a:number)=>{return a;}
//FUNCIÓN CALVA
function math(a:number, b:number, operacion:(a:number,b:number)=>number){
    return operacion(a,b);
}
const farrowSumar=(a:number, b:number)=>{return a+b;}
const fanonRestar=(a:number, b:number)=>{return a+b;}

math(1,5,farrowSumar);
math(1,5,fanonRestar);



function fforeach(datos:string[], operacion:(dato:string | undefined)=>void){

    for(let x=0; x<datos.length; x++){
        const valor= datos[x];
        operacion(valor);
    }
}
const mostrar=(dato:string)=>{console.log(dato)}
frutas.forEach(mostrar);

//PASARLE A FUNCTION NUMERO INDEFINIDO DE PARAMETROS

function multipleParam(...valores:number[]){

let suma= valores.reduce((previosValue:number, currentValue:number)=>{return previosValue+=currentValue}, 0)

console.log(suma)
}
multipleParam(4,3,2,1,1);

interface DataAPI{

    message:string,
    status:string
}

//FUNCIONES ASÍNCRONAS

async function getApiData(url:string):Promise<DataAPI> {

    const respuesta= await fetch(url)//Obtener datos de una API
    const datos= respuesta.json() as Promise<DataAPI>
    return datos;
}
getApiData("https://dog.ceo/api/breeds/image/random")
.then((value:DataAPI)=>{console.log(value.message)})
.catch((error)=>{console.log(error)});

console.log("ADIOS")

//CREACIÓN DE OBJETOS LITERALES

let persona = {
    id: 1,
    nombre:"Antonio",
    apellido:"Barroso",
    edad:20,
    direccion:{
        calle: "Pol.Rancho",
        ciudad:" Morón de la Frontera"
    },
    esMayorEdad: function ():boolean {return this.edad>=18?true:false}
}
console.log(persona[`nombre`])
console.log(persona.direccion.ciudad);
console.log(persona.esMayorEdad);
persona.edad=15;
let persona2={
    id:2,
    nombre:"Juan"
}

const config={
    version:"1.0.0",
    appName:"TypeScript-Tutorial",
    developer:"Antonio"  
}

const alertConfiguration={
    time:200,
    type:'danger',
    position:'center'
}

//TYPE
//Es una plantilla que me va a permitir a reutilizar código
type usuario = {
    readonly id:number,
    username:string,
    email:string,
    estaActivo:boolean,
   
}
    let u1:usuario={
    id:1,
    username:"abarrod822",
    email:"abarrod822@gmail.com",
    estaActivo:true
}
u1.email="antonbarroso@gmail.com";
