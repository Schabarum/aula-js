var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b] = pegarValores(lines.shift());

if ((a % b === 0) || (b % a === 0)){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}
