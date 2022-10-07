args =
  System.argv()
  |> Enum.map(fn element -> String.to_integer(element) end)

[x, y | _] = args

produto = x * y

IO.puts("produto: #{produto}")
