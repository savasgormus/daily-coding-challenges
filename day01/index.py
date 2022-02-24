obeb = lambda x,y : [i for i in range(min(x,y),0-1)
                        if x%i == y%i == 0][0]
print(obeb(12,16))