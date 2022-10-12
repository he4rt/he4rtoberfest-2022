public class TiposDeTriangulo {
    public static void main(String[] args) {
        double a = Double.parseDouble(args[0]);
        double b = Double.parseDouble(args[1]);
        double c = Double.parseDouble(args[2]);

        System.out.printf("Entrada: %.1f %.1f %.1f%n", a, b, c);

        double troca;

        if (b > a && b >= c) {
            troca = a;
            a = b;
            b = troca;
        } else if (c > a && c >= b) {
            troca = a;
            a = c;
            c = troca;
        }

        if (c > b) {
            troca = b;
            b = c;
            c = troca;
        }


        if (a >= (b + c)) {
            System.out.println("NAO FORMA TRIANGULO");
        } else if ((a * a) == (b * b) + (c * c)) {
            System.out.println("TRIANGULO RETANGULO");
        } else {
            boolean b1 = (a == b && b != c) || (a != b && b == c);
            if ((a * a) > (b * b) + (c * c)) {
                System.out.println("TRIANGULO OBTUSANGULO");
                if (a == b && b == c) {
                    System.out.println("TRIANGULO EQUILATERO");
                } else if (b1) {
                    System.out.println("TRIANGULO ISOSCELES");
                }
            } else if ((a * a) < (b * b) + (c * c)) {
                System.out.println("TRIANGULO ACUTANGULO");
                if (a == b && b == c) {
                    System.out.println("TRIANGULO EQUILATERO");
                }else if (b1) {
                    System.out.println("TRIANGULO ISOSCELES");
                }
            }
        }
    }
}
