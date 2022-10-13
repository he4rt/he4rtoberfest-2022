defmodule ConvertSeconds do
  def initial(seconds) do
    seconds
    |> countHours()
  end
  defp countHours(seconds) do
    horas = div(seconds,3600)
    countMinutes(horas, seconds)
  end
  defp countMinutes(horas, seconds) do
    minutes = rem(seconds,3600)
    minutes = div(minutes,60)

    countDays(horas, minutes, seconds)
  end
  defp countDays(horas, minutes, seconds) do
    seconds = rem(seconds, 3600)
    seconds = rem(seconds, 60)
    printarTudo(horas,minutes,seconds)
  end
  defp printarTudo(horas,minutes,seconds) do
     IO.puts("#{horas}:#{minutes}:#{seconds}")

  end
end
