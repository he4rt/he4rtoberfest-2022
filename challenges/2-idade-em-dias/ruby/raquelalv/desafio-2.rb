dias = gets.chomp.to_i
ano = dias/365
mes = (dias % 365) / 30
dias = (dias % 365) % 30

puts "#{ano} ano(s)\n#{mes} mes(es)\n#{dias} dia(s)"