using System.Collections;
using System;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine();
        while (true)
        {
            Console.Write("1º Entrada: ");
            double.TryParse(Console.ReadLine(), out double a);
            Console.Write("2º Entrada: ");
            double.TryParse(Console.ReadLine(), out double b);
            Console.Write("3º Entrada: ");
            double.TryParse(Console.ReadLine(), out double c);
            Console.WriteLine();
            Tringulo.Calc(a, b, c);

        }
    }
    public static class Tringulo
    {
        public static void Calc(double a, double b, double c)
        {
            // ArrayList result = new();

            double[] input = new double[]
            {
                a,
                b,
                c
            };
            Array.Sort(input);
            Array.Reverse(input);

            if (input[0] == 0 || input[1] == 0 || input[2] == 0) throw new ArgumentException("Parâmetros inválidos.");

            if (input[0] >= input[1] + input[2])
            {
                Console.WriteLine("NAO FORMA TRIANGULO");
            }
            else
            {
                if (Math.Pow(input[0], 2) == Math.Pow(input[1], 2) + Math.Pow(input[2], 2))
                    Console.WriteLine("TRIANGULO RETANGULO");

                if (Math.Pow(input[0], 2) > Math.Pow(input[1], 2) + Math.Pow(input[2], 2))
                    Console.WriteLine("TRIANGULO OBTUSANGULO");

                if (Math.Pow(input[0], 2) < Math.Pow(input[1], 2) + Math.Pow(input[2], 2))
                    Console.WriteLine("TRIANGULO ACUTANGULO");

                if (input[0] == input[1] && input[0] == input[2])
                    Console.WriteLine("TRIANGULO EQUILATERO\n");

                if ((input[0] == input[1] && input[0] != input[2]) || (input[1] == input[2] && input[1] != input[0]) || (c == input[0] && c != b))
                    Console.WriteLine("TRIANGULO ISOSCELES\n");
            }


        }
    }
}
