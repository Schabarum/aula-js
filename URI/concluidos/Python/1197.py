finish = True
while finish:
    try:
        lista = input()
        if not lista:
            finish = False
        else:
            [val1, val2] = lista.split(" ")
            val1 = int(val1)
            val2 = int(val2)
            print(((val1 * 2) * val2))

    except EOFError:
        break       
