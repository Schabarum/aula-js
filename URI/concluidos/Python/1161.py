finish = True
[val1, val2] = input().split(" ")

while finish:    
    val1 = int(val1)
    val2 = int(val2)

    resultado1 = 1
    while val1 > 1:
        resultado1 = resultado1 * val1
        val1 = val1 - 1

    resultado2 = 1
    while val2 > 1:
        resultado2 = resultado2 * val2
        val2 = val2 - 1

    print(resultado1 + resultado2)
    try:
        lista = input()
        if not lista:
            finish = False
        else:
            [val1, val2] = lista.split(" ")
    except EOFError:
        break    