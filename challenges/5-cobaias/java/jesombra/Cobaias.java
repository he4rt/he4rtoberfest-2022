import java.util.Scanner;

public class Cobaias{
    public static void main(String[] args) {
        start();
    }

    public static void start(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite a quantidade de testes que foram feitos: ");
        int quantidade = sc.nextInt();

        int ratos = 0, sapos = 0, coelhos = 0, totalCobaias = 0;
        for(int i = 0; i < quantidade; i++){
            char tipoCobaias;
            int qtdCobaias;
            System.out.print("Digite a quantidade e o o tipo de cobaia: ");
            qtdCobaias = sc.nextInt();
            tipoCobaias = sc.next().charAt(0);
            totalCobaias += qtdCobaias;
            
            if(tipoCobaias == 'C'){
                coelhos += qtdCobaias;
            } else if (tipoCobaias == 'R'){
                ratos += qtdCobaias;
            } else if (tipoCobaias == 'S'){
                sapos += qtdCobaias;
            }
        }

        System.out.printf("Total: %d cobaias%n", totalCobaias);
        System.out.printf("Total de Coelhos: %d%n", coelhos);
        System.out.printf("Total de Ratos: %d%n", ratos);
        System.out.printf("Total de Sapos: %d%n", sapos);
        System.out.printf("Percentual de Coelhos: %.2f %% %n", ((double) coelhos / totalCobaias * 100));
        System.out.printf("Percentual de Ratos: %.2f %% %n", ((double) ratos / totalCobaias * 100));
        System.out.printf("Percentual de Sapos: %.2f %% %n", ((double) sapos / totalCobaias * 100));

        sc.close();
    }
}