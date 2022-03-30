var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let valor = +lines.shift();
let result = 0;
for(let i = valor - 1;i > 0; i--){
    if (result === 0){
        result = valor * i;
    }else{
        result = result * i;
    }
}
console.log(result)