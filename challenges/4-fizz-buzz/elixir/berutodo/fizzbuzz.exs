defmodule FizzBuzz do
  def receiveNumber(x) do
     1..x
     |> Enum.to_list()
     |> to_string_()
     |> Enum.map(&convert_and_evaluate_number/1)
  end
  defp to_string_(l) do
        l
        |> Enum.join(",")
        |> String.split(",")
    end

    defp convert_and_evaluate_number(elem) do
      elem |> String.to_integer() |> evaluate_numbers()
    end

    defp evaluate_numbers(number) when rem(number, 3) == 0 and rem(number, 5) == 0, do: :fizzbuzz
    defp evaluate_numbers(number) when rem(number, 5) == 0, do: :buzz
    defp evaluate_numbers(number) when rem(number, 3) == 0, do: :fizz
    defp evaluate_numbers(number), do: number
  end
