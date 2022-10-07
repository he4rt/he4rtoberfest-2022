try
{
    Console.WriteLine("Digite um número inteiro e aperte enter");
    int num1 = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite um número inteiro e aperte enter");
    int num2 = Convert.ToInt32(Console.ReadLine());

    int prod = num1 * num2;

    Console.WriteLine($"produto: {prod}");
    Console.ReadKey();
}
catch (OverflowException)
{
    Console.WriteLine("Número maior que o permitido"); ;
}
catch (FormatException)
{
    Console.WriteLine("Input não é um número");
}

