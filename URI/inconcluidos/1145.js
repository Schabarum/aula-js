var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let [colunas, linhas] = pegarValores(lines.shift());
let controle = 1;
let linha = '';

for (let i = 1;i < linhas; i += 3){
    for (let k = controle; k < controle + 3; k++){
        if (k == controle){
            linha = controle;
        }else{
            if (k <= linhas){
                linha = linha + ' ' + k;
            }
        }
    }
    console.log(linha);
    controle += 3;
}