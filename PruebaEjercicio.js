function ordenardatos(a,b){
    return a - b;
  
}
let n = 213;
let digits = (""+n).split("");
digits.sort(ordenardatos);
digits.reverse();
console.log(digits);

console.log("------------------");

let interacciones = 0, index = 0;

while(1){
	interacciones+=1;
	index = A[index];
	if(index == -1){
		break;
	}
}
console.log(interacciones);
console.log("------------------");