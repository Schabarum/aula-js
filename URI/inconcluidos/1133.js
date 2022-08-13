var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let x = +lines.shift();
let y = +lines.shift();

for (let i = x; x <= y; x++){
    if (i / 5 === 2 || i / 5 === 3){
        console.log(i);
    }
}