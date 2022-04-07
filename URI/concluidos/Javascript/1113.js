var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let [a, b] = pegarValores(lines.shift());

while (a != b){
    if (a > b){
        console.log('Decrescente');
    }else if (b > a){
        console.log('Crescente');
    }
    [a, b] = pegarValores(lines.shift());
}