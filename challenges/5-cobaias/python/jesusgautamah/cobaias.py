import sys

def main():
    file = open(sys.argv[1], 'r')
    data = parse_data()
    total_cobaias = count_cobaias(data)
    total_coelhos = count_coelhos(data)
    total_ratos = count_ratos(data)
    total_sapos = count_sapos(data)
    print_result(total_cobaias, total_coelhos, total_ratos, total_sapos)
    file.close()

def parse_data():
    file = open(sys.argv[1], 'r')
    data = []
    for line in file:
        line = line.rstrip()
        data.append(line.split(' '))
    return data

def count_cobaias(data):
    total_cobaias = 0
    for line in data:
        if line != data[0]:
          total_cobaias += int(line[0])
    return total_cobaias

def count_coelhos(data):
    total_coelhos = 0
    for line in data:
        if line != data[0]:
          if line[1] == 'C':
            total_coelhos += int(line[0])
    return total_coelhos

def count_ratos(data):
    total_ratos = 0
    for line in data:
        if line != data[0]:
          if line[1] == 'R':
            total_ratos += int(line[0])
    return total_ratos

def count_sapos(data):
    total_sapos = 0
    for line in data:
        if line != data[0]:
          if line[1] == 'S':
            total_sapos += int(line[0])
    return total_sapos

def print_result(total_cobaias, total_coelhos, total_ratos, total_sapos):
    print('Total: {} cobaias'.format(total_cobaias))
    print('Total de coelhos: {}'.format(total_coelhos))
    print('Total de ratos: {}'.format(total_ratos))
    print('Total de sapos: {}'.format(total_sapos))
    print('Percentual de coelhos: {:.2f} %'.format(total_coelhos/total_cobaias*100))
    print('Percentual de ratos: {:.2f} %'.format(total_ratos/total_cobaias*100))
    print('Percentual de sapos: {:.2f} %'.format(total_sapos/total_cobaias*100))
    

if __name__ == '__main__':
    main()
