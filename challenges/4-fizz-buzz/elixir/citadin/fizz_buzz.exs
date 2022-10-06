defmodule Challenge do
  def fizz_buzz(num), do: Enum.each(1..num, &verify_multiple/1)

  defp verify_multiple(num) when rem(num, 5) == 0 and rem(num, 3) == 0, do: IO.puts("FizzBuzz")
  defp verify_multiple(num) when rem(num, 5) == 0, do: IO.puts("Fizz")
  defp verify_multiple(num) when rem(num, 3) == 0, do: IO.puts("Buzz")
  defp verify_multiple(num), do: IO.puts(num)
end
