var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let acess = 'Senha Invalida';

while (acess != 'Acesso Permitido'){
    let senha = +lines.shift();
    if (senha === 2002){
        acess = 'Acesso Permitido';
    }else{
        acess = 'Senha Invalida';
    }
    console.log(acess)
}