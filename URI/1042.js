var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let lista = pegarValores(lines.shift());

console.log(lista)
let lista_ordenada = lista;
function Srt(a, b) { return a-b };  
lista_ordenada.sort(Srt);
console.log(lista)


/*
function Srt(a, b) { return a-b };  
lista_ordenada.sort(Srt);

for (let i in lista_ordenada){
    console.log(lista_ordenada[i]);
}

console.log("\n")
for (let i in lista){
    console.log(lista[i]);
}
 */