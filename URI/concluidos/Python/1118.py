soma = 0
validas = 0

loop = int(input)
while validas <= 2:
    # novo calculo (1-sim 2-nao)
    nota = float(input())
    if (nota >= 0) and (nota <= 10):
        validas += 1
        soma += nota
    else:
        print('nota invalida')

print('media = %0.2f' % (soma / 2))