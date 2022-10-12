import java.util.Scanner;

public class TipoTriangulo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<double> ladosTriangulo = new ArrayList<>();
        System.out.println("Entre com 3 lados de um triangulo");
        ladosTriangulo.add(scanner.nextDouble());
        ladosTriangulo.add(scanner.nextDouble());
        ladosTriangulo.add(scanner.nextDouble());

        scanner.close();

        System.out.println("");

        validaTriangulo(ladoA,ladoB,ladoC);
    }

    private static void validaTriangulo(double ladoA, double ladoB, double ladoC) {
        final int expoente = 2;
        final double somaRaizLadoBLadoC = Math.pow(ladoB, expoente) + Math.pow(ladoC, expoente);
        final double raizLadoA = Math.pow(ladoA, expoente);

        System.out.println("Entrada: " + ladoC + " " + ladoB + " " + ladoA);

        if (ladoA >= (ladoB + ladoC)) { System.out.println("NAO FORMA TRIANGULO"); }
        else {
            if (raizLadoA == somaRaizLadoBLadoC) System.out.println("TRIANGULO RETANGULO");
            if (raizLadoA > somaRaizLadoBLadoC) System.out.println("TRIANGULO OBTUSANGULO");
            if (raizLadoA < somaRaizLadoBLadoC) System.out.println("TRIANGULO ACUTANGULO");
            if (ladoA == ladoB && ladoA == ladoC)  System.out.println("TRIANGULO EQUILATERO");
            else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) System.out.println("TRIANGULO ISOSCELES");
        }
    }
}
