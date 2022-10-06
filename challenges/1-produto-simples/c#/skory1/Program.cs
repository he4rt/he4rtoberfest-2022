while (true)
{
    try
    {
        Console.WriteLine("Digite o PRIMEIRO número:");
        int firstNumber = int.Parse(Console.ReadLine());

        Console.WriteLine("Digite o SEGUNDO número:");
        int secondNumber = int.Parse(Console.ReadLine());

        int prod = firstNumber * secondNumber;
        Console.WriteLine($"produto: {prod}");
    
        break;
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}