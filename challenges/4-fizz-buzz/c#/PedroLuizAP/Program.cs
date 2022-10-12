int valorInteiro = 0;

if (int.TryParse(args[0], out valorInteiro))
{
    for (int i = 1; i <= valorInteiro; i++)
    {
        string saida = string.Empty;

        if (i % 3 != 0 && i % 5 != 0)
        {
            saida += $"{i}";
        }
        else
        {
            if (i % 3 == 0) saida += "Fizz";

            if (i % 5 == 0) saida += "Buzz";
        }

        Console.WriteLine(saida);
    }
}
