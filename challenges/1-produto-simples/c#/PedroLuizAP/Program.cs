using System;
using System.Text;

class Program
{
    static public void Main(String[] args)
    {
        int arg1 = 0, arg2 = 0;
        if (int.TryParse(args[0], out arg1) && int.TryParse(args[1], out arg2))
            Console.WriteLine($"Produto: {arg1 * arg2}");
    }
}