let numero = "5";
console.log(es_par(numero));

function es_par(numero){
  if(numero % 2 == 0){
    return true;
  }else{
    return false;
  }
}

console.log("*"+numero+" Elevado a la '2': "+Math.pow(numero,2));

console.log(Math.round(0.82));
console.log(Math.ceil(0.32));


let usuario = "Mangel"

if(usuario.indexOf("Mangel")!=-1){
  console.log("Eres Mangel");
  
}else{
  console.log("No eres Mangel");
}

console.log(usuario[0])
console.log("--------------");
console.log(usuario[usuario.length-1])
console.log("--------------");
console.log(usuario.charAt(1));
console.log("--------------");
console.log(usuario.slice(2,3));
console.log("--------------");
console.log(usuario.replace("M","Pepe"));
console.log("--------------");
console.log(usuario.toUpperCase());
console.log("--------------");
console.log(usuario.toLowerCase());
console.log("--------------");


let array = [4,3,2,1];

array.push(0);
array.unshift(5);
console.log(array);


array.pop();

console.log(array);

let longitud = array.length;
for (;longitud>=0; longitud--){
  console.log(array[longitud]);
}

console.log("--------------");
console.log("--------------");

array.sort();

console.log(array);
console.log("--------------");
console.log("--------------");
console.log("--------------");
function ordenardatos(a,b){
    return a - b;
  
}
array.sort(ordenardatos);
console.log(array);
array.reverse();
console.log(array);


let string2 = "a,b,c,d,e";

console.log(string2.split(","));
console.log("--------------");
var string3 = "a,b,c,d,e,f";

var array5 = string3.split(",")

array5=array5.join("-");
console.log(array5);

var array55 = array5.split("-")
console.log(array55);



var numero2 = [2,5,8,3,9,12,22];

var numeros_pares=numero2.filter(function(numero2){
  return numero2 % 2 === 0;
});


console.log("Numeros pares: "+numeros_pares);


var numeros_impares=numero2.filter(function(numero2){
  return numero2 % 2 !== 0;
});

console.log("Numeros impares: "+numeros_impares);


var numerospara2 = [2,5,8,3,9,12,22];


var numeros_cuadrados2 = numerospara2.map(function(elemento){
  return elemento*elemento;
});

console.log("Numeros al cuadrado: "+numeros_cuadrados2);


var numeroseach = [2,5,8,3,9,12,22];

numeroseach.forEach(function(elemento, posicion, array){
  console.log("Elemento: "+elemento);
  console.log("Posición: "+posicion);
  console.log("Array: "+array);
  console.log("------");
});



numeroseach.forEach(function(elemento, posicion, array){
  array[posicion] = Math.pow(elemento, 2);
});

console.log(numeroseach);
 console.log("------"); 
console.log("------");
 console.log("------");
 console.log("------");


console.log("---------------------");
console.log("Forma 1:");
let number = 213;
let numberStr = number.toString();
let longitud33 = numberStr.length-1;
console.log(longitud33);
let arraydatos = [];
while (longitud33>=0) {
  console.log("Posicion: "+numberStr[longitud33]);
  arraydatos.push(numberStr[longitud33]);
  longitud33=longitud33-1;
}
arraydatos.sort(ordenardatos);
arraydatos.reverse();
console.log(arraydatos);


console.log("---------------------");
console.log("Forma 2:");
var n = 213;
var digits = (""+n).split("");
digits.sort(ordenardatos);
digits.reverse();
console.log(digits);