using System;
  
class Program {
  
    const int DAYS_OF_YEAR = 365;
    const int DAYS_OF_MONTH = 30;
    // Main Method
    static public void Main(String[] args)
    {
        if (args.Length <= 0) return;        
        if (!int.TryParse(args[0], out int input)) return;
        
        int years = (int) input / DAYS_OF_YEAR;
        int months = (int) (input % DAYS_OF_YEAR) / DAYS_OF_MONTH;
        int days = (int) (input % DAYS_OF_YEAR) % DAYS_OF_MONTH;

        Console.WriteLine($"{years} ano(s)");
        Console.WriteLine($"{months} mes(s)");
        Console.WriteLine($"{days} dia(s)");
    }
}