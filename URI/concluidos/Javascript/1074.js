var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let max = +lines.shift();

for (let i = 0;i < max;i++){
    let valor = +lines.shift();
    if (valor == 0){
        console.log('NULL');
    }else if (valor % 2 != 0){
        if (valor > 0){
            console.log('ODD POSITIVE');
        }else{
            console.log('ODD NEGATIVE');
        }
    }else{
        if (valor > 0){
            console.log('EVEN POSITIVE');
        }else{
            console.log('EVEN NEGATIVE');
        }
    }
}