import java.util.*;

public class TiposDeTriangulo {

    public static void main(String[] args) {

        Locale locale = Locale.US;
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(locale);
        boolean inputLoopingVar = true;
        List<Double> sides = new ArrayList<>();

        System.out.println("Este programa irá lhe pedir 3 valores referentes a lados de triangulos e responderá que tipo de triangulo eles formam.");
        System.out.println();

        while (inputLoopingVar) {
            try {
                System.out.print("Digite o primeiro valor do produto: ");
                sides.add(scanner.nextDouble());
                inputLoopingVar = false;
            } catch (InputMismatchException e) {
                System.out.println();
                System.out.println("Valor inválido! o valor fornecido deve ser numérico. Casas decimais devem ser separadas por \".\"");
                scanner.next();
            }
        }

        inputLoopingVar = true;

        while (inputLoopingVar) {
            try {
                System.out.print("Digite o segundo valor do produto: ");
                sides.add(scanner.nextDouble());
                inputLoopingVar = false;
            } catch (InputMismatchException e) {
                System.out.println();
                System.out.println("Valor inválido! o valor fornecido deve ser numérico. Casas decimais devem ser separadas por \".\"");
                scanner.next();
            }
        }

        inputLoopingVar = true;

        while (inputLoopingVar) {
            try {
                System.out.print("Digite o segundo valor do produto: ");
                sides.add(scanner.nextDouble());
                inputLoopingVar = false;
            } catch (InputMismatchException e) {
                System.out.println();
                System.out.println("Valor inválido! o valor fornecido deve ser numérico. Casas decimais devem ser separadas por \".\"");
                scanner.next();
            }
        }

        System.out.println();
        Collections.sort(sides);

        if (sides.get(2) >= sides.get(1) + sides.get(0))
            System.out.println("NAO FORMA TRIANGULO");
        else {
            if (Math.pow(sides.get(2), 2.0) == Math.pow(sides.get(0), 2.0) + Math.pow(sides.get(1), 2.0)) {
                System.out.println("TRIANGULO RETANGULO");
            } else if (Math.pow(sides.get(2), 2.0) > Math.pow(sides.get(0), 2.0) + Math.pow(sides.get(1), 2.0)) {
                System.out.println("TRIANGULO OBTUSANGULO");
            } else {
                System.out.println("TRIANGULO ACUTANGULO");
            }
            if (sides.get(1).equals(sides.get(0)) || sides.get(1).equals(sides.get(2)))
                System.out.println(sides.get(0).equals(sides.get(2)) ? "TRIANGULO EQUILATERO" : "TRIANGULO ISOSCELES");
        }

    }
}