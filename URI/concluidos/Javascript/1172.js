var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

for(let i = 0;i<10;i++){
    let valor = +lines.shift();
    if (valor <= 0){
        valor = 1;
    }
    console.log(`X[${i}] = ${valor}`);
}