var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = pegarValores(lines.shift());

start=horaInicial*60+minutoInicial
end=horaFinal*60+minutoFinal
dif=end-start
if (dif<=0){
    dif=dif+24*60
}

hora=dif//60
minuto=dif%60

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);