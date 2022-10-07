try
{
    if (args.Length <= 1)
    {
        throw new ArgumentNullException();
    }

    if (args.Length != 3)
    {
        throw new ArgumentOutOfRangeException();
    }

    bool parseArgs1 = int.TryParse(args[1], out int num1);
    bool parseArgs2 = int.TryParse(args[2], out int num2);

    if (!parseArgs1 || !parseArgs2)
    {
        throw new InvalidCastException();
    }

    int prod = num1 * num2;

    Console.WriteLine($"Produto simples: " + num1 + " * " + num2 + " = " + prod);

}
catch (ArgumentNullException)
{
    Console.WriteLine("Nenhum argumento encontrado!");
}
catch (ArgumentOutOfRangeException)
{
    Console.WriteLine("Numero de argumentos invalidos!");
}
catch (InvalidCastException)
{
    Console.WriteLine("Um ou mais argumentos sao de tipo invalido!");
}
catch (Exception)
{
    Console.WriteLine("Ocorreu um erro!");
}
