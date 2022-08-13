linha = input().split(" ")
code, npecas, vlunit = linha
linha = input().split(" ")
code1, npecas1, vlunit1 = linha

print('VALOR A PAGAR: R$ %0.2f' % ((int(npecas) * float(vlunit)) + (int(npecas1) * float(vlunit1))))