defmodule FizzBuzz do
  def exec(number) when number < 1, do: 0

  def exec(number) do
    1..number
    |> Enum.map(&fizz_buzz/1)
    |> Enum.map(&IO.puts/1)
  end

  def fizz_buzz(el) when Kernel.rem(el, 5) === 0 and Kernel.rem(el, 5) === 0, do: "FizzBuzz"
  def fizz_buzz(el) when Kernel.rem(el, 5) === 0, do: "Buzz"
  def fizz_buzz(el) when Kernel.rem(el, 3) === 0, do: "Fizz"
  def fizz_buzz(el), do: el
end

System.argv()
|> List.first()
|> String.to_integer()
|> FizzBuzz.exec()
