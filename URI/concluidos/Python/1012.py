import math
line = input().split(" ")
a, b, c = line

print('TRIANGULO: %0.3f' % ((float(a) * float(c))/2))
print('CIRCULO: %0.3f' % (math.pow(float(c),2) * 3.14159))
print('TRAPEZIO: %0.3f' % (((float(a) + float(b)) * float(c)) / 2))
print('QUADRADO: %0.3f' % (math.pow(float(b), 2)))
print('RETANGULO: %0.3f' % (float(a) * float(b)))