var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b, c] = pegarValores(lines.shift());

var delta = Math.pow(b,2) - (4*a*c);
var r1;
var r2;

if ((a === 0) || (delta < 0)){
    console.log(`Impossivel calcular`);
}else{
    r1 = (((-1 * b) + Math.pow(delta, 0.5)) / (2*a));
    r2 = (((-1 * b) - Math.pow(delta, 0.5)) / (2*a));
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}