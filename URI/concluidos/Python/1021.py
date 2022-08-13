valor = float(input())

cedula = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

print('NOTAS:');
i = 0
for (i = 0; i < 6 ; i++){
    aux = Math.floor(valor/cedula[i]);
    console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`);
    valor = valor%cedula[i];
}

console.log('MOEDAS:');
for (let j = 6; j < cedula.length ; j++){
    aux = Math.floor(valor/cedula[j]);
    console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`);
    valor = valor%cedula[j] + 0.00001;
}

// trunc ignora casas decimais
// floor arredonda pra baixa