import 'dart:io';

void main(List<String> arguments) {
  if (arguments.length < 1) {
    exit(0);
  }
  int? days = int.tryParse(arguments.first);
  if (days == null) {
    exit(0);
  }

  final years = days ~/ 365;
  days = days % 365;
  final months = days ~/ 30;
  days = days % 30;

  print("$years ano(s)");
  print("$months mes(es)");
  print("$days dia(s)");
}
