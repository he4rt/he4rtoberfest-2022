import java.util.Scanner;

public class ProdutoSimples {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // scanner = leitor de dados da entrada 

        int x = sc.nextInt();
        int y = sc.nextInt();
        
        int produto = x * y;

        System.out.println("Produto: " + produto);

        sc.close();
    }
}
