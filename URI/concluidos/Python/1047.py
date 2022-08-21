h1,m1,h2,m2=list(map(int,input().split()))
start=h1*60+m1
end=h2*60+m2
dif=end-start
if dif<=0:
    dif=dif+24*60

h=dif//60
m=dif%60
print(f'O JOGO DUROU {h} HORA(S) E {m} MINUTO(S)')