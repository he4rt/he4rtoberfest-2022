for my $a (1..50){
    print $a % 3 ? '':'fizz';
    print $a % 5 ? '':'buzz';
    print $a % 3 && $a % 5 ? $a :'';
    print "\n";
}