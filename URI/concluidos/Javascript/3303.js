var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var palavra = lines.shift();

if (palavra.length >= 10){
    console.log('palavrao')
}else{
    console.log('palavrinha');
}