module Tests

open Expecto
open ProdutoSimples

[<Tests>]
let tests =
  testList "samples" [
    testCase "Given two valid numeric inputs, When the 'product' function is called, Then it should returns the product of these numbers" <| fun _ ->
      let num1 = 3
      let num2 = 5
      let expected = 15

      let actual = product num1 num2

      Expect.equal actual expected $"The product of {num1} and {num2} should be {expected}, but it returned {actual}"

    testCase "Given a valid amount of CLI args, When the arguments validation Active Pattern is called, Then it should returns Some string" <| fun _ ->
      let args = [| "foo"; "bar"; "baz" |]

      match args with
      | ValidArgumentAmount _ -> ()
      | _ -> failtest "The validation Active Pattern should returns Some string"

    testCase "Given an invalid amount of CLI args, When the arguments validation Active Pattern is called, Then it should returns None" <| fun _ ->
      let args = [| "bar"; "baz" |]

      match args with
      | ValidArgumentAmount _ -> failtest "The validation Active Pattern should returns None"
      | _ -> ()

    testCase "Given a valid input string, When the input validation Active Pattern is called, Then it should returns Some int" <| fun _ ->
      let input = "904"

      match input with
      | ValidInput _ -> ()
      | _ -> failtest "The validation Active Pattern should returns Some int"

    testCase "Given an invalid input string, When the input validation Active Pattern is called, Then it should returns None" <| fun _ ->
      let input = "test"

      match input with
      | ValidInput _ -> failtest "The validation Active Pattern should returns None"
      | _ -> ()
  ]
