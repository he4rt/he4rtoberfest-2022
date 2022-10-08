defmodule Challenge do
  @default_map %{"A" => 0, "C" => 0, "G" => 0, "T" => 0}

  def nucleotideos(string) when is_bitstring(string) do
    with true <- Regex.match?(~r/^(a|c|g|t)+$/xi, string) do
      map =
        string
        |> String.upcase()
        |> String.split("")
        |> Enum.reject(fn elem -> elem == "" end)
        |> Enum.reduce(@default_map, fn elem, acc ->
          Map.update(acc, elem, 0, fn existing_value -> existing_value + 1 end)
        end)

      IO.puts("#{map["A"]} #{map["C"]} #{map["G"]} #{map["T"]}")
    else
      false -> "Sequência de DNA inválida"
    end
  end

  def nucleotideos(_string), do: "Sequência de DNA inválida"
end
