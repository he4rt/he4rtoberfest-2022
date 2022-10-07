using System.Globalization;
using System.Text.RegularExpressions;

try
{
    if (args.Length <= 1)
    {
        throw new ArgumentNullException();
    }

    if (args.Length != 4)
    {
        throw new ArgumentException();
    }

    var cultureInfo = CultureInfo.InvariantCulture;
    
    if (Regex.IsMatch(args[1], @"^(:?[\d,]+\.)*\d+$"))
    {
        cultureInfo = new CultureInfo("en-US");
    }
    else if (Regex.IsMatch(args[1], @"^(:?[\d.]+,)*\d+$"))
    {
        cultureInfo = new CultureInfo("pt-BR");
    }

    bool parseArgs1 = float.TryParse(args[1], out float num1);
    bool parseArgs2 = float.TryParse(args[2], out float num2);
    bool parseArgs3 = float.TryParse(args[3], out float num3);

    if (!parseArgs1 || !parseArgs2 || !parseArgs3)
    {
        throw new InvalidCastException();
    }

    if (num1 < 0 || num2 < 0 || num3 < 0)
    {
        throw new ArgumentOutOfRangeException();
    }

    float[] ladosTriangulo = new float[]
    {
        num1,
        num2,
        num3
    }.OrderByDescending(num => num).ToArray();

    VerificaTipoTriangulo(ladosTriangulo);

}
catch (ArgumentNullException)
{
    Console.WriteLine("Nenhum argumento encontrado!");
}
catch (ArgumentOutOfRangeException)
{
    Console.WriteLine("Um ou mais argumentos sao menores que zero!");
}
catch (ArgumentException)
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

void VerificaTipoTriangulo(float[] lados)
{
    if (lados[0] >= (lados[1] + lados[2]))
    {
        Console.WriteLine("NAO FORMA TRIANGULO");
        return;
    }

    if (GetNumeroElevadoAoQuadrado(lados[0]) == (GetNumeroElevadoAoQuadrado(lados[1]) + GetNumeroElevadoAoQuadrado(lados[2])))
    {
        Console.WriteLine("TRIANGULO RETANGULO");
    }

    if (GetNumeroElevadoAoQuadrado(lados[0]) > (GetNumeroElevadoAoQuadrado(lados[1]) + GetNumeroElevadoAoQuadrado(lados[2])))
    {
        Console.WriteLine("TRIANGULO OBTUSANGULO");
    }

    if (GetNumeroElevadoAoQuadrado(lados[0]) < (GetNumeroElevadoAoQuadrado(lados[1]) + GetNumeroElevadoAoQuadrado(lados[2])))
    {
        Console.WriteLine("TRIANGULO ACUTANGULO");
    }

    if (lados[0] == lados[1]
        && lados[0] == lados[2]
        && lados[1] == lados[2])
    {
        Console.WriteLine("TRIANGULO EQUILATERO");
    }
    else if (lados[0] == lados[1]
            || lados[0] == lados[2]
            || lados[1] == lados[2])
    {
        Console.WriteLine("TRIANGULO ISOSCELES");
    }
}

float GetNumeroElevadoAoQuadrado(float numero)
{
    const double expoente = 2;

    return ((float)Math.Pow(numero, expoente));
}