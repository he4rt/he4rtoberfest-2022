using System.Collections;
using System;
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine();
        while (true)
        {
            _ = int.TryParse(Console.ReadLine(), out int x);

            var input = TimeSpan.FromSeconds(x);

            Console.WriteLine(new TimeSpan(input.Hours, input.Minutes, input.Seconds));
        }
    }
}