intList = [int(item) for item in input().split(" ")]

while intList[0] != 0 and intList[1] != 0:
    print((intList[0] * intList[1]))
    intList = [int(item) for item in input().split(" ")]