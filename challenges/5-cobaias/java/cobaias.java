package teste;

import java.util.*;

public class Teste {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Numero de testes: ");
		int n = scanner.nextInt();
		
		Cobaias(n);
	}

	private static void Cobaias(int n) {
		Scanner scanner = new Scanner(System.in);


		int[] quantia = new int[n];
		String[] animal = new String[n];

		// laço de input
		for (int i = 0; i < n; i++) {
			System.out.print("Input teste "+ (i+1) +": ");
			quantia[i] = scanner.nextInt();
			animal[i] = scanner.next();
		}

		int total = 0, coelhos = 0, sapos = 0, ratos = 0;
		double coelhoPercento, sapoPercento, ratoPercento;

		// laço de comparações
		for (int i = 0; i < n; i++) {
			total += quantia[i];

			if (animal[i].charAt(0) == 'C' || animal[i].charAt(0) == 'c') {
				coelhos += quantia[i];
			}
			if (animal[i].charAt(0) == 'R' || animal[i].charAt(0) == 'r') {
				ratos += quantia[i];
			}
			if (animal[i].charAt(0) == 'S' || animal[i].charAt(0) == 's') {
				sapos += quantia[i];
			}
		}

		System.out.println("\nTotal: "+total +" cobaias\nTotal de coelhos: " + coelhos + "\nTotal de ratos: " + ratos + "\nTotal de sapos: " + sapos);

		coelhoPercento = (float) ((coelhos*100.0f)/total);
		sapoPercento = (float) ((sapos*100.0f)/total);
		ratoPercento = (float) ((ratos*100.0f)/total);
		
		System.out.println("Porcentagem de coelhos: "+ (Math.round(coelhoPercento*100.0)/100.0) +"%\nPorcentagem de ratos: " + (Math.round(ratoPercento *100.0)/100.0) + "%\nPorcentagem de sapos: " + (Math.round(sapoPercento *100.0)/100.0) + "%");

	}
}



