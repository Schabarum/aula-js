var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let max = +lines.shift();
let div2 = 0;
let div3 = 0;
let div4 = 0;
let div5 = 0;
const pegarValores = (line) => line.split(" ").map(a => +a);
let linha = pegarValores(lines.shift());

for (let i = 0; i < max; i++){
    let calc = +linha[i] % 2;
    if (calc === 0){
        div2 += 1;
    }

    calc = +linha[i] % 3;
    if (calc === 0){
        div3 += 1;
    }

    calc = +linha[i] % 4;
    if (calc === 0){
        div4 += 1;
    }

    calc = +linha[i] % 5;
    if (calc === 0){
        div5 += 1;
    }
}

console.log(`${div2} Multiplo(s) de 2`);
console.log(`${div3} Multiplo(s) de 3`);
console.log(`${div4} Multiplo(s) de 4`);
console.log(`${div5} Multiplo(s) de 5`);
