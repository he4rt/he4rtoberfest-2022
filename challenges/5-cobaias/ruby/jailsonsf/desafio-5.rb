cobaias = {
  total: 0,
  total_coelhos: 0,
  total_ratos: 0,
  total_sapos: 0,
  percentual_coelhos: 0,
  percentual_ratos: 0,
  percentual_sapos: 0
}

test_cases = gets.to_i

(1..test_cases).each do |_i|
  quant, type = gets.split
  quant = quant.to_i
  type = type.upcase

  cobaias[:total] += quant

  case type
  when 'C'
    cobaias[:total_coelhos] += quant
  when 'R'
    cobaias[:total_ratos] += quant
  else
    cobaias[:total_sapos] += quant
  end
end

cobaias[:percentual_coelhos] = (cobaias[:total_coelhos] * 100.0 / cobaias[:total]).round(2)
cobaias[:percentual_ratos] = (cobaias[:total_ratos] * 100.0 / cobaias[:total]).round(2)
cobaias[:percentual_sapos] = (cobaias[:total_sapos] * 100.0 / cobaias[:total]).round(2)

puts "Total: #{cobaias[:total]} cobaias"

puts "Total de coelhos: #{cobaias[:total_coelhos]}"
puts "Total de ratos: #{cobaias[:total_ratos]}"
puts "Total de sapos: #{cobaias[:total_sapos]}"

puts "Percentual de coelhos: #{format('%.2f', cobaias[:percentual_coelhos])} %"
puts "Percentual de ratos: #{format('%.2f', cobaias[:percentual_ratos])} %"
puts "Percentual de sapos: #{format('%.2f', cobaias[:percentual_sapos])} %"
