print "Digite a idade em dias (ex: 400): "
idade_em_dias = gets.chomp.to_i

ref_ano = 365
ref_mes_e_dia = 30

indica_ano = idade_em_dias / ref_ano
indica_mes = (idade_em_dias % ref_ano) / ref_mes_e_dia
indica_dia = (idade_em_dias % ref_ano) % ref_mes_e_dia

puts "#{indica_ano} ano(s)"
puts "#{indica_mes} mês(es)"
puts "#{indica_dia} dia(s)"
