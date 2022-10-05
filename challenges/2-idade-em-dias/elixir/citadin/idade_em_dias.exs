defmodule Challenge do
  def idade_em_dias(dias) do
    anos = div(dias, 365)
    meses = rem(dias, 365) |> div(30)
    dias = rem(dias, 365) |> rem(30)

    "#{anos} ano(s), #{meses} mes(es), #{dias} dia(s)"
  end
end
