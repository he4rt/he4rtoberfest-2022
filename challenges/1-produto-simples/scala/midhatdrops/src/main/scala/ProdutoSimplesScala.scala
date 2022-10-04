object ProdutoSimplesScala {
  def main(args: Array[String]) = {
    println("Por favor entre dois valores inteiros:")
    val a = scala.io.StdIn.readInt()
    val b = scala.io.StdIn.readInt()
    val multiplicao = a * b
    println(f"O valor multiplicado é: $multiplicao")
  }

}