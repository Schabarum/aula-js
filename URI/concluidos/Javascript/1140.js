var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let comecaCom = (primeiraLetra) => (palavra) => palavra[0].toUpperCase() === primeiraLetra.toUpperCase();

let linha = lines.shift();

while (linha !== '*'){
    let comecaComX = comecaCom(linha[0]);
    console.log(linha.split(' ').every(comecaComX) ? 'Y' : 'N');
    linha = lines.shift();
}