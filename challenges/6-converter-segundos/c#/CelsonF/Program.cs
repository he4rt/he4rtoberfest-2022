using System;

namespace desafio6
{
	internal class Program
	{
		static void Main(string[] args)
		{
			double numeroSegundos;

			try
			{
				Console.WriteLine("Converter Segundos\nDigite em segundos para converter em HH:MM:SS");
				numeroSegundos = Convert.ToDouble(Console.ReadLine());

				double totalHora = numeroSegundos / 3600;
				numeroSegundos %= 3600;
				double totalMinutos = Math.Floor(numeroSegundos / 60);

				Console.WriteLine("{0:00}:{1:00}:{2:00}", Math.Floor(totalHora), totalMinutos, numeroSegundos % 60);
			}
			catch (Exception ex)
			{
				Console.WriteLine($"Erro {ex}");
			}

			Console.ReadKey();
		}
	}
}
