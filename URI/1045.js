var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b, c] = pegarValores(lines.shift());

if (a >= b+c){
    console.log('NAO FORMA TRIANGULO');
}else{
    if (a === b + c){
        console.log('TRIANGULO RETANGULO');
    };
    if (a > b + c){
        console.log('TRIANGULO OBTUSANGULO');
    };
    if (a < b + c){ 
        console.log('TRIANGULO ACUTANGULO');
    };
    if (a === b && b === c){
        console.log('TRIANGULO EQUILATERO');
    };
    if ((a === b && b !== c) || (a === c && a !== b)){
        console.log('TRIANGULO ISOSCELES');
    }
}

/*
-se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
-se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
-se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
-se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
-se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
*/