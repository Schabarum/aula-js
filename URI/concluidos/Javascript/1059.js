var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var divisao;
for (let i = 1; i <= 100; i++){
    divisao = i%2;
    if (divisao === 0){
        console.log(i);
    }
}