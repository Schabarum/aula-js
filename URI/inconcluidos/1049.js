var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let grupo = lines.shift();
let segmento = lines.shift();
let alimentacao = lines.shift();
let animal = '';

if (grupo == 'vertebrado' && segmento == 'ave' && alimentacao == 'carnivoro'){
    animal = 'aguia'
}
if (grupo == 'vertebrado' && segmento == 'ave' && alimentacao == 'onivoro'){
    animal = 'pomba'
}
if (grupo == 'vertebrado' && segmento == 'mamifero' && alimentacao == 'onivoro'){
    animal = 'homem'
}
if (grupo == 'vertebrado' && segmento == 'mamifero' && alimentacao == 'herbivoro'){
    animal = 'vaca'
}
if (grupo == 'invertebrado' && segmento == 'inseto' && alimentacao == 'hematofago'){
    animal = 'pulga'
}
if (grupo == 'invertebrado' && segmento == 'inseto' && alimentacao == 'herbivoro'){
    animal = 'lagarta'
}
if (grupo == 'invertebrado' && segmento == 'anelideo' && alimentacao == 'hematofago'){
    animal = 'sanguessuga'
}
if (grupo == 'invertebrado' && segmento == 'anelideo' && alimentacao == 'onivoro'){
    animal = 'minhoca'
}
console.log(animal);