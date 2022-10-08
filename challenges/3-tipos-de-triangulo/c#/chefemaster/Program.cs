using System;
using System.Text;
  
class Program {
  
    // Main Method
    static public void Main(String[] args)
    {
        try
        {
            if (args.Length != 3) throw new ArgumentException("Informe 3 parâmetros."); 
            if (!Double.TryParse(args[0], out double value01))  throw new ArgumentException("Primeiro parâmetro inválido."); 
            if (!Double.TryParse(args[1], out double value02))  throw new ArgumentException("Segundo parâmetro inválido."); 
            if (!Double.TryParse(args[2], out double value03))  throw new ArgumentException("Terceiro parâmetro inválido.");
            
            IEnumerable<Double> parameters = (new List<Double>() {value01, value02, value03}).OrderByDescending(c => c);
            Console.WriteLine(DefineTypeTriangle(parameters.ElementAt(0), parameters.ElementAt(1), parameters.ElementAt(2)));
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

    public static String DefineTypeTriangle(Double sideA, Double sideB, Double sideC)
    {
        StringBuilder sb = new StringBuilder();
        if(sideA >= sideB+sideC) {
            sb.AppendLine("NAO FORMA TRIANGULO");
            return sb.ToString();
        }
        if(Math.Pow(sideA, 2) == Math.Pow(sideB, 2) + Math.Pow(sideC, 2)) sb.AppendLine("TRIANGULO RETANGULO");
        if(Math.Pow(sideA, 2) > Math.Pow(sideB, 2) + Math.Pow(sideC, 2)) sb.AppendLine("TRIANGULO OBTUSANGULO");
        if(Math.Pow(sideA, 2) < Math.Pow(sideB, 2) + Math.Pow(sideC, 2)) sb.AppendLine("TRIANGULO ACUTANGULO");
        
        if(sideA == sideB && sideA == sideC) sb.AppendLine("TRIANGULO EQUILATERO");
        if((sideA == sideB && sideA != sideC) || 
            (sideA != sideB && sideA == sideC) || 
            (sideA != sideB && sideB == sideC)) sb.AppendLine("TRIANGULO ISOSCELES");

        return sb.ToString();
    }
}