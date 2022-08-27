montanhas = int(input())

lnongolia = False
lMontanhas = input().split(" ")
medida = 0
penultimoValor = 0
ultimoValor = 0
for i in range (0, montanhas):
    medida = int(lMontanhas[i])
    if penultimoValor == 0 and ultimoValor > 0:
        penultimoValor = ultimoValor

    if ultimoValor == 0:
        ultimoValor = medida

    if penultimoValor > ultimoValor and ultimoValor < medida:
        lnongolia = True
    elif ultimoValor > penultimoValor and medida > ultimoValor:
        lnongolia = True
    else:
        lnongolia = False

    if ultimoValor > 0:
        penultimoValor = ultimoValor
    ultimoValor = medida

if lnongolia:
    print('1')
else:
    print('0')
    