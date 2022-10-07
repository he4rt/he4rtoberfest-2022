try
{
    if (args.Length <= 1)
    {
        throw new ArgumentNullException();
    }

    if (args.Length != 2)
    {
        throw new ArgumentException();
    }

    bool parseArgs = int.TryParse(args[1], out int idadeEmDias);

    if (!parseArgs)
    {
        throw new InvalidCastException();
    }

    if (idadeEmDias <= 0)
    {
        throw new ArgumentOutOfRangeException();
    }

    int anos = idadeEmDias / 365;
    int meses = (idadeEmDias % 365) / 30;
    int dias = (idadeEmDias % 365) % 30;

    System.Console.WriteLine($"{anos} ano(s)");
    System.Console.WriteLine($"{meses} mes(es)");
    System.Console.WriteLine($"{dias} dia(s)");

}
catch (ArgumentNullException)
{
    Console.WriteLine("Nenhum argumento encontrado!");
}
catch (ArgumentOutOfRangeException)
{
    Console.WriteLine("Deve se informar um numero maior que zero!");
}
catch (ArgumentException)
{
    Console.WriteLine("Numero de argumentos invalido!");
}
catch (InvalidCastException)
{
    Console.WriteLine("Argumento e de um tipo invalido!");
}
catch (Exception)
{
    Console.WriteLine("Ocorreu um erro!");
}
