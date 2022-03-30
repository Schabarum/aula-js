var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [na, nb, nc, nd] = pegarValores(lines.shift());

media = ((na * 2) + (nb * 3) + (nc * 4) + (nd * 1))/10;
console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7){
    console.log('Aluno aprovado.');
}else if (media < 5){
    console.log('Aluno reprovado.');
}else{
    let ne = +lines.shift();
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${ne.toFixed(1)}`);
    let mediaExame = (ne + media) / 2;
    if (mediaExame >= 5){
        console.log('Aluno aprovado.');
    }else{
        console.log('Aluno reprovado.');
    }
    console.log(`Media final: ${mediaExame.toFixed(1)}`);
}