var args1 = Environment.GetCommandLineArgs()[1];

if (!int.TryParse(args1, out var ageInDays)) return;

const int daysOfYear = 365;
const int daysOfMonth = 30;

var years = ageInDays / daysOfYear;
var months = (ageInDays % daysOfYear) / daysOfMonth;
var days = (ageInDays % daysOfYear) % daysOfMonth;

Console.WriteLine($"{years} ano(s)\n{months} mes(es)\n{days} dia(s)");