using System.Text;

var args1 = Environment.GetCommandLineArgs()[1];

if (!double.TryParse(args1, out var a)) return;

Console.WriteLine("saída:");

var sb = new StringBuilder();

for (var i = 1; i <= a; i++)
{
    if (i % 3 == 0) sb.Append("Fizz");
    if (i % 5 == 0) sb.Append("Buzz");
    if (sb.Length == 0) sb.Append(i);

    Console.WriteLine(sb.ToString());

    sb.Clear();
}