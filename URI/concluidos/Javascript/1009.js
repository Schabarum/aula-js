var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salario = +lines.shift();
var comissao = +lines.shift();
var porcentagem = (comissao*0.15);

 console.log(`TOTAL = R$ ${(salario + porcentagem).toFixed(2)}`);