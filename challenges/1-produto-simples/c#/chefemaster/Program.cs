using System;
using System.Text;

class Program {

    // Main Method
    static public void Main(String[] args)
    {
        try
        {
            if (args.Length != 2) throw new ArgumentException("Informe 2 parâmetros."); 
            if (!int.TryParse(args[0], out int value01))  throw new ArgumentException("Primeiro parâmetro inválido."); 
            if (!int.TryParse(args[1], out int value02))  throw new ArgumentException("Segundo parâmetro inválido.");
            int prod = value01 * value02;
            Console.WriteLine($"produto: {prod}");
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
}