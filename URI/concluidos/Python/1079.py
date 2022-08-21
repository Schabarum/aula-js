casos = int(input())

while casos > 0:
    floatList = [float(item) for item in input().split(" ")]
    print('%0.1f'% (((floatList[0] * 2) + (floatList[1] * 3) + (floatList[2] * 5)) / 10))
    casos -= 1
