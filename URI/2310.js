var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let jogadores = +lines.shift();
const pegarValores = (line) => line.split(" ").map(a => +a);

let saqAcert  = 0;
let bloqAcert = 0;
let ataqAcert = 0;
let saq       = 0;
let bloq      = 0; 
let ataq      = 0;
for (let i = 0; i < jogadores;i++){
    let nome = +lines.shift();
    let [a,b,c] = pegarValores(lines.shift());
    let [d,e,f] = pegarValores(lines.shift());
    saq += a;
    bloq += b;
    ataq += c;
    saqAcert += d;
    bloqAcert += e;
    ataqAcert += f;
}
console.log(`Pontos de Saque: ${((saqAcert * 100)/saq).toFixed(2)} %.`);
console.log(`Pontos de Bloqueio: ${((bloqAcert * 100)/bloq).toFixed(2)} %.`);
console.log(`Pontos de Ataque: ${((ataqAcert*100)/ataq).toFixed(2)} %.`);
