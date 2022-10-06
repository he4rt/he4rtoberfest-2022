using System;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.Write("Digite o valor do primeiro produto: ");
        if (!int.TryParse(Console.ReadLine(), out int x)) throw new ArgumentException("Primeiro parâmetro inválido.");

        Console.Write("Digite o valor do segundo produto: ");
        if (!int.TryParse(Console.ReadLine(), out int y)) throw new ArgumentException("Segundo parâmetro inválido.");
        Console.WriteLine(Produto.Calc(x, y));
    }
    public static class Produto
    {
        public static string Calc(int x, int y)
        {
            int result = x * y;
            return $"Produto: {result}";
        }
    }
}
