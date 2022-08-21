loop = int(input())

while loop > 0:
    [x, y] = input().split(" ")
    x = int(x)
    y = int(y)

    somaImpares = 0

    if x > y:
        menor = y + 1
        maior = x
    elif y > x:
        menor = x + 1
        maior = y
    else:
        maior = x
        menor = y

    for x in range (menor, maior):
        if x % 2 > 0:
            somaImpares += x 

    print(somaImpares)
    loop -= 1