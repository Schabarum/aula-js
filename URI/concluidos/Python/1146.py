valor = int(input())

while valor > 0:
    index = 1
    listinha = ''
    while valor >= index:
        if valor == index:
            listinha += str(index)
        else:
            listinha += str(index) + ' '
        index += 1

    print(listinha)
    valor = int(input())