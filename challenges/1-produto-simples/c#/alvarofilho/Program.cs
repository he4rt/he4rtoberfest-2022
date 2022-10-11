var arg1 = Environment.GetCommandLineArgs()[1];
var arg2 = Environment.GetCommandLineArgs()[2];

if (int.TryParse(arg1, out var number1) && int.TryParse(arg2, out var number2))
{
    Console.WriteLine($"produto: {number1 * number2}");
}

