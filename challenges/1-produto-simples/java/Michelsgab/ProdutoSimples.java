import java.util.Scanner;

public class ProdutoSimples {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int firstValue = sc.nextInt();
        int secondValue = sc.nextInt();      
        int productResult = firstValue * secondValue;

        System.out.println("Product: " + productResult);

        sc.close();
    }
}
