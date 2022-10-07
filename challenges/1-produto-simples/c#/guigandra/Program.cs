using System;


class Program
{
    static void Main(string[] args)
    {
        int prod1;
        int prod2;

        Console.WriteLine("Digite o valor do 1 produto:");
        prod1 = int.Parse(Console.ReadLine());
        Console.WriteLine("Digite o valor do 2 produto:");
        prod2 = int.Parse(Console.ReadLine());

        var PROD = prod1 * prod2;

        Console.WriteLine("Produto: " + PROD);
    }
}


