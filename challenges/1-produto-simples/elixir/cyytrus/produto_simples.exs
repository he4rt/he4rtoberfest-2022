defmodule Produto do
  def simples do
    IO.gets("Digite 2 números:\n => ")
    |> String.trim("\n")
    |> String.split(" ")
    |> Enum.map(&String.to_integer(&1))
    |> then(fn [a, b] -> a * b end)
  end
end
