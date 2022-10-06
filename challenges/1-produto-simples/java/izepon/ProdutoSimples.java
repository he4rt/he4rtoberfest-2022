import  java.util.Scanner;

public class ProdutoSimples {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número inteiro: ");
        int  multiplicand = scanner.nextInt();

        System.out.print("Digite um outro número inteiro: ");
        int multiplier = scanner.nextInt();

        int product = multiplicand * multiplier;
        System.out.println("Produto: " + product);
    }
}