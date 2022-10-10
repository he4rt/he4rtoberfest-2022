import java.util.Arrays;
import java.util.Collections;
import java.util.Locale;
import java.util.Scanner;

public class TiposDeTriangulo{
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Dados: ");
        Double[] ladosTriangulo = {sc.nextDouble(), sc.nextDouble(), sc.nextDouble()};
        
        Arrays.sort(ladosTriangulo, Collections.reverseOrder());
        System.out.println();
        System.out.print("Entrada: ");
        
        System.out.println("\n" + ladosTriangulo[0] + "\n" + ladosTriangulo[1] + "\n" + ladosTriangulo[2]);
        
        System.out.println();
        System.out.println();
        checarTriangulo(ladosTriangulo);
        

        sc.close();
        }

        public static void checarTriangulo(Double[] ladosTriangulo){

            double ladoA = ladosTriangulo[0];
            double ladoB = ladosTriangulo[1];
            double ladoC = ladosTriangulo[2];

            if(ladoA >= (ladoB + ladoC)){
                System.out.println("Não forma Triangulo");
            } else {
                if (Math.pow(ladoA, 2) == Math.pow(ladoB, 2) + Math.pow(ladoC, 2)){
                    System.out.println("Triangulo Retangulo");
                } 
                if (Math.pow(ladoA, 2) > Math.pow(ladoB, 2) + Math.pow(ladoC, 2)){
                    System.out.println("Triangulo Obtusangulo");
                } 
                if (Math.pow(ladoA, 2) < Math.pow(ladoB, 2) + Math.pow(ladoC, 2)){
                    System.out.println("Triangulo Acutangulo");
                }
                if (ladoA == ladoB && ladoB == ladoC){
                    System.out.println("Triangulo Equilatero");
                } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
                    System.out.println("Triangulo Isoceles");
                }
        }
    }
}