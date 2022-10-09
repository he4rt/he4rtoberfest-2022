import java.util.*;

public class TiposTriangulo {
    public static void main(String[] args) {
        List<Double> doubles = new ArrayList<>(Arrays.stream(args).map(Double::parseDouble).toList());
        doubles.sort(Comparator.comparing(Double::doubleValue).reversed());

        double sideA = doubles.get(0);
        double sideB = doubles.get(1);
        double sideC = doubles.get(2);

        String format = String.format(Locale.US, "Entrada: %.1f %.1f %.1f\n", sideA, sideB, sideC);
        System.out.println(format);

        double sideBPlusSideCSquared = Math.pow(sideB, 2) + Math.pow(sideC, 2);
        double sideASquared = Math.pow(sideA, 2);

        if (sideA >= (sideB + sideC)) {
            System.out.println("Não forma quadrado");
            return;
        }

        if (sideASquared == sideBPlusSideCSquared) {
            System.out.println("TRIANGULO RETANGULO");
        }

        if (sideASquared > sideBPlusSideCSquared) {
            System.out.println("TRIANGULO OBTUSANGULO");
        }

        if (sideASquared < sideBPlusSideCSquared) {
            System.out.println("TRIANGULO ACUTANGULO");
        }

        if (sideA == sideB && sideA == sideC) {
            System.out.println("TRIANGULO EQUILATERO");
            return;
        }

        if (sideA == sideB || sideA == sideC || sideB == sideC) {
            System.out.println("TRIANGULO ISOSCELES");
        }

    }
}
