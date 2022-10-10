valor = ARGV[0].to_i

(1..valor).each do |number|
  if number%3==0 && number%5==0
    puts "FizzBuzz"
  elsif number%3==0
    puts "Fizz"
  elsif number%5==0
    puts "Buzz"
  else
    puts number
  end
end