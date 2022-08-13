import math

x, y = input().split(" ")
x1, y1 = input().split(" ")

print('%0.4f' % (math.sqrt(math.pow((float(x1) - float(x)), 2) + (math.pow((float(y1) - float(y)),2)))))