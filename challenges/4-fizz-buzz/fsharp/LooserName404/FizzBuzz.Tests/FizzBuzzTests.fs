module Tests

open Expecto
open FizzBuzz

[<Tests>]
let tests =
  testList "samples" [
    test "Given a number divisible by 3, When it tries to match 'Fizz', Then it should match" {
      let number = 3
      match number with
      | Fizz -> ()
      | _ -> Tests.failtest "A number divisible by 3 should match 'Fizz'"
    }
    test "Given a number divisible by 5, When it tries to match 'Buzz', Then it should match" {
      let number = 5
      match number with
      | Buzz -> ()
      | _ -> Tests.failtest "A number divisible by 5 should match 'Buzz'"
    }
    test "Given a number divisible by both 3 and 5, When it tries to match 'Fizz' and 'Buzz', then it should match" {
      let number = 15
      match number with
      | Fizz & Buzz -> ()
      | _ -> Tests.failtest "A number divisible by both 3 and 5 should match 'Fizz' and 'Buzz'"
    }
    test "Given a number not divisible by 3 or 5, When it tries to match 'Fizz' or 'Buzz', Then it shouldn't match" {
      let number = 16
      match number with
      | Fizz -> Tests.failtest "A number not divisible by 3 shouldn't match 'Fizz'"
      | Buzz -> Tests.failtest "A number not divisible by 5 shouldn't match 'Buzz'"
      | _ -> ()
    }
  ]
