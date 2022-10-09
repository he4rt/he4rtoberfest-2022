try
{
    var secArg = Environment.GetCommandLineArgs()[1];    

    int sec = int.Parse(args[0]);
    var time = DateTime.MinValue.AddSeconds(sec);

    Console.WriteLine(time.ToString("HH:mm:ss"));
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}