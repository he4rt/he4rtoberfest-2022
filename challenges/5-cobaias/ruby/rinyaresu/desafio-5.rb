# frozen_string_literal: true

require 'minitest/autorun'
require 'minitest/pride'

class Experimento
  attr_accessor :tipo, :quantidade

  def initialize(tipo, quantidade)
    @tipo = tipo
    @quantidade = quantidade
  end
end

class Laboratorio
  attr_accessor :experimentos

  def initialize
    @experimentos = []
  end

  def add_experimento(experimento)
    @experimentos << experimento
  end

  def total_cobaias
    @experimentos.reduce(0) { |sum, experimento| sum + experimento.quantidade }
  end

  def percentual_cobaia(tipo)
    (cobaias(tipo) * 100.0 / total_cobaias).round(2)
  end

  def cobaias(tipo)
    @experimentos.select do |experimento|
      experimento.tipo == tipo
    end.reduce(0) { |sum, experimento| sum + experimento.quantidade }
  end
end

class Relatorio
  def initialize(laboratorio)
    @laboratorio = laboratorio
  end

  def imprime
    puts 'Total: %d cobaias' % @laboratorio.total_cobaias
    puts 'Total de coelhos: %d' % @laboratorio.cobaias('C')
    puts 'Total de ratos: %d' % @laboratorio.cobaias('R')
    puts 'Total de sapos: %d' % @laboratorio.cobaias('S')
    puts 'Percentual de coelhos: %.2f %%' % @laboratorio.percentual_cobaia('C')
    puts 'Percentual de ratos: %.2f %%' % @laboratorio.percentual_cobaia('R')
    puts 'Percentual de sapos: %.2f %%' % @laboratorio.percentual_cobaia('S')
  end
end

laboratorio = Laboratorio.new

n = gets.to_i

(1..n).each do |_i|
  quantidade, tipo = gets.split(' ')
  experimento = Experimento.new(tipo, quantidade.to_i)
  laboratorio.add_experimento(experimento)
end

relatorio = Relatorio.new(laboratorio)
relatorio.imprime

class TestRelatorio < Minitest::Test
  def test_relatorio
    laboratorio = Laboratorio.new
    laboratorio.add_experimento(Experimento.new('C', 10))
    laboratorio.add_experimento(Experimento.new('R', 6))
    laboratorio.add_experimento(Experimento.new('S', 15))
    laboratorio.add_experimento(Experimento.new('C', 5))
    laboratorio.add_experimento(Experimento.new('R', 14))
    laboratorio.add_experimento(Experimento.new('C', 9))
    laboratorio.add_experimento(Experimento.new('R', 6))
    laboratorio.add_experimento(Experimento.new('S', 8))
    laboratorio.add_experimento(Experimento.new('C', 5))
    laboratorio.add_experimento(Experimento.new('R', 14))
    relatorio = Relatorio.new(laboratorio)
    assert_output(
      "Total: 92 cobaias
Total de coelhos: 29
Total de ratos: 40
Total de sapos: 23
Percentual de coelhos: 31.52 %
Percentual de ratos: 43.48 %
Percentual de sapos: 25.00 %
"
    ) { relatorio.imprime }
  end
end
