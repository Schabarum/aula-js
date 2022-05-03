let animais = [
    {nome: 'Fumaça', idade: 3, tipo: 'gato'},
    {nome: 'Tobby', idade: 6, tipo: 'cao'},
    {nome: 'Laminha', idade: 1, tipo: 'gato'},
    {nome: 'Nutella', idade: 3, tipo: 'cao'},
    {nome: 'Luke', idade: 3, tipo: 'cao'}
];

// let IdadeCaes = animais.filter(cachorrao => cachorrao.tipo === 'cao');
// let Idades = IdadeCaes.map(cahorrin => cahorrin.idade * 7);
// let IdadeSomada = Idades.reduce((a,b) => a+b);

let IdadeSomada = animais.filter(a => a.tipo === 'cao')
                         .map(a => a.idade * 7)
                         .reduce((a,b) => a+b);

console.log(IdadeSomada);
