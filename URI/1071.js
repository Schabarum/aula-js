var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let x = +lines.shift();
let y = +lines.shift();
let divisao = 0;
let soma = 0;

if (x < y){
    for (let i = x; i < y; i++){
        if (i % 2 != 0){
           console.log(i)
           soma += i; 
        }
    }
}else{
    for (let i = y; i < x; i++){
        divisao = i % 2;
        if (divisao != 0){
            console.log(divisao);    
        }
        
        if (divisao != 0){
           soma = soma + i; 
        }
    }
}

//console.log(soma);
