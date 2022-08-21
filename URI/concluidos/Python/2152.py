teste = int(input())

while teste > 0:
    intList = [int(item) for item in input().split(" ")]
    if intList[2] == 1:
        returnIF = 'A porta abriu!'
    else:
        returnIF = 'A porta fechou!'
    
    result = '{hora}:{minuto} - {acao}'
    result = result.replace('{hora}', str(intList[0]).rjust(2, '0'))
    result = result.replace('{minuto}', str(intList[1]).rjust(2, '0'))
    result = result.replace('{acao}', returnIF)
    print(result)
    teste -= 1