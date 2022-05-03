let animais = [{ nome: 'Fumaça',  idade: 3, tipo: 'gato'  },
               { nome: 'Tobby',   idade: 6, tipo: 'cao'   },
               { nome: 'Laminha', idade: 1, tipo: 'gato'  },
               { nome: 'Nutella', idade: 3, tipo: 'rato'  },
               { nome: 'Luke',    idade: 7, tipo: 'cao'   },
               { nome: 'Rex',     idade: 2, tipo: 'rato'  },
               { nome: 'Bety',    idade: 5, tipo: 'cao'   },
               { nome: 'Duke',    idade: 1, tipo: 'rato'  },
               { nome: 'Djanho',  idade: 4, tipo: 'gato'  }]

let cats = animais.filter(a => a.tipo === 'gato');
let dogs = animais.filter(a => a.tipo === 'cao');
let mouse = animais.filter(a => a.tipo === 'rato');

console.log(cats);
console.log(dogs);
console.log(mouse)