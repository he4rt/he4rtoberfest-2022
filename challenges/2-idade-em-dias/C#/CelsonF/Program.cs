using System;

namespace CelsonF // Note: actual namespace depends on the project name.
{
	internal class Program
	{
		static void Main(string[] args)
		{
			int DIAS_ANO = 365;
			int DIAS_MES = 30;

			int idade;
			int dia;
			int mes;
			int ano;

			Console.WriteLine("Digite sua idade em dias:");
			idade = int.Parse(Console.ReadLine());

			ano = idade / DIAS_ANO;
			mes = (idade % DIAS_ANO) / DIAS_MES;
			dia = (idade % DIAS_ANO) % DIAS_MES;

			Console.WriteLine("{0} ano(s)\n{1} mes(es)\n{2} dia(s)", ano, mes, dia);

		}
	}
}
