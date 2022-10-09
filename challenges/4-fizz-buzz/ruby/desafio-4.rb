p "Informe até qual número deseja realizar o Fizz Buzz"
fim = gets.chomp.to_i

(1..fim).each do |number|
    if number%3==0 && number%5==0 
        puts("FizzBuzz")
    elsif(number%5==0)    
        puts("Buzz") 
    elsif(number%3==0) 
        puts("Fizz")   
    else
        p(number)
    end
end

