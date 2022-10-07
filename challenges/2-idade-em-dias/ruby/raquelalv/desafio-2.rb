dias = gets.chomp.to_i
ano = dias/365
mes = (dias % 365) / 30
dia = (dias % 365) % 30

puts "#{ano} ano(s)\n#{mes} mes(es)\n#{dia} dia(s)"