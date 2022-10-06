defmodule Cobaias do
  def calculate_amount(data) do
    data
    |> Enum.map(&take_quantity/1)
    |> Enum.reduce(fn qnt, sum -> qnt + sum end)
  end

  defp format_data(data) do
    data
    |> String.split("\n")
    |> Enum.drop(1)
  end

  def take_quantity(string) do
    [quantity, _] = String.split(string)

    String.to_integer(quantity)
  end

  def animal_amount(data, letter) do
    data
    |> Enum.filter(fn str -> subject(str) === letter end)
    |> calculate_amount()
  end

  def subject(string) do
    string |> String.at(-1)
  end

  def calculate_percentage(total_amount, animal_amount) do
    (animal_amount / total_amount * 100) |> :erlang.float_to_binary(decimals: 2)
  end

  def present_data(data) do
    dropped_experiment_total = format_data(data)

    amount = calculate_amount(dropped_experiment_total)
    rabbit_amount = animal_amount(dropped_experiment_total, "C")
    frogg_amount = animal_amount(dropped_experiment_total, "S")
    rat_amount = animal_amount(dropped_experiment_total, "R")

    rabbit_percentage = calculate_percentage(amount, rabbit_amount)
    rat_percentage = calculate_percentage(amount, rat_amount)
    frogg_percentage = calculate_percentage(amount, frogg_amount)

    IO.puts(~s(
    Total: #{amount} cobaias
    Total de coelhos: #{rabbit_amount}
    Total de ratos: #{rat_amount}
    Total de sapos: #{frogg_amount}
    Percentual de coelhos: #{rabbit_percentage} %
    Percentual de ratos: #{rat_percentage} %
    Percentual de sapos: #{frogg_percentage} %
    ))
  end
end

System.argv()
|> File.read!()
|> Cobaias.present_data()
