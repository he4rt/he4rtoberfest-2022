dias_totais = ARGV[0].to_i
anos = dias_totais/365
dias_totais = dias_totais%365
meses = dias_totais/30
dias_totais = dias_totais%30
puts "Anos #{anos}"
puts "Meses #{meses}"
puts "Dias #{dias_totais}"