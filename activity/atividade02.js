/*
    2 - Some a idade de todos os gatos. Some 15 anos para o primeiro ano de vida do peludo e 10 para o segundo
    ano de vida. A partir do 3 aniversário em diante, acrescente quatro anos.
    Retorno esperado:
    Soma das idades dos gatos é: 77
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

let getGatos = animais.filter(a => a.tipo === 'gato')
                       .map((a) => (a.idade == 1) ? a.idade + 15 : (a.idade == 2) ? a.idade + 10 + 15: (a.idade > 2) ? ((a.idade - 2) * 4) + 25 : '')
                       .reduce((a,b) => a+b);
console.log(`Soma das idades dos gatos é: ${getGatos}`);
