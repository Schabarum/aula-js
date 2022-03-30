var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let grupo = lines.shift();
let segmento = lines.shift();
let alimentacao = lines.shift();
let retString;
switch (grupo) {
    case 'vertebrado':
        switch (segmento) {
            case 'ave':
                if (alimentacao === 'carnivoro'){
                    retString = 'aguia';
                }else if (alimentacao === 'onivoro'){
                    retString = 'pomba';
                }
                break;
        
            case 'mamifero':
                if (alimentacao === 'onivoro'){
                    retString = 'homem';
                }else if (alimentacao === 'herbivoro'){
                    retString = 'vaca';
                }
                break;
        }
        break;
    case 'invertebrado':
        switch (segmento) {
            case 'inseto':
                if (alimentacao === 'hematofago'){
                    retString = 'pulga'
                }else if (alimentacao === 'herbivoro'){
                    retString = 'lagarta'
                }
                break;
        
            case 'anelideo':
                if (alimentacao === 'hematofago'){
                    retString = 'sanguessuga'
                }else if (alimentacao === 'onivoro'){
                    retString = 'minhoca'
                }
                break;
        }
        break;
}

console.log(`${retString}`);