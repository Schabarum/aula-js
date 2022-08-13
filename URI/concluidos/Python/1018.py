valor = int(input())
nota100 = 0
nota50 = 0
nota20 = 0
nota10 = 0
nota5 = 0
nota2 = 0
nota1 = 0

print(valor)
while valor > 0:
    if valor >= 100:
        nota100 = nota100 + 1
        valor = valor - 100
    elif valor >= 50:
        nota50 = nota50 + 1
        valor = valor - 50
    elif valor >= 20:
        nota20 = nota20 + 1
        valor = valor -20
    elif valor >= 10:
        nota10 = nota10 + 1
        valor = valor -10
    elif valor >= 5:
        nota5 = nota5 + 1
        valor = valor - 5
    elif valor >= 2:
        nota2 = nota2 + 1
        valor = valor - 2
    else:
        nota1 = nota1 + 1
        valor = valor - 1

print('%0d nota(s) de R$ 100,00' % nota100)
print('%0d nota(s) de R$ 50,00' % nota50)
print('%0d nota(s) de R$ 20,00' % nota20)
print('%0d nota(s) de R$ 10,00' % nota10)
print('%0d nota(s) de R$ 5,00' % nota5)
print('%0d nota(s) de R$ 2,00' % nota2)
print('%0d nota(s) de R$ 1,00' % nota1)