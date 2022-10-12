# IDADE EM DIAS

dias = int(input())
anos = dias // 365
dias %= 365
meses = dias // 30
dias %= 30

print("%d ano(s)" % anos)
print("%d mes(es)" % meses)
print("%d dia(s)" % dias)