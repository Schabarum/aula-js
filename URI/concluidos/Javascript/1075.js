var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let n = +lines.shift();

for (let i = 1;i <= 10000;i++){
    if (i % n === 2){
        console.log(i);
    }
}
console.log();