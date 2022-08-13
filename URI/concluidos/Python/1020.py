dias = int(input())

ano = 0
mes = 0
dia = 0

while dias > 0:
    if dias >= 365:
        dias = dias - 365
        ano = ano + 1
    elif dias >= 30:
        dias = dias - 30
        mes = mes + 1
    elif dias >= 1:
        dias = dias - 1
        dia = dia + 1

print('%0d ano(s)' % ano)
print('%0d mes(es)' % mes)
print('%0d dia(s)' % dia)