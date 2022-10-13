import static java.lang.Math.pow;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class TiposDeTriangulo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.println("Digite 3 valores para conferir se podem formar um triângulo...");
    
        Double lados[] = {
            scan.nextDouble(), 
            scan.nextDouble(), 
            scan.nextDouble()
        };
        
        Arrays.sort(lados, Collections.reverseOrder());

        double A = lados[0];
        double B = lados[1];
        double C = lados[2];        

        System.out.println("Entrada: " + A + " " + B + " " + C );
        System.out.println("\n");

        if(A >= B + C){
            System.out.println("Não forma triangulo");
            return;
        } 

        else
            if(pow(A, 2) == pow(B, 2) + pow(C, 2)) System.out.println("Triangulo Retangulo");

            else if(pow(A, 2) > pow(B, 2) + pow(C, 2)) System.out.println("Triangulo Obtusangulo");

            else if(pow(A, 2) < pow(B, 2) + pow(C, 2)) System.out.println("Triangulo Acutangulo");

        if(A == B  && B == C) System.out.println("Triangulo Equilatero");

        else if(A == B || B == C || A == C) System.out.println("Triangulo Isosceles");
        
    }
}