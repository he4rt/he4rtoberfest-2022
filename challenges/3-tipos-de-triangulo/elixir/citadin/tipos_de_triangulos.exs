defmodule Challenge do
  def triangle(a, b, c) do
    Enum.sort([a, b, c], :desc) |> verify_triangle()
  end

  defp verify_triangle([a, b, c]) when a >= b + c, do: "NAO FORMA TRIANGULO"

  defp verify_triangle([a, b, c]) do
    angle_response = verify_angles(a, b, c)
    side_response = verify_sides(a, b, c)

    "#{angle_response}, #{side_response}"
  end

  defp verify_angles(a, b, c) when a * a < b * b + c * c, do: "TRIANGULO ACUTANGULO"
  defp verify_angles(a, b, c) when a * a > b * b + c * c, do: "TRIANGULO OBTUSANGULO"
  defp verify_angles(_a, _b, _c), do: "TRIANGULO RETANGULO"

  defp verify_sides(a, b, c) when a == b and a == c and b == c, do: "TRIANGULO EQUILATERO"
  defp verify_sides(a, b, c) when a == b or a == c or b == c, do: "TRIANGULO ISOSCELES"
  defp verify_sides(_a, _b, _c), do: "TRIANGULO ESCALENO"
end
