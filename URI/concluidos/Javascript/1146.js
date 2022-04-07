var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let num = +lines.shift();
let listaString = ''; 
while (num != 0){
    for (let i = 1; i <= num; i++){
        if (i === 1){
            listaString = i;
        }else{
            listaString = listaString + ' ' + i;
        }
    }
    console.log(listaString);
    num = +lines.shift();
}