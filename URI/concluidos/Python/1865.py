loop = int(input())

while loop > 0:
    [heroi, poder] = input().split(" ")
    if heroi == 'Thor':
        print('S')
    else:
        print('N')
    loop -= 1
