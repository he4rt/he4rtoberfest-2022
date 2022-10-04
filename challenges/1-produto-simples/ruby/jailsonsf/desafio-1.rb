inputs = ARGV
inputs.map(&:to_i)

first_value = inputs[0].to_i
second_value = inputs[1].to_i

prod = first_value * second_value

puts "produto: #{prod}"
