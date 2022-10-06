using System;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Digite um numero: ");
        if (!int.TryParse(Console.ReadLine(), out int x)) throw new ArgumentException("parâmetro inválido.");
        Console.WriteLine(Dias.Calc(x));
    }
    public static class Dias
    {
        public static string Calc(int qtd)
        {
            const int qtdDiasAno = 365;
            const int qtdDiasMes = 30;
            int dias, meses, anos;

            anos = qtd / qtdDiasAno;
            meses = qtd % qtdDiasAno / qtdDiasMes;
            dias = qtd % qtdDiasAno % qtdDiasMes;

            return $"{anos} ano(s)\n"
                    + $"{meses} mese(s)\n"
                    + $"{dias} dia(s)\n";
        }
    }
}