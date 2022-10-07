defmodule Challenge do
  def convert(segundos) do
    segundos
    |> horas()
    |> minutos()
    |> to_time()
  end

  defp horas(segundos) do
    horas = div(segundos, 3600)
    segundos_restantes = segundos - horas * 3600

    {horas, segundos_restantes}
  end

  defp minutos({horas, segundos}) do
    minutos = div(segundos, 60)
    segundos_restantes = segundos - minutos * 60

    {horas, minutos, segundos_restantes}
  end

  defp to_time({horas, minutos, segundos}) do
    {:ok, time} = Time.new(horas, minutos, segundos)

    Time.to_string(time)
  end
end
