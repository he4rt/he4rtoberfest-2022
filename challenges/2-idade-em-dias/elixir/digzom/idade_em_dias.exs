defmodule IdadeEmDias do
  def daysIntoYears(days) do
    years = days |> Kernel.div(365)

    days_left = days |> Kernel.rem(365)

    {years, days_left}
  end

  def daysIntoMonth(days) do
    months = days |> Kernel.div(30)
    days_left = days |> Kernel.rem(30)

    {months, days_left}
  end

  def calculate(days) do
    with {years, months_left} = daysIntoYears(days),
         {months, days} = daysIntoMonth(months_left) do
      IO.puts("""
      #{years} ano(s)
      #{months} mes(es)
      #{days} dia(s)
      """)
    end
  end
end

System.argv()
|> List.first()
|> String.to_integer()
|> IdadeEmDias.calculate()
