import java.util.Scanner;

public class ProdutoSimples{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int value1 = sc.nextInt();
        int value2 = sc.nextInt();

        int PROD = value1 * value2;

        System.out.printf("produto: %d%n", PROD);

        sc.close();
    }
}