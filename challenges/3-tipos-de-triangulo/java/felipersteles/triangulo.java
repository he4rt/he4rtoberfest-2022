
import java.util.*;
import java.util.Arrays;

class TiposDeTriangulo {
    public static void main(String[ ] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite tres valores: ");
        double A = scanner.nextInt();
        double B = scanner.nextInt();
        double C = scanner.nextInt();
        scanner.close();

        Triangulo( A,  B,  C);

    }

    private static void Triangulo(double A, double B, double C){

        System.out.println();

        double[] aux = {A,B,C};
        Arrays.sort(aux);

        A = aux[2];
        B = aux[1];
        C = aux[0];

        if(A >= (B+C)){
            System.out.println("NAO FORMA TRIANGULO");
        } 
        else{
            if( (A*A) == ( (B*B) + (C*C) ) ){
                System.out.println("TRIANGULO RETANGULO");
            }
            if( (A*A) > ( (B*B) + (C*C) ) ){
                System.out.println("TRIANGULO OBTUSANGULO");
            }
            if( (A*A) < ( (B*B) + (C*C) ) ){
                System.out.println("TRIANGULO ACUTANGULO");
            }
            if (A == B && B == C){
                System.out.println("TRIANGULO EQUILATERO");
            }
            if (A == B && A != C){
                System.out.println("TRIANGULO ISOSCELES");
            }
            if (B == C && B != A){
                System.out.println("TRIANGULO ISOSCELES");
            }
            if (A == C && A != B){
                System.out.println("TRIANGULO ISOSCELES");
            }
        }
    }
}