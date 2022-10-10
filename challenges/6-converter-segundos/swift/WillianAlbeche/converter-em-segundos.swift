print("Por favor, escreva o input: ")
let inputSeconds = Int(readLine()!)
var hour: Int = inputSeconds! / 3600
var minute: Int = Int((inputSeconds! % 3600) / 60)
var seconds: Int = Int((inputSeconds! % 3600) % 60)

var result: String = ""
result += hour < 10 ? "0\(hour)" : "\(hour)"
result += minute < 10 ? ":0\(minute)" : ":\(minute)"
result += seconds < 10 ? ":0\(seconds)" : ":\(seconds)"

print(result)
