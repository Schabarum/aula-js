var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let max = +lines.shift();
let countIn = 0;
let countOut = 0;

for (let i = 0;i < max;i++){
    let valor = +lines.shift();
    if (valor >= 10 && valor <= 20){
        countIn++;
    }else{
        countOut++;
    }
}
console.log(`${countIn} in`);
console.log(`${countOut} out`);