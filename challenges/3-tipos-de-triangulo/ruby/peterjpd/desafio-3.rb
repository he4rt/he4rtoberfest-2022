lados = ARGV
lados.map! { |number| number.to_f }.sort!.reverse!
A = lados[0]
B = lados[1]
C = lados[2]

  
if A >= (B + C)
  puts "Não forma triângulo"
else
  if (A**2) == ((B**2) + (C**2))
    puts "Triângulo Retangulo"
  end
  if (A**2) > ((B**2) + (C**2))
    puts "Triângulo Obtusangulo"
  end
  if (A**2) < ((B**2) + (C**2))
    puts "Triângulo Acutangulo"
  end
  if A == B && B == C
    puts "Triângulo Equilátero"
  elsif A == B || B == C || A == C
    puts "Triangulo Isosceles"
  end
end