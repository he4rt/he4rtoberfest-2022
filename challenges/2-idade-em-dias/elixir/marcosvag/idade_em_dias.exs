defmodule Converter do
    def idade_em_dias(dias_input) do
        anos = div(dias_input, 365)
        meses = rem(dias_input, 365) |> div(30)
        dias = rem(dias_input, 365) |> rem(30)
        IO.puts "#{anos} ano(s)\n#{meses} mes(es)\n#{dias} dia(s)"
    end
end 
