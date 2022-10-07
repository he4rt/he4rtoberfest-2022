try
{
    Console.WriteLine("PRIMEIRO lado do triângulo:");
    float primeiroLado = float.Parse(Console.ReadLine());

    Console.WriteLine("SEGUNDO lado do triângulo:");
    float segundoLado = float.Parse(Console.ReadLine());

    Console.WriteLine("TERCEIRO lado do triângulo:");
    float terceiroLado = float.Parse(Console.ReadLine());

    var lados = new List<float>();
    lados.Add(primeiroLado);
    lados.Add(segundoLado);
    lados.Add(terceiroLado);
    lados.Sort();
    lados.Reverse();

    float ladoA = lados[0];
    float ladoB = lados[1];
    float ladoC = lados[2];

    if (ladoA >= ladoB + ladoC)
    {
        Console.WriteLine("NAO FORMA TRIANGULO");
    }

    else
    {
        if (ladoA*ladoA == ladoB*ladoB + ladoC*ladoC)
            Console.WriteLine("TRIANGULO RETANGULO");

        if (ladoA*ladoA > ladoB*ladoB + ladoC*ladoC)
            Console.WriteLine("TRIANGULO OBTUSANGULO");

        if (ladoA*ladoA < ladoB*ladoB + ladoC*ladoC)
            Console.WriteLine("TRIANGULO ACUTANGULO");
        
        if (ladoA == ladoB && ladoB == ladoC)
            Console.WriteLine("TRIANGULO EQUILATERO");
        
        if ((ladoA == ladoB && ladoA != ladoC) || 
        (ladoB == ladoC && ladoB != ladoA) || 
        (ladoC == ladoA && ladoC != ladoB))
            Console.WriteLine("TRIANGULO ISOSCELES");
    }
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}