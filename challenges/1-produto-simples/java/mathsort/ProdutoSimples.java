public class ProdutoSimples {
	public static void main(String[] args) {
	
		if(args.length != 2) {
			System.out.println("Error!");
			System.out.println("Usage: java ProdutoSimples primeiro_numero segundo_numero");
			System.exit(0);
		}
		
		int firstValue = Integer.parseInt(args[0]);
		int secondValue = Integer.parseInt(args[1]);
		int product = firstValue * secondValue;
		
		System.out.println("produto: " + product);
		
	}
}
