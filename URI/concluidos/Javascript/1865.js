var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let max = +lines.shift();
const pegarValores = (line) => line.split(" ").map(a => a);


for (let i = 0;i < max;i++){
    let [heroi, poder] = pegarValores(lines.shift());    
    if (heroi === 'Thor'){
        console.log('Y');
    }else{
        console.log('N');
    }
}