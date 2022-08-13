linha = input().split(" ")

for i in range(0, len(linha)):
    linha[i] = int(linha[i])

print('%0d eh o maior' % max(linha))