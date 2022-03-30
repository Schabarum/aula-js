var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var divisao = 0;
var countPares = 0;
var countImpares = 0;
var countPositivos = 0;
var countNegativos = 0;
for (let i = 0; i < 5;i++){
    let valor = +lines.shift();
    divisao = valor%2;
    if ((divisao === 0) || (valor === 0)){
        countPares++;
    }else{
        countImpares++;
    }; 
    if (valor > 0 ){
        countPositivos++
    }else if (valor < 0){
        countNegativos++;
    }
}

console.log(`${countPares} valor(es) par(es)`)
console.log(`${countImpares} valor(es) impar(es)`);
console.log(`${countPositivos} valor(es) positivo(s)`);
console.log(`${countNegativos} valor(es) negativo(s)`);