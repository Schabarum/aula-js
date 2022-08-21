[m, n] = input().split(" ")
m = int(m)
n = int(n)
while ((m > 0) and (n > 0)):
    linha = ''
    soma = 0
    if m > n:
        maior = m + 1
        menor = n
    else:
        maior = n + 1
        menor = m

    for x in range (menor, maior):
        linha += str(x) + ' '
        soma += x
    
    linha += 'Sum=' + str(soma)

    print(linha)
    [m, n] = input().split(" ")
    m = int(m)
    n = int(n)
