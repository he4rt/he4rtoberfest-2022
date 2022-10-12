import java.util.Scanner;

public class TipoTriangulo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Entre com 3 lados de um triangulo");
        System.out.print("Lado A: ");
        double ladoA = scanner.nextDouble();

        System.out.print("Lado B: ");
        double ladoB = scanner.nextDouble();

        System.out.print("Lado C: ");
        double ladoC = scanner.nextDouble();
        scanner.close();

        System.out.println("");

        validaTriangulo(ladoA,ladoB,ladoC);
    }

    private static void validaTriangulo(double ladoA, double ladoB, double ladoC) {
        final int expoente = 2;
        final double somaRaizLadoBLadoC = Math.pow(ladoB, expoente) + Math.pow(ladoC, expoente);
        final double raizLadoA = Math.pow(ladoA, expoente);

        System.out.println(somaRaizLadoBLadoC);
        System.out.println(raizLadoA);

        if (ladoA >= ladoB + ladoC) System.out.println("NAO FORMA TRIANGULO");
            else {
                if (raizLadoA == somaRaizLadoBLadoC) System.out.println("TRIANGULO RETANGULO");
                if (raizLadoA > somaRaizLadoBLadoC) System.out.println("TRIANGULO OBTUSANGULO");
                if (raizLadoA < somaRaizLadoBLadoC) System.out.println("TRIANGULO ACUTANGULO");
                if (ladoA == ladoB && ladoA == ladoC)  System.out.println("TRIANGULO EQUILATERO");
                else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) System.out.println("TRIANGULO ISOSCELES");
        }
    }
}