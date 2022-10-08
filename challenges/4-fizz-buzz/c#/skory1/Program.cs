while (true)
{
    try
    {
        Console.WriteLine("Digite um número inteiro:");
        int number = int.Parse(Console.ReadLine());
        
        for (int i = 1; i <= number; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                Console.WriteLine("FizzBuzz");
                continue;
            }

            if (i % 3 == 0)
            {
                Console.WriteLine("Fizz");   
                continue;
            }

            if (i % 5 == 0)
            {
                Console.WriteLine("Buzz");
                continue;
            }

            else
                Console.WriteLine(i);
        }
        
        break;
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}