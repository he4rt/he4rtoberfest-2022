module Tests

open Expecto
open HelloWorld

[<Tests>]
let tests =
  testList "samples" [
    testCase "Given the application, When 'main' function runs correctly, Then it should returns '0'" <| fun _ ->
      let expected = 0
      
      let actual = main Array.empty<string>
      
      Expect.equal actual expected $"It should have returned {expected}, but returned {actual}."
  ]
