var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let estrelas = +lines.shift()
const pegarValores = (line) => line.split(" ").map(a => +a);
let carneiros = pegarValores(lines.shift());

let carneirosArrecadados = carneiros.map()