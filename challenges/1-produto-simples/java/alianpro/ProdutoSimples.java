import  java.util.Scanner;

public class ProdutoSimples {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um numero: ");
        int  num1 = scanner.nextInt();

        System.out.print("Digite outro numero: " );
        int num2 = scanner.nextInt();

        System.out.println("produto: " + num1*num2 );

    }

}
