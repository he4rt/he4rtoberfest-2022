class Program
{
    static public void Main(String[] args)
    {
        double ladoA, ladoB, ladoC;
        List<double> lados = new();

        if (double.TryParse(args[0], out ladoA) && double.TryParse(args[1], out ladoB) && double.TryParse(args[2], out ladoC))
        {
            lados = new() { ladoA, ladoB, ladoC };
            lados = lados.OrderByDescending(l => l).ToList();

            if (lados[0] >= lados[1] + lados[2])
            {
                Console.WriteLine("NAO FORMA TRIANGULO");
                return;
            }

            if (Math.Pow(lados[0], 2) == Math.Pow(lados[1], 2) + Math.Pow(lados[2], 2)) Console.WriteLine("TRIANGULO RETANGULO");

            if (Math.Pow(lados[0], 2) > Math.Pow(lados[1], 2) + Math.Pow(lados[2], 2)) Console.WriteLine("TRIANGULO OBTUSANGULO");

            if (Math.Pow(lados[0], 2) < Math.Pow(lados[1], 2) + Math.Pow(lados[2], 2)) Console.WriteLine("TRIANGULO ACUTANGULO");

            if (lados[0] == lados[1] && lados[1] == lados[2]) Console.WriteLine("TRIANGULO EQUILATERO");
            else if (lados[0] == lados[1] || lados[1] == lados[2] || lados[0] == lados[2]) Console.WriteLine("TRIANGULO ISOSCELES");
        }
    }
}