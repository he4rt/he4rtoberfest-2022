import  java.util.Scanner;

public class ProdutoSimples {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor do produto: ");
        int  productValue = scanner.nextInt();

        System.out.print("Digite a quantidade: " );
        int productQuantity = scanner.nextInt();

        int totalProduct = productValue * productQuantity;
        System.out.println("Valor total do produto: " + totalProduct);
    }
}