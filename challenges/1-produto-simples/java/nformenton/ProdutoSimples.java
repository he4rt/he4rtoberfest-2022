import java.util.Scanner;

public class ProdutoSimples {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Insira um valor: ");
        int valor1 = scan.nextInt();
        System.out.print("Insira outro valor: ");
        int valor2 = scan.nextInt();

        int PROD = valor1 * valor2;

        System.out.println("Produto: " + PROD);
    }
}