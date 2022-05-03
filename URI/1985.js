var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let max = +lines.shift();
const pegarValores = (line) => line.split(" ").map(a => +a);
let totalCompra = 0;

for (let i = 0; i < max;i++){
    let [produto,quantidade] = pegarValores(lines.shift());
    if (produto === 1001){
        totalCompra = totalCompra + 1.50*quantidade;
    }else if (produto === 1002){
        totalCompra = totalCompra + 2.50*quantidade;
    }else if (produto === 1003){
        totalCompra = totalCompra + 3.50*quantidade;
    }else if (produto === 1004){
        totalCompra = totalCompra + 4.50*quantidade;
    }else if (produto === 1005){
        totalCompra = totalCompra + 5.50*quantidade;
    }
}

console.log(totalCompra.toFixed(2))