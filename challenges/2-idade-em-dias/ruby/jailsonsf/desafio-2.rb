days = ARGV.map(&:to_i)[0]

years = (days / 365).floor
days -= years * 365
months = (days / 30).floor
days -= months * 30

puts "#{years} ano(s)"
puts "#{months} mes(s)"
puts "#{days} dia(s)"
