soma = 0
validas = 1
while validas <= 2:
    nota = float(input())
    if (nota >= 0) and (nota <= 10):
        validas += 1
        soma += nota
    else:
        print('nota invalida')

print('media = %0.2f' % (soma / 2))