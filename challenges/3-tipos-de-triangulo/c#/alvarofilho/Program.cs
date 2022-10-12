using System.Text;

var args1 = Environment.GetCommandLineArgs()[1];
var args2 = Environment.GetCommandLineArgs()[2];
var args3 = Environment.GetCommandLineArgs()[3];

if (!double.TryParse(args1, out var a)) return;
if (!double.TryParse(args2, out var b)) return;
if (!double.TryParse(args3, out var c)) return;

var sides = new List<double>() { a, b, c }.OrderByDescending(d => d).ToList();

var sideA = sides.First();
var sideB = sides[1];
var sideC = sides.Last();

if (sideA >= (sideB + sideC))
{
    Console.WriteLine("NAO FORMA TRIANGULO");
    return;
}

var sb = new StringBuilder();

var powerA = Math.Pow(sideA, 2);
var sumPowerBWithPowerC = Math.Pow(sideB, 2) + Math.Pow(sideC, 2);

if (powerA == sumPowerBWithPowerC) sb.AppendLine("TRIANGULO RETANGULO");
if (powerA > sumPowerBWithPowerC) sb.AppendLine("TRIANGULO OBTUSANGULO");
if (powerA < sumPowerBWithPowerC) sb.AppendLine("TRIANGULO ACUTANGULO");

if (sideA == sideB && sideA == sideC) sb.AppendLine("TRIANGULO EQUILATERO");
if ((sideA == sideB && sideA != sideC) || (sideA != sideB && sideA == sideC) || (sideA != sideB && sideB == sideC)) sb.AppendLine("TRIANGULO ISOSCELES");


Console.WriteLine(sb.ToString());