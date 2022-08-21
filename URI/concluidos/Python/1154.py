idade = 0
index = 0
soma = 0

while idade >= 0:
    idade = int(input())
    if idade >= 0:
        index += 1
        soma += idade
    
print('%0.2f' % (soma / index))