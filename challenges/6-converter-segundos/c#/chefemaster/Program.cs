using System;
  
class Program {
  
    // Main Method
    static public void Main(String[] args)
    {
        if (args.Length <= 0) return;        
        if (!int.TryParse(args[0], out int time)) return;

        DateTime date = DateTime.MinValue;
        DateTime dateTime = date.AddSeconds(time);
        Console.WriteLine(dateTime.ToString("HH:mm:ss"));
    }
}