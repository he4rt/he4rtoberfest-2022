// See https://aka.ms/new-console-template for more information

Console.WriteLine("Insira uma sequência de DNA:");
var sequence = Console.ReadLine() ?? throw new ArgumentException("Sequência nula");

const string nucleotides = "ACGT";

var output = !sequence.All(nucleotides.Contains) || !sequence.Any() 
    ? throw new ArgumentException("Sequência de DNA inválida")
    : nucleotides.ToDictionary(s => s, s => sequence.Count(x => x == s));
    
Console.WriteLine(string.Join(", ", output.Select(s => $"'{s.Key}': {s.Value}")));
