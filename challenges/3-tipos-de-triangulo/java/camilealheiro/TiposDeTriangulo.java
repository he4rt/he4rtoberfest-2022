import java.util.ArrayList;
import java.util.Collections;
import java.util.Locale;
import java.util.Scanner;

import static java.lang.Math.pow;

public class TiposDeTriangulo {
    public static void main(String[] args) {

        ArrayList<Float> lados = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);
        System.out.println("Digite três números separados por espaço: ");

        lados.add(sc.nextFloat());
        lados.add(sc.nextFloat());
        lados.add(sc.nextFloat());

        lados.sort(Collections.reverseOrder());

        float A = lados.get(0);
        float B = lados.get(1);
        float C = lados.get(2);

        double sumQuadrados = pow(B, 2) + pow(C, 2);

        if(A >= B + C)
            System.out.println("NAO FORMA TRIANGULO");
        else {
            if(pow(A, 2) == sumQuadrados)
                System.out.println("TRIANGULO RETANGULO");
            if(pow(A, 2) > sumQuadrados)
                System.out.println("TRIANGULO OBTUSANGULO");
            if(pow(A, 2) < sumQuadrados)
                System.out.println("TRIANGULO ACUTANGULO");
            if(A == B && A == C)
                System.out.println("TRIANGULO EQUILATERO");
            if((A == B || A == C || B == C) && (A != B || A != C || B != C))
                System.out.println("TRIANGULO ISOSCELES");
        }
    }
}
