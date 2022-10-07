import static java.lang.Math.pow;
import static java.lang.System.in;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

class TiposDeTriangulo {
    
    public static void main(final String[] args) {
        
        final Scanner sc = new Scanner(in);
        sc.useLocale(Locale.US); // aceita o ponto como separador decimal
        final List<Float> lados = new ArrayList<>();
        
        System.out.println("Digite um valor para cada lado do triangulo e aperte ENTER:");
        
        while (lados.size() < 3)
            lados.add(sc.nextFloat());
        
        System.out.println(determinaTipoTriangulo(lados));
        
    }
    
    private static String determinaTipoTriangulo(final List<Float> lados) {
        
        lados.sort(Collections.reverseOrder());
        final float a = lados.get(0);
        final float b = lados.get(1);
        final float c = lados.get(2);
        
        final double quadradoA = pow(a, 2);
        final double somaQuadradoBC = pow(b, 2) + pow(c, 2);
        final List<String> resultado = new ArrayList<>();
    
        if (a >= (b + c))
            resultado.add("NAO FORMA TRIANGULO");
        else {
            if (Collections.frequency(lados, a) == 3)
                resultado.add("TRIANGULO EQUILATERO");
            if (((a == b) && (a != c)) || ((b == c) && (c != a)) || ((a == c) && (c != b)))
                resultado.add("TRIANGULO ISOSCELES");
            if (quadradoA == somaQuadradoBC)
                resultado.add("TRIANGULO RETANGULO");
            if (quadradoA > somaQuadradoBC)
                resultado.add("TRIANGULO OBTUSANGULO");
            if (quadradoA < somaQuadradoBC)
                resultado.add("TRIANGULO ACUTANGULO");
        }
        return resultado.toString();
    }
    
}
