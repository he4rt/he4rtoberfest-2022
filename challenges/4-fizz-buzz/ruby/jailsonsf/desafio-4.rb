input = ARGV.map(&:to_i)[0]

def fizz_buzz(number)
  if (number % 3).zero? && (number % 5).zero?
    'FizzBuzz'
  elsif (number % 3).zero?
    'Fizz'
  elsif (number % 5).zero?
    'Buzz'
  else
    number
  end
end

(1..input).each do |number|
  puts fizz_buzz(number)
end
