linha = input()

[a,b,c,d] = linha.split(" ")
a = int(a)
b = int(b)
c = int(c)
d = int(d)

apar = a % 2 == 0
if b > c and d > a and c > 0 and d > 0 and c + d > a + b and apar:
    print('Valores aceitos')
else:
    print('Valores nao aceitos')