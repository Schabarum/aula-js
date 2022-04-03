var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let valor = 0;
let count = 0;
let media = 0;
while (valor >= 0){
    valor = +lines.shift();
    if (valor >= 0){
        count++;
        media = media + valor;
    }
}

console.log((media/count).toFixed(2));
