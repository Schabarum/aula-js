var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = pegarValores(lines.shift());
let totalH = horaFinal - horaInicial;
let totalM = minutoFinal - minutoInicial;

if (totalH < 0){
    totalH = 24 + (horaFinal - horaInicial);
}

if (totalM < 0){
    totalM = 60 + (minutoFinal - minutoInicial);
    totalH--;
}

console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalH} MINUTO(S)`);