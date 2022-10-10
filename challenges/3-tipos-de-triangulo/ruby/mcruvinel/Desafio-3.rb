p "Informe tres valores para verificar qual o tipo de triangulo"
p "Infome a primeira medida: "
lado_a = Float(gets)
p "Infome a segunda medida: "
lado_b = Float(gets)
p "Infome a terceira medida: "
lado_c = Float(gets)

lados = [lado_a, lado_b, lado_c]
lados_ordenados = lados.sort { |a, b| b <=> a }

if lado_a >= lado_b + lado_c
    p 'NAO FORMA TRIANGULO'
  else
    p 'TRIANGULO RETANGULO' if lado_a == lado_b + lado_c
    p 'TRIANGULO OBTUSANGULO' if lado_a > lado_b + lado_c
    p 'TRIANGULO ACUTANGULO' if lado_a < lado_b + lado_c
    p 'TRIANGULO EQUILATERO' if lado_a == lado_b && lado_b == lado_c
    p 'TRIANGULO ISOSCELES' if (lado_a == lado_b && lado_b != lado_c) || (lado_a == lado_c && lado_c != lado_b) || (lado_c == lado_b && lado_b != lado_a)
end
