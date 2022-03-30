var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let lista = [];
for (let i = 0; i<3; i++){
    lista = +lines.shift(); 
}

lista.sort()

for (let i = 0;i<3;i++){
    console.log(lista[i]);
}
