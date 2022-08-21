[hinicio, minicio, hfinal, mfinal] = input().split(" ")

hinicio = int(hinicio)
minicio = int(minicio)
hfinal = int(hfinal)
mfinal = int(mfinal)

if hinicio == hfinal: # horas iguais
    horas = 24
    if minicio == mfinal:
        minutos = 0
    elif minicio < mfinal:
        minutos = mfinal - minicio
        horas = 0
    elif minicio > mfinal:
        restoM = minicio - mfinal
        minutos = 60 - restoM
        horas -= 1

elif hinicio < hfinal: # Hora de inicio menor que hora final
    horas = hfinal - hinicio 
    if minicio == mfinal:
        minutos = 0
    elif minicio < mfinal:
        minutos = mfinal - minicio
    elif mfinal < minicio:
        restoM = minicio - mfinal
        minutos = 60 - restoM
        horas -= 1

elif hinicio > hfinal: # Hora inicial maior que hora final
    restoH = 24 - hinicio
    horas = restoH + hinicio
    if minicio == mfinal:
        minutos = 0
    elif minicio < mfinal:
        minutos = mfinal - minicio
    elif mfinal < minicio:
        restoM = minicio - mfinal
        minutos = 60 - restoM
        horas -= 1

result = 'O JOGO DUROU {hora} HORA(S) E {minuto} MINUTO(S)' 
print (result.replace("{hora}", str(horas)).replace("{minuto}", str(minutos)))