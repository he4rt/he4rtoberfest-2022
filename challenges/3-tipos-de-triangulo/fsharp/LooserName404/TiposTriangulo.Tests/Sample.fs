module Tests

open Expecto
open TiposTriangulo

[<Tests>]
let tests =
  testList "samples" [
    test "Given a triangle with A greather than B + C, When 'getTriangleTypes' is called, Then it should returns None" {
      let input = [ 5.0; 7.0; 2.0 ]
      let triangle = createTriangle input
      
      let actual = getTriangleTypes triangle
      
      Expect.isNone actual "Invalid triangle should returns None"
    }
    test "Given a triangle with A² equals B² + C², When 'getTriangleTypes' is called, Then it should returns Right Triangle" {
      let input = [ 3.0; 5.0; 4.0 ]
      let triangle = createTriangle input
      
      let actual = getTriangleTypes triangle
      
      Expect.isSome actual "Valid triangle should returns Some list of types"
      let list = Expect.wantSome actual "Valid triangle should returns Some list of types"
      Expect.contains list Right "A triangle with A² = B² + C² should be a Right Triangle"
    }
    test "Given a triangle with A² greater than B² + C², When 'getTriangleTypes' is called, Then it should returns Obtuse Triangle" {
      let input = [ 6.0; 6.0; 10.0 ]
      let triangle = createTriangle input
      
      let actual = getTriangleTypes triangle
      
      Expect.isSome actual "Valid triangle should returns Some list of types"
      let list = Expect.wantSome actual "Valid triangle should returns Some list of types"
      Expect.contains list Obtuse "A triangle with A² > B² + C² should be an Obtuse Triangle"
    }
    test "Given a triangle with A² lower than B² + C², When 'getTriangleTypes' is called, Then it should returns Acute Triangle" {
      let input = [ 7.0; 5.0; 7.0 ]
      let triangle = createTriangle input
      
      let actual = getTriangleTypes triangle
      
      Expect.isSome actual "Valid triangle should returns Some list of types"
      let list = Expect.wantSome actual "Valid triangle should returns Some list of types"
      Expect.contains list Acute "A triangle with A² < B² + C² should be an Acute Triangle"
    }
    test "Given a triangle with 3 equal sides, When 'getTriangleTypes' is called, Then it should returns Equilateral Triangle" {
      let input = [ 6.0; 6.0; 6.0 ]
      let triangle = createTriangle input
      
      let actual = getTriangleTypes triangle
      
      Expect.isSome actual "Valid triangle should returns Some list of types"
      let list = Expect.wantSome actual "Valid triangle should returns Some list of types"
      Expect.contains list Equilateral "A triangle with 3 equal sides should be an Equilateral Triangle"
    }
    test "Given a triangle with 2 equal sides, When 'getTriangleTypes' is called, Then it should returns Isosceles Triangle" {
      let input = [ 4.0; 3.0; 4.0 ]
      let triangle = createTriangle input
      
      let actual = getTriangleTypes triangle
      
      Expect.isSome actual "Valid triangle should returns Some list of types"
      let list = Expect.wantSome actual "Valid triangle should returns Some list of types"
      Expect.contains list Isosceles "A triangle with two equal sides should be an Isosceles Triangle"
    }
  ]
