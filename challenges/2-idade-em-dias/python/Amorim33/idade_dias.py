import math

n = int(input())

print(int(n/365), "ano(s)")
print(int((n%365)/30), "mes(es)")
print(int((n%365)%30), "dia(s)")