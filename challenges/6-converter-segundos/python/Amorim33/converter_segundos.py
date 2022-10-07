import math

n = int(input())

print("{:02.0f}".format(math.floor(n/3600)),":", "{:02.0f}".format(math.floor((n%3600)/60)),":", "{:02.0f}".format(math.floor(n%60)), sep="")
