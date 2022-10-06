// See https://aka.ms/new-console-template for more information

while (true)
{
    Console.WriteLine("Enter a positive integer:");
    var isValidInput = int.TryParse(Console.ReadLine(), out var input);

    switch (isValidInput, input)
    {
        case (false, _):
            Console.WriteLine("Input is not an integer.");
            continue;
        case (true, <= 0):
            Console.WriteLine("Input is not a positive integer.");
            continue;
        default:
            Console.WriteLine("Output:");
            break;
    }

    Enumerable.Range(1, input)
        .Select(FizzBuzz).ToList()
        .ForEach(Console.WriteLine);
    
    string FizzBuzz(int i) =>
        (i % 3, i % 5) switch {
            (0, 0) => "FizzBuzz",
            (0, _) => "Fizz",
            (_, 0) => "Buzz",
            _      => i.ToString()
        };
    
    break;
}
