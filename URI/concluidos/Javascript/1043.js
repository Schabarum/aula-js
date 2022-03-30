var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let [valA, valB, valC] = pegarValores(lines.shift());

if ((valA + valB) > valC && (valA + valC) > valB && (valB + valC) > valA) {
    console.log(`Perimetro = ${(valA + valB + valC).toFixed(1)}`);
}else{
    console.log(`Area = ${(0.5*(valA + valB)*valC).toFixed(1)}`);
}