var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let [produto, qtde] = pegarValores(lines.shift());
switch (produto) {
    case 1: console.log(`Total: R$ ${(qtde*4).toFixed(2)}`); break;
    case 2: console.log(`Total: R$ ${(qtde*4.50).toFixed(2)}`); break;
    case 3: console.log(`Total: R$ ${(qtde*5.00).toFixed(2)}`); break;
    case 4: console.log(`Total: R$ ${(qtde*2.00).toFixed(2)}`); break;
    case 5: console.log(`Total: R$ ${(qtde*1.50).toFixed(2)}`); break;
    default:
        break;
}

