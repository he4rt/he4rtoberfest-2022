defmodule CalculateLife do
  def initial(x) do
    x
    |> countYears()
    x
    |> countMonths()
    x
    |> countDays()
  end

  defp countYears(days) do
    days
    |> div(365)
    |> println('Anos')
  end
  defp countMonths(days) do
    days
    |> rem(365)
    |> div(30)
    |> println('Meses')
  end
  defp countDays(days) do
    days
    |> rem(365)
    |> rem(30)
    |> println('Dias')
  end

  defp println(x,y) do
     IO.puts("#{y} #{x}")
  end
end
