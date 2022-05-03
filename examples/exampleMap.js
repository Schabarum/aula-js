// Método map, vai percorrer todos os itens de uma array da esquerda para a direita, 
// construindo uma especie de clone da lista mais performatico que o for

let f = [0,32,45,50,75,80,99,120];
let c = f.map(elem => 
    Math.round((elem - 32) * 5 / 9));

console.log(c);

/*
f.map((value, index, array) => {
    value = Valor do elemento
    index = Índice de cada iteração
    array = Lista toda
})
*/