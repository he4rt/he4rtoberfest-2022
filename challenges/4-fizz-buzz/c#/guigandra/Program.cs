using System;

class Program
{
    static void Main(string[] args)
    {
        while (true)
        {
            Console.WriteLine("Informe um valor inteiro:");
            var nInteiro = int.TryParse(Console.ReadLine(), out var input);

            switch (nInteiro, input)
            {
                case (false, _):
                    Console.WriteLine("Esse numero não é um inteiro.");
                    continue;
                case (true, <= 0):
                    Console.WriteLine("Esse numero é negativo.");
                    continue;
                default:
                    Console.WriteLine("----------------------------");
                    break;
            }

            Enumerable.Range(1, input)
                .Select(FizzBuzz).ToList()
                .ForEach(Console.WriteLine);

            string FizzBuzz(int i) =>
                (i % 3, i % 5) switch
                {
                    (0, 0) => "FizzBuzz",
                    (0, _) => "Fizz",
                    (_, 0) => "Buzz",
                    _ => i.ToString()
                };

            break;
        }
    }
}

