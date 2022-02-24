gcd = lambda x,y : [i for i in range(min(x,y),0,-1) if x%i == y%i == 0][0]
print(gcd(120,90))