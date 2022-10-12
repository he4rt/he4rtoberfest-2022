const n = process.argv[2]

var hora = parseInt(n / 3600)
var min = parseInt((n % 3600) /60)
var seg = parseInt((n % 60) % 60)

if (hora < 10) {
    hora = "0" + hora
}
if (min < 10) {
    min = "0" + min
}
if (seg < 10) {
    seg = "0" + seg
}

console.log(hora.toString(), ":", min.toString(), ":", seg.toString())