local argparse = require "argparse"

local parser = argparse("script", "Produto Simples")
parser:argument("numero1", "Primeiro Valor")
parser:argument("numero2", "Segundo Valor")

local args = parser:parse()

local numero1, numero2 = unpack(args)
local produto = tonumber(numero1) + tonumber(numero2)

print(string.format("O produto da soma é: %i", produto))