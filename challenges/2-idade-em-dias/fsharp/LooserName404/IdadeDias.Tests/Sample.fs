module Tests

open Expecto
open IdadeDias

[<Tests>]
let tests =
  testList "IdadeDias module tests" [
    yield!
       [for param in [ (400, (1, 1, 5))
                       (800, (2, 2, 10))
                       (30, (0, 1, 0)) ] do
         let input, expected = param
         testCase $"Given the input of {input}, When 'convertDaysToDate' is called, Then it should returns {expected}" <| fun _ ->
           let actual = convertDaysToDate input
           Expect.equal actual expected "Date tuples should be equal"]
    yield!
      [for param in [ (3, 2, (1, 1))
                      (20, 4, (5, 0))
                      (800, 365, (2, 70)) ] do
         let x, y, expected = param
         testCase $"Given the input of x = {x} and y = {y}, When 'divisionWithRemainder' is called, Then it should returns {expected}" <| fun _ ->
           let actual = divisionWithRemainder x y
           Expect.equal actual expected "Division tuples should be equal"]
    yield!
      [for param in [ "4", Some 4
                      "13", Some 13
                      "800900700", Some 800_900_700 ] do
        let input, expected = param
        testCase $"Given the numeric input of '{input}', When 'validateInput' is called, Then it should returns {expected}" <| fun _ ->
          let actual = validateInput input
          Expect.isSome actual "Result should be Some"
          Expect.equal actual expected "Results should be equal"]
    yield!
      [for param in [ "4lj", None
                      "1io3", None
                      "800Ab900cD700", None ] do
        let input, expected = param
        testCase $"Given the invalid input of '{input}', When 'validateInput' is called, Then it should returns {expected}" <| fun _ ->
          let actual = validateInput input
          Expect.isNone actual "Result should be None"
          Expect.equal actual expected "Results should be equal"]
  ]
