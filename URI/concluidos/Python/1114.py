acertou = True

while acertou:
    senha = int(input())
    if senha == 2002:
        print('Acesso Permitido')
        acertou = False
    else:
        print('Senha Invalida')