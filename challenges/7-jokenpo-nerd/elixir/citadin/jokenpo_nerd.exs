defmodule Challenge do
  @game_terms %{
    "pedra" => "lagarto tesoura",
    "papel" => "pedra spock",
    "tesoura" => "papel lagarto",
    "lagarto" => "spock papel",
    "spock" => "tesoura pedra"
  }

  def jokenpo(list) do
    list
    |> Enum.each(fn index ->
      [term1, term2] = String.split(index)

      cond do
        term1 == term2 -> IO.puts("empate")
        verify_winner(term1, term2) == false -> IO.puts("sheldon")
        verify_winner(term1, term2) -> IO.puts("rajesh")
      end
    end)
  end

  defp verify_winner(term1, term2) do
    String.contains?(@game_terms[term1], term2)
  end
end
