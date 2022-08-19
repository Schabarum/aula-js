teste = int(input())

while teste > 0:
    linha = input().split(" ")
    acimaMedia = 0
    alunos = int(linha[0])
    while alunos > 0:
        if int(linha[alunos]) > 80:
            acimaMedia += 1
        alunos -= 1
    
    porcentagem = (acimaMedia * 100) / int(linha[0])
    print('{:.3f}%'.format(porcentagem))
    teste -= 1

## Não faz sentido a média não ta definida
#5
#5 50 50 70 80 100
#7 100 95 90 80 70 60 50
#3 70 90 80
#3 70 90 81
#9 100 99 98 97 96 95 94 93 91

#40.000%
#57.143%
#33.333%
#66.667%
#55.556%