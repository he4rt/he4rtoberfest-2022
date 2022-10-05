import java.util.*;

class ProdutoSimples {
    public static void main(String[ ] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite os valores: ");
        int valor1 = scanner.nextInt();
        int valor2 = scanner.nextInt();
        scanner.close();

        int resposta = ProdutoSimples(valor1, valor2);

        System.out.println("produto: " + resposta);
    }

    private static int ProdutoSimples(int a, int b){
        return a*b;
    }
}