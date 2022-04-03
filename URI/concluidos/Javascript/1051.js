var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let salario = +lines.shift();

if (salario <= 2000){
    console.log('Isento');
}else if (salario > 2000 && salario <= 3000){
    let taxa = salario - 2000;
    console.log(`R$ ${((taxa*8)/100).toFixed(2)}`)
}else if (salario > 3000 && salario <= 4500){
    let taxa = salario - 3000;
    console.log(`R$ ${(((1000*8)/100) + ((taxa * 18)/100)).toFixed(2)}`);
}else { // acima de 4500
    let taxa = salario - 4500;
    console.log(`R$ ${(((1000*8)/100) + ((1500 * 18)/100) + ((taxa * 28)/100)).toFixed(2)}`);
}

/*

 de 0.00      a   R$2000.00       Isento
 de R$2000.01 até R$3000.00       8%
 de R$3000.01 até R$4500.00       18%
 acima de R$4500.01               28% 

 Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, 
 pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. 
 No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, 
 o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.

*/