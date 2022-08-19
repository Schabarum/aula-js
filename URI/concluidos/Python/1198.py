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
            if val1 > val2:
                print(val1 - val2)
            elif val2 > val1:
                print(val2 - val1)
            else:
                print(0)

    except EOFError:
        break       
