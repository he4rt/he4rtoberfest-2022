let input = readLine()

var anos = 0
var meses = 0

if let idade = input {
    var result = Int(idade)!
    if result >= 365 {
        anos = Int(result / 365)
        result -= 365 * anos
    }
    print("\(anos) ano(s)")
    if result >= 30 {
        meses = Int(result / 30)
        result -= 30 * meses
    }
    print("\(meses) mes(es)")
    print("\(result) dia(s)")
}