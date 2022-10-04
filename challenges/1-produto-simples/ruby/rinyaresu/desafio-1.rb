class Soma
  def initialize
    @PROD = var * var2
    puts "PROD = #{@PROD}"
  end

  def var
    puts "Escreva um numero"
    var = gets.to_i
  end

  def var2
    puts "Escreva outro numero"
    var2 = gets.to_i
  end
end

soma = Soma.new

