var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let maior = 0;
let posicao = 0;
for (let i = 1;i <= 100;i++){
    let valor = +lines.shift();
    if (i === 1){
        maior = valor;
        posicao = i;
    }else if (valor > maior){
        maior = valor;
        posicao = i;
    }
}
console.log(maior);
console.log(posicao);