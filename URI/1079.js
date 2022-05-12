var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let nLinhas = +lines.shift();

const pegarValores = (line) => line.split(" ").map(a => +a);

for (let i = 0; i < nLinhas; i++){
    let soma = 0;
    let valores = pegarValores(lines.shift());
    for (let j = 0; j < 3; j++){
        soma += valores[j]
    }
    console.log((soma / 3).toFixed(1))
}