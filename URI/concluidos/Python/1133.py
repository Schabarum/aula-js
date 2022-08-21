x = int(input())
y = int(input())

x += 1
while y > x:
    if (x % 5 == 2) or (x % 5 == 3):
        print(x)
    x += 1
