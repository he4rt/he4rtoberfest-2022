import java.util.Scanner;

public class ConverterSegundos {
    static final int HORA = 3600;
    static final int MINUTO = 60;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Entre o valor em segundos: ");
        int entradaEmSegundos = scanner.nextInt();

        scanner.close();

        System.out.println(formataHora(entradaEmSegundos / HORA)
                   + ":" + formataHora((entradaEmSegundos % HORA) / MINUTO)
                   + ":" + formataHora((entradaEmSegundos % HORA) % MINUTO));
    }

    private static String formataHora(int valorParaFormatar){
        return valorParaFormatar < 10 ? "0" + valorParaFormatar : String.valueOf(valorParaFormatar);
    }
}