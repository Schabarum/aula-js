var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let nota = +lines.shift();
let resultaNota;
if (nota === 0){
    resultaNota = 'E';
}else if (nota > 0 && nota <= 35){
    resultaNota = 'D';
}else if (nota > 35 && nota <= 60){
    resultaNota = 'C';
}else if (nota > 60 && nota <= 85){
    resultaNota = 'B';
}else if (nota > 85 && nota <= 100){
    resultaNota = 'A';
}

console.log(resultaNota);