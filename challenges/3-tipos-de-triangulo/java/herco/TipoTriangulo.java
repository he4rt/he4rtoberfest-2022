import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class TipoTriangulo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Double> ladosTriangulo = new ArrayList<>();

        System.out.println("Entre com 3 lados de um triangulo");

        ladosTriangulo.add(scanner.nextDouble());
        ladosTriangulo.add(scanner.nextDouble());
        ladosTriangulo.add(scanner.nextDouble());
        scanner.close();
        
        System.out.println("Entrada: " + ladosTriangulo.toString().replace("[", "").replace("]", ""));

        System.out.println("");

        ladosTriangulo.sort(Comparator.reverseOrder());

        validaTriangulo(ladosTriangulo.get(0), ladosTriangulo.get(1), ladosTriangulo.get(2));
    }

    private static void validaTriangulo(Double ladoA, Double ladoB, Double ladoC) {
        final int expoente = 2;
        final double somaRaizLadoBLadoC = Math.pow(ladoB, expoente) + Math.pow(ladoC, expoente);
        final double raizLadoA = Math.pow(ladoA, expoente);

        if (ladoA >= (ladoB + ladoC)) { System.out.println("NAO FORMA TRIANGULO"); }
        else {
            if (raizLadoA == somaRaizLadoBLadoC) System.out.println("TRIANGULO RETANGULO");
            if (raizLadoA > somaRaizLadoBLadoC) System.out.println("TRIANGULO OBTUSANGULO");
            if (raizLadoA < somaRaizLadoBLadoC) System.out.println("TRIANGULO ACUTANGULO");
            if (ladoA.equals(ladoB) && ladoA.equals(ladoC))  System.out.println("TRIANGULO EQUILATERO");
            else if (ladoA.equals(ladoB) || ladoA.equals(ladoC) || ladoB.equals(ladoC)) System.out.println("TRIANGULO ISOSCELES");
        }
    }
}
