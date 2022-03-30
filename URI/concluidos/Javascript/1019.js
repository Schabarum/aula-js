var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var segundos = +lines.shift();
let  horas;
let minutos;
let ret_segundos;

while (segundos>0){
    if (segundos >= 3600){
        horas = Math.floor(segundos/3600);
        segundos = segundos%3600;
    }else{
        horas = 0;
    }
    
    if (segundos>=60){
        minutos = Math.floor(segundos/60);
        segundos = segundos%60;
    }else{
        minutos = 0;
    }
    
    if (segundos<60){
        ret_segundos = segundos;
        segundos = 0;
    }
}

console.log(`${horas}:${minutos}:${ret_segundos}`);