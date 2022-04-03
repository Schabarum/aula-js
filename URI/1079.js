var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let vezes = +lines.shift();
const pegarValores = (line) => line.split(" ").map(a => +a);
let soma = 0;
for (let i = 0;i < vezes; i++){
    let notas = pegarValores(lines.shift()); 
    for (let j in notas){
        if (j === 0){
            soma = (notas[j]*2)
        }else if (j === 1){
            soma += (notas[j]*3)
        }else{
            soma += (notas[j]*5)
        }
    }
    j = 0;
    notas = 0;
    soma = 0;
}