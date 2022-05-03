/*
    3 - Conte quantos animais tem 3 ou mais anos. E indique quantos deles são gatos, cães ou ratos
    Retorno esperado:
    Temos 6 animais com 3 ou mais anos 
    Dentre eles temos:
    2 Gatos
    3 Cães
    1 Ratos
*/

let animais = [{ nome: 'Fumaça',  idade: 3, tipo: 'gato'  },
               { nome: 'Tobby',   idade: 6, tipo: 'cao'   },
               { nome: 'Laminha', idade: 1, tipo: 'gato'  },
               { nome: 'Nutella', idade: 3, tipo: 'rato'  },
               { nome: 'Luke',    idade: 7, tipo: 'cao'   },
               { nome: 'Rex',     idade: 2, tipo: 'rato'  },
               { nome: 'Bety',    idade: 5, tipo: 'cao'   },
               { nome: 'Duke',    idade: 1, tipo: 'rato'  },
               { nome: 'Djanho',  idade: 4, tipo: 'gato'  }];

let gatos = animais.filter(a => a.idade >= 3 && a.tipo === 'gato').length;
let caes = animais.filter(a => a.idade >= 3 && a.tipo === 'cao').length;
let ratos = animais.filter(a => a.idade >= 3 && a.tipo === 'rato').length;

console.log(`${gatos} Gatos`);
console.log(`${caes} Cães`);
console.log(`${ratos} Ratos`);