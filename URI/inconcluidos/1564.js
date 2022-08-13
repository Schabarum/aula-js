var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

while (lines.length){
    let reclamacao = lines.shift();
    if (reclamacao.trim() == ''){
        break;
    }else{
        if (+reclamacao == 0){
            console.log('vai ter copa!');
        } else if (+reclamacao > 0) {
            console.log('vai ter duas!');
        }
    }
    
}