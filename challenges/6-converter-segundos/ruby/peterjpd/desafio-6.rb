segundos = ARGV[0].to_i

horas = segundos/3600
segundos = segundos%3600
minutos = segundos/60
segundos = segundos%60

horas = format('%02d', horas)
minutos = format('%02d', minutos)
segundos = format('%02d', segundos)

puts "#{horas}:#{minutos}:#{segundos}"