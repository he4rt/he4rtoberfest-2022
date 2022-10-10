defmodule Challenges do
  @default_map %{C: 0, R: 0, S: 0}

  def cobaias(list) do
    list
    |> Enum.reduce(@default_map, &merge_values/2)
    |> generate_report()
    |> generate_io()
  end

  defp merge_values({key, value}, acc) do
    case {key, value} do
      {:R, value} -> update_map(acc, key, value)
      {:C, value} -> update_map(acc, key, value)
      {:S, value} -> update_map(acc, key, value)
    end
  end

  defp update_map(acc, key, value) do
    Map.update(acc, key, 0, fn existing_value -> existing_value + value end)
  end

  defp generate_report(%{C: c_value, R: r_value, S: s_value}) do
    %{
      total: c_value + r_value + s_value,
      total_de_coelhos: c_value,
      total_de_ratos: r_value,
      total_de_sapos: s_value,
      percentual_de_coelhos: calculate_percentual(c_value, c_value + r_value + s_value),
      percentual_de_ratos: calculate_percentual(r_value, c_value + r_value + s_value),
      percentual_de_sapos: calculate_percentual(s_value, c_value + r_value + s_value)
    }
  end

  defp calculate_percentual(value, total) do
    Float.round(value * 100 / total, 2)
  end

  defp generate_io(map) do
    IO.puts("total: #{map[:total]} cobaias")
    IO.puts("total de coelhos: #{map[:total_de_coelhos]}")
    IO.puts("total de ratos: #{map[:total_de_ratos]}")
    IO.puts("total de sapos: #{map[:total_de_sapos]}")
    IO.puts("percentual de coelhos: #{map[:percentual_de_coelhos]} %")
    IO.puts("percentual de ratos: #{map[:percentual_de_ratos]} %")
    IO.puts("percentual de sapos: #{map[:percentual_de_sapos]} %")
  end
end
