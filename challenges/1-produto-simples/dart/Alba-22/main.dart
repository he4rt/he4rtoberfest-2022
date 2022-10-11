import 'dart:io';

void main(List<String> arguments) {
  if (arguments.length != 2) {
    exit(0);
  }
  final int? first = int.tryParse(arguments.first);
  final int? second = int.tryParse(arguments[1]);
  if (first == null || second == null) {
    exit(0);
  }
  final prod = first * second;
  print("produto: $prod");
}
