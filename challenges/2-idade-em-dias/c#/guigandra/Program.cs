using System;

class Program
{
    static void Main(string[] args)
    {
        var diasDoAno = 365;
        var diasDoMes = 30;

        int idade;
        int dia;
        int mes;
        int ano;

        Console.WriteLine("Digite sua idade em dias: ");
        idade = int.Parse(Console.ReadLine());

        ano = idade / diasDoAno;
        mes = (idade % diasDoAno) / diasDoMes;
        dia = (idade % diasDoAno) % diasDoMes;

        Console.WriteLine("{0} ano(s)\n{1} mes(es)\n{2} dia(s)", ano, mes, dia);
    }
}