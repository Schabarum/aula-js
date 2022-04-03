var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
let opcao = 0;
let countJogo = 0;
let winInter = 0;
let winGremio = 0;
let empate = 0;
while (opcao != 2) {    
    let [golInter, golGremio] = pegarValores(lines.shift());
    countJogo++;
    if (golInter === golGremio){
        empate++
    }else if (golInter > golGremio){
        winInter++;
    }else if (golGremio > golInter){
        winGremio++;
    }
    console.log('Novo grenal (1-sim 2-nao)')
    opcao = +lines.shift();
}

console.log(`${countJogo} grenais`);
console.log(`Inter:${winInter}`);
console.log(`Gremio:${winGremio}`);
console.log(`Empates:${empate}`);
if (winInter > winGremio){
    console.log('Inter venceu mais');
}else if (winGremio > winInter){
    console.log('Gremio venceu mais');
}else{
    console.log('Nao houve vencedor');
}