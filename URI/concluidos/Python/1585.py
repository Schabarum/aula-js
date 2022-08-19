teste = int(input())

while teste > 0:
    [val, val1] = input().split(" ")
    val = int(val)
    val1 = int(val1)
    print('%0d cm2' % ((val / 2) * val1))
    teste -= 1