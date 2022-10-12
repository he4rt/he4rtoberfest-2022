defmodule Idade do
  def idadedias(valor) do
    anos = div(valor, 365)
    meses = div(rem(valor, 365), 30)
    dias = rem(rem(valor, 365), 30)

    IO.puts("#{anos} ano(s)\n#{meses} mes(es)\n#{dias} dia(s)")
  end

end
