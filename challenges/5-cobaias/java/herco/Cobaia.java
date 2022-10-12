import java.util.*;

public class Cobaia {
    static final Character COELHO = 'C';
    static final Character RATO = 'R';
    static final Character SAPO = 'S';

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> casosTeste = new ArrayList<>();
        List<Character> listaTipoCobaias = new ArrayList<>();
        List<Integer> listaQuantidadeCobaias = new ArrayList<>();

        System.out.println("Quantos testes foram realizados? ");
        do {
            totalCasosTeste = scanner.nextInt();
        } while (totalCasosTeste <= 0);
        scanner.nextLine();

        for (int i = 1; i <= totalCasosTeste; i++) {
            int quantidadeCobaias = 0;
            String[] testeSeparadoEmTotalCobaisETipoCobaia;

            System.out.print("Teste " + i + ": ");
            do {
                String teste = scanner.nextLine().toUpperCase();
                testeSeparadoEmTotalCobaisETipoCobaia = teste.split(" ");
                quantidadeCobaias = Integer.parseInt(testeSeparadoEmTotalCobaisETipoCobaia[0]);
            } while (quantidadeCobaias < 1 || quantidadeCobaias > 15);
            
            listaTipoCobaias.add(testeSeparadoEmTotalCobaisETipoCobaia[1].charAt(0));
            listaQuantidadeCobaias.add(quantidadeCobaias);
        }
        scanner.close();

        Integer totalCobaias = 0;
        for (Integer cobaias : listaQuantidadeCobaias) {
            totalCobaias += cobaias;
        }
        System.out.println("\nTotal: " + totalCobaias + " Cobaias");
        System.out.println("Total de coelhos: " + calcuaTotalPorTipoCobaia(listaTipoCobaias, listaQuantidadeCobaias, totalCobaias, COELHO));
        System.out.println("Total de ratos: " + calcuaTotalPorTipoCobaia(listaTipoCobaias, listaQuantidadeCobaias, totalCobaias, RATO));
        System.out.println("Total de sapos: " + calcuaTotalPorTipoCobaia(listaTipoCobaias, listaQuantidadeCobaias, totalCobaias, SAPO));
        System.out.printf("Percentual de coelhos:  %.2f%%\n", calculaPorcentagem(listaTipoCobaias, listaQuantidadeCobaias, totalCobaias, COELHO));
        System.out.printf("Percentual de ratos:  %.2f%%\n", calculaPorcentagem(listaTipoCobaias, listaQuantidadeCobaias, totalCobaias, RATO));
        System.out.printf("Percentual de sapos: %.2f%%\n", calculaPorcentagem(listaTipoCobaias, listaQuantidadeCobaias, totalCobaias, SAPO));
    }

    private static int calcuaTotalPorTipoCobaia(List<Character> listaTipoCobaias, List<Integer> listaQuantidadeCobaias, Integer totalCobaias, Character tipoCobaia) {
        int value = 0;
        for (int i = 0; i < listaTipoCobaias.size(); i++) {
            Character cobaia = listaTipoCobaias.get(i);
            if (cobaia.equals(tipoCobaia)) {
                value += listaQuantidadeCobaias.get(i);
            }
        }
        return value;
    }

    private static double calculaPorcentagem(List<Character> listaTipoCobaias, List<Integer> listaQuantidadeCobaias, Integer totalCobaias, Character tipoCobaia) {
        double value = calcuaTotalPorTipoCobaia(listaTipoCobaias, listaQuantidadeCobaias, totalCobaias, tipoCobaia);
        return (value * 100) / totalCobaias;
    }
}
