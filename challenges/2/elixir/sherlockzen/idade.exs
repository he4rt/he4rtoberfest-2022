defmodule Idade do
  # def iniciar() do
  #   IO.gets("Digite o valor inteiro correspondente aos dias da idade desejada: ")
  #   |>Integer.parse()|>Idade.verificavalor()|>Idade.idadedias()
  # end

  # def verificavalor(:error) do
  #     IO.puts("Valor inválido!")
  #     Idade.iniciar()
  # end
  # def verificavalor({num, _}) do
  #     num
  # end

  def idadedias(valor) do
    anos = div(valor, 365)
    meses = div(rem(valor, 365), 30)
    dias = rem(rem(valor, 365), 30)

    IO.puts("#{anos} ano(s)\n#{meses} mes(es)\n#{dias} dia(s)")
  end

end
