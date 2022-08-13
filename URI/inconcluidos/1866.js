var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let max = +lines.shift();

for (let i = 0; i < max;i++){
    let value = +lines.shift();
    let par = value % 2;
    console.log(par);
}