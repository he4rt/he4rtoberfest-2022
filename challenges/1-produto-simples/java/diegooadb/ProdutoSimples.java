public class ProdutoSimples {
    public static void main(String[] args) {
        int prod = 1;
        for (String arg : args) {
            int intValue = Integer.parseInt(arg);
            prod *= intValue;
        }
        System.out.printf("produto: %d", prod);
    }
}
