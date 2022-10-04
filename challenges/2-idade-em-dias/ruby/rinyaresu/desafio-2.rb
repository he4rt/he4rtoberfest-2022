# frozen_string_literal: true

require 'minitest/autorun'
require 'minitest/pride'

class Main
  def initialize
    @ano = 0
    @mes = 0
    @dia = 0
  end

  def calcula_idade(idade)
    @ano = (idade / 365).to_i
    @mes = ((idade % 365) / 30).to_i
    @dia = ((idade % 365) % 30).to_i

    puts "#{@ano} ano(s)\n#{@mes} mes(es)\n#{@dia} dia(s)"
    print "\n"
  end
end

puts 'Digite um numero: '
idade = gets.chomp.to_i
main = Main.new
main.calcula_idade(idade)

class Teste < Minitest::Test
  def setup
    @main = Main.new
  end

  def test_calcula_idade
    @main.calcula_idade(400);
    assert_equal 1, @main.instance_variable_get(:@ano)
    assert_equal 1, @main.instance_variable_get(:@mes)
    assert_equal 5, @main.instance_variable_get(:@dia)

    @main.calcula_idade(800);
    assert_equal 2, @main.instance_variable_get(:@ano)
    assert_equal 2, @main.instance_variable_get(:@mes)
    assert_equal 10, @main.instance_variable_get(:@dia)

    @main.calcula_idade(30);
    assert_equal 0, @main.instance_variable_get(:@ano)
    assert_equal 1, @main.instance_variable_get(:@mes)
    assert_equal 0, @main.instance_variable_get(:@dia)
  end
end
