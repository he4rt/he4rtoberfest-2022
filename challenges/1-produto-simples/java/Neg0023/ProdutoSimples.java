
public class ProdutoSimples {
    public static void main(String[] args) {
        System.out.printf("produto: %d", produto(Integer.parseInt(args[0]), Integer.parseInt(args[1])));
    }

    private static int produto(int a, int b) {
        return a * b;
    }
}
