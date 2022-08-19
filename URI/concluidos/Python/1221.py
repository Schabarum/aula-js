teste = int(input())

while teste > 0:
    message = ''
    primo = int(input())
    if primo > 1:
        div = 1
        while div <= primo:
            resto = primo % div
            # se o resto da divisão for maior que zero
            if div == primo:
                message = 'Prime'

            if resto == 0 and not (div == 1 or div == primo):
                div = primo #Pra encerrar o loop
                message = 'Not Prime'

            div += 1
    else:
        message = 'Not Prime'

    print(message)
    teste -= 1

# Time limit exceeded reduzir os loops
# Review Utilizar o Crivo de Eratóstenes