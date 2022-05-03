var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

while (lines.length){
    let senha = lines.shift()
    if (senha.trim() == ''){
        break;
    }
    console.log(+senha-1);
}