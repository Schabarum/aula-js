var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let [inicio, final] = pegarValores(lines.shift());

var retorno = 0;
if (inicio === final){
    retorno = 24;
}else if (inicio < final){
    retorno = final - inicio;
}else{
    retorno = final + 24 - inicio;
}

console.log(`O JOGO DUROU ${retorno} HORA(S)`);