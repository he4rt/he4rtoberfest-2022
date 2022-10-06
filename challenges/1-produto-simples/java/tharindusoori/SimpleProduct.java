import java.util.Scanner;

public class SimpleProduct {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Insert first argument: ");
        int firstArg = scanner.nextInt();

        System.out.println("Insert second argument: ");
        int secondArg = scanner.nextInt();

        int PROD = firstArg*secondArg;
        System.out.println("Product: " + PROD);

    }
}