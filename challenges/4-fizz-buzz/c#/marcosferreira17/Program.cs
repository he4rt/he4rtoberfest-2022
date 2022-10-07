using System.Collections;
using System;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine();
        while (true)
        {
            Console.Write("saída: ");
            int.TryParse(Console.ReadLine(), out int x);
            Fizz.Calc(x);
        }
    }
    public static class Fizz
    {
        public static void Calc(int x)
        {
            for (var i = 1; i <= x; i++)
            {
                if (i % 3 == 0 && i % 5 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                }
                else if (i % 3 == 0)
                {
                    Console.WriteLine("fizz");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("Buzz");
                }
                else
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}