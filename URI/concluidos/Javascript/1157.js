var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let valor = +lines.shift();

for(let i = 0; i <= valor ; i++){
    let divisao = valor%i;
    if (divisao === 0){
        console.log(i);
    }
}