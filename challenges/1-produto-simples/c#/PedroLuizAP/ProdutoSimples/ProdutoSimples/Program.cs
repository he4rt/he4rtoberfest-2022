public class Program
{
    public static void Main(string[] args)
    {
        int firstValue = 0;
        int secondValue = 0;

        if (int.TryParse(args[0], out firstValue) && int.TryParse(args[1], out secondValue))
            Console.WriteLine($"Produto: {firstValue * secondValue}");
    }
}