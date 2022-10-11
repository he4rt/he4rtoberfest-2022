import java.util.Scanner;

public class ProdutoSimples {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        String[] array = s.split(" ");

        System.out.println("Produto: " + Integer.parseInt(array[0]) * Integer.parseInt(array[1]));

    }

}