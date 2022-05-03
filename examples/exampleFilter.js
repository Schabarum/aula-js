// Filter vai percorrer todos os elementos da esquerda para a direita, e deve retornar um booleano
let pets = [
    {nome: 'Butters', idade: 3, tipo: 'dog'},
    {nome: 'Lizzy', idade: 6, tipo: 'dog'},
    {nome: 'Red', idade: 1, tipo: 'cat'},
    {nome: 'joey', idade: 3, tipo: 'dog'}
];

let dogs = pets.filter(animal => animal.idade === 3);

console.log(dogs);