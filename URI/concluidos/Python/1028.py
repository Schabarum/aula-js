laco = int(input())

while laco > 0:
    linha = input()
    [ricardo, vicente] = linha.split(" ")
    ricardo = int(ricardo)
    vicente = int(vicente)
    div = 1
    achou = div = 1
    while achou:
        ricaPar = ricardo % 2
        if ricaPar:   
            print(ricardo / div, ' - ', vicente / div, ' - ', div)
        if ricardo / div == vicente / div:
            achou = False
            print(div)
        div = div + 1

        if div == 10:
            achou = False
    laco = laco - 1