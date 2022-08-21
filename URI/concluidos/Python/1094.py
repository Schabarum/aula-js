loop = int(input())
totCobaias = 0
totCoelhos = 0
totRatos = 0
totSapos = 0

while loop > 0:
    [cobaias, tipo] = input().split(" ")
    cobaias = int(cobaias)
    totCobaias += cobaias
    if tipo == 'C':
        totCoelhos += cobaias
    elif tipo == 'R':
        totRatos += cobaias
    else:
        totSapos += cobaias
    loop -= 1

print('Total: %0d cobaias' % totCobaias)
print('Total de coelhos: %0d' % totCoelhos)
print('Total de ratos: %0d' % totRatos)
print('Total de sapos: %0d' % totSapos)
print('Percentual de coelhos: %0.2f' % ((totCoelhos * 100) / totCobaias), '%')
print('Percentual de ratos: %0.2f' % ((totRatos * 100) / totCobaias), '%')
print('Percentual de sapos: %0.2f' % ((totSapos * 100) / totCobaias), '%')