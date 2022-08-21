soma = 1
ultimoValor = 1
soma = 2
resultado = 1

for x in range (3, 40):
    if x % 2 > 0:
        div = ultimoValor * soma
        ultimoValor = div
        resultado += x / div
        
print('%0.2f' % resultado)        