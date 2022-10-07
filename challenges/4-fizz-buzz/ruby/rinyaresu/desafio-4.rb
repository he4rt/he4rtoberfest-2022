# frozen_string_literal: true

require 'minitest/autorun'
require 'minitest/pride'

def fizzbuzz(x)
  (1..x).each do |i|
    if (i % 3).zero? && (i % 5).zero?
      puts 'FizzBuzz'
    elsif (i % 3).zero?
      puts 'Fizz'
    elsif (i % 5).zero?
      puts 'Buzz'
    else
      puts i
    end
  end
end

puts 'Digite um número inteiro: '
x = gets.chomp.to_i
fizzbuzz(x)

class FizzBuzzTest < Minitest::Test
  def test_fizzbuzz
    assert_output("1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n") { fizzbuzz(16) }
    assert_output("1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n") { fizzbuzz(30) }
  end
end