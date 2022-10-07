# frozen_string_literal: true

require 'minitest/autorun'
require 'minitest/pride'

def ordenaVetor(a, b, c)
  a, b = b, a if a < b

  b, c = c, b if b < c

  a, c = c, a if a < c

  [a, b, c]
end

def verificaTriangulo(a, b, c)
  if a >= b + c
    puts 'NAO FORMA TRIANGULO'
  else

    puts 'TRIANGULO RETANGULO' if a**2 == (b**2) + (c**2)

    puts 'TRIANGULO OBTUSANGULO' if a**2 > (b**2) + (c**2)

    puts 'TRIANGULO ACUTANGULO' if a**2 < (b**2) + (c**2)

    puts 'TRIANGULO EQUILATERO' if a == b && b == c

    puts 'TRIANGULO ISOSCELES' if (a == b && a != c) || (b == c && a != b) || (a == c && a != b)
  end
end

valores = gets.split

a = valores[2].to_f
b = valores[1].to_f
c = valores[0].to_f

a, b, c = ordenaVetor(a, b, c)

verificaTriangulo(a, b, c)

# teste verificaTriangulo

class Teste < Minitest::Test
  def test_verificaTriangulo
    assert_output(/TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES/) { verificaTriangulo(7.0, 5.0, 7.0) }
    assert_output(/TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES/) { verificaTriangulo(6.0, 6.0, 10.0) }
    assert_output(/TRIANGULO ACUTANGULO\nTRIANGULO EQUILATERO/) { verificaTriangulo(6.0, 6.0, 6.0) }
  end
end
