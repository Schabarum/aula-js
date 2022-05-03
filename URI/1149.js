var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split(' ');

let max = +lines.shift();

let value = +lines.shift();

while (value <= 0){
    value = +lines.shift();
}

let soma = 0;

for (let i = 1; i <= value; i++){
    soma += max;
    max++;
}

console.log(soma);