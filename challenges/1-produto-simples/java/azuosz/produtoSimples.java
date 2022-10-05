import  java.util.Scanner;

public class produtoSimples {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um numero: ");
        double  num1 = scanner.nextDouble();

        System.out.print("Digite outro numero: " );
        double num2 = scanner.nextDouble();

        double produto = num1*num2;
        System.out.println("produto " + produto );



    }

}
