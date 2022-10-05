main(List args) {
  var x = int.parse(args[0]);

  for (int i = 1; i <= x; ++i) {
    var res = '';
    if (i % 3 == 0) res += 'Fizz';
    if (i % 5 == 0) res += 'Buzz';
    print(res.isEmpty ? i : res);
  }
}
