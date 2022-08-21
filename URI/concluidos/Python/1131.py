valor = 1
grenais = 0
interWin = 0
gremioWin = 0
empate = 0
while valor != 2:
    [golInter, golGremio] = input().split(" ")
    golInter = int(golInter)
    golGremio = int(golGremio)
    grenais += 1
    if golInter > golGremio:
        interWin += 1
    elif golGremio > golInter:
        gremioWin += 1
    else:
        empate += 1

    print('Novo grenal (1-sim 2-nao)')
    valor = int(input())

print(grenais, 'grenais')   
print('Inter:%0d' % interWin)
print('Gremio:%0d' % gremioWin)
print('Empates:%0d' % empate)

if interWin > gremioWin:
    print('Inter venceu mais')
elif gremioWin > interWin:
    print('Gremio venceu mais')
elif interWin == gremioWin:
    print('Nao houve vencedor')
