fun main() {
    var t: Int = readLine()!!.toInt()

    val a: Int = t/365
    t %= 365
    val m: Int = t/30
    t %= 30
    val d: Int = t

    println("$a ano(s)")
    println("$m mes(es)")
    println("$d dia(s)")

}