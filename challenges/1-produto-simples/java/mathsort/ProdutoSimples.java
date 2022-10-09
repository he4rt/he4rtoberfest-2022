public class ProdutoSimples {
    public static void main(String[] args) {

        if (args.length != 2) {
            System.out.println("Exceed number of elements.");
            System.out.println("Usage: java ProdutoSimples X Y");
            System.exit(0);
        }

        int firstValue = Integer.parseInt(args[0]);
        int secondValue = Integer.parseInt(args[1]);
        int product = firstValue * secondValue;

        System.out.println("produto: " + product);
    }
}
