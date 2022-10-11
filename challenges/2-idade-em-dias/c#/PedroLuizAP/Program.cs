class Program
{
    const int DiasDoAno = 365;
    const int DiasDoMes = 30;
    static void Main(string[] args)
    {
        int quantidadeDias;

        if (!int.TryParse(args[0], out quantidadeDias)) return;

        int anos = quantidadeDias / DiasDoAno;
        int meses = (quantidadeDias % DiasDoAno) / DiasDoMes;
        int dias = (quantidadeDias % DiasDoAno) % DiasDoMes;

        Console.WriteLine($"{anos} anos, {meses} meses, {dias} dias");
    }
}