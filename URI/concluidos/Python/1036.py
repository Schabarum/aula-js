import math

[a, b, c] = input().split(" ")

a = float(a)
b = float(b)
c = float(c)

delta = pow(b,2) - (4*a*c);

if ((a == 0) and (delta < 0)):
    print('Impossivel calcular')
else:
    r1 = (((-1 * b) + pow(delta, 0.5)) / (2*a))
    r2 = (((-1 * b) - pow(delta, 0.5)) / (2*a))
    print('R1 = %0.5f' % r1)
    print('R2 = %0.5f' % r2)