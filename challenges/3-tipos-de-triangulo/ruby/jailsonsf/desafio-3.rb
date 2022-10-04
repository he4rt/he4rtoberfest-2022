inputs = ARGV.map(&:to_f)
sorted = inputs.sort { |a, b| b <=> a }

A = sorted[0]
B = sorted[1]
C = sorted[2]

puts "Entrada: #{inputs[0]} #{inputs[1]} #{inputs[2]}"

if A >= B + C
  puts 'NAO FORMA TRIANGULO'
else
  puts 'TRIANGULO RETANGULO' if A == B + C
  puts 'TRIANGULO OBTUSANGULO' if A > B + C
  puts 'TRIANGULO ACUTANGULO' if A < B + C
  puts 'TRIANGULO EQUILATERO' if A == B && B == C
  puts 'TRIANGULO ISOSCELES' if (A == B && B != C) || (A == C && C != B) || (C == B && B != A)
end
