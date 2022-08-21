loop = int(input())

index = 1
while loop >= index:
    print(index, (index * index), (index * (index * index)))
    print(index, ((index * index) + 1), ((index * (index * index)) + 1))
    index += 1