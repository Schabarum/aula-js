var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var laco = +lines.shift();
var divisao = 0;
for (let i = 0; i <= laco; i++){
    divisao = i%2;
    if (divisao !== 0){
        console.log(i);
    }
}