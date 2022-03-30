var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var valor = +lines.shift();
var countImpares = 0;

do {
    let divisao = valor%2;
    if (divisao != 0){
        countImpares++;
        console.log(valor);
    }
    valor++;
 } while (countImpares < 6);
