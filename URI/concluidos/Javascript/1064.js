var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var countPositivos = 0;
var total = 0;
var valor;
for (let i = 0; i<6; i++){
    valor = +lines.shift();
    if (valor > 0){
        countPositivos++;
        total = total + valor;
    }
}
console.log(`${countPositivos} valores positivos`);
console.log((total/countPositivos).toFixed(1));
