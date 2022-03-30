var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var salario = +lines.shift();

function aumento (salario){
    let valret;
    if ((salario > 0)&&(salario <= 400)){
        valret = 15;
    }else if ((salario > 400)&&(salario <= 800)){
        valret = 12;
    }else if ((salario > 800)&&(salario <= 1200)){
        valret = 10;
    }else if ((salario > 1200)&&(salario <= 2000)){
        valret = 7;
    }else if (salario > 2000){
        valret = 4;
    }
    return valret;
}

let percentual = aumento(salario);
console.log(`Novo salario: ${(salario + ((salario * percentual) / 100)).toFixed(2)}`)
console.log(`Reajuste ganho: ${((salario * percentual) / 100).toFixed(2)}`)
console.log(`Em percentual: ${percentual} %`)