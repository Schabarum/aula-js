[x, y] = input().split(" ")
x = int(x)
y = int(y)

index = 1
while y >= index:
    listinha = ''
    limite = 1
    while x >= limite :
        ultimoElemento = index + x
        if index == y:
            ultimoElemento = index
            listinha += str(index) + ' '
            limite += 1  
        elif index == ultimoElemento:
           listinha += str(index)
        else:
           listinha += str(index) + ' '

        limite += 1
        index += 1

    print(listinha.strip())