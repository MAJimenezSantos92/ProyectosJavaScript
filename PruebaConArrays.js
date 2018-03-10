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


