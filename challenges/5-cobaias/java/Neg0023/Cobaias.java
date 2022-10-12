import java.util.Scanner;

public class Cobaias {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(args[0]);
        int c = 0;
        int r = 0;
        int s = 0;
        int total=0;
        for (int i = 1; i <= n; i++) {

            int qtd = sc.nextInt();
            total+=qtd;
            char cobaia = sc.next().charAt(0);
            switch (cobaia) {
                case 'C' -> c += qtd;
                case 'R' -> r += qtd;
                case 'S' -> s += qtd;
            }
        }
        System.out.printf("Total: %d cobaias%n", total);
        System.out.printf("Total de coelhos: %d%n", c);
        System.out.printf("Total de ratos: %d%n", r);
        System.out.printf("Total de sapos: %d%n", s);
        double percentual = (double) c / total * 100;
        System.out.println("Percentual de coelhos: " + String.format("%.2f",percentual) + " %");
        percentual = (double) r / total * 100;
        System.out.println("Percentual de ratos: " + String.format("%.2f",percentual) + " %");
        percentual = (double) s / total * 100;
        System.out.println("Percentual de sapos: " + String.format("%.2f",percentual) + " %");
    }
}
