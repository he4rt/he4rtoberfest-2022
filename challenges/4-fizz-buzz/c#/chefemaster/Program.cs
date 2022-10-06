using System;
using System.Text;
  
class Program {
  
    // Main Method
    static public void Main(String[] args)
    {
        try
        {
            if (args.Length != 1) throw new ArgumentException("Informe 1 parâmetro."); 
            if (!int.TryParse(args[0], out int input))  throw new ArgumentException("Parâmetro inválido."); 

            Console.WriteLine("saída:");
            for (int i = 1; i <= input; i++)
            {
                Console.WriteLine(FizzBuzz(i));
            }            
        }
        catch(ArgumentException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch(Exception ex)
        {
            Console.WriteLine(ex.Message);
        }        
    }

    public static String FizzBuzz(int value){
        StringBuilder sb = new StringBuilder();
        if(value % 3 == 0)sb.Append("Fizz");
        if(value % 5 == 0)sb.Append("Buzz");
        if(sb.Length == 0)sb.Append(value);
        return sb.ToString();
    }
}