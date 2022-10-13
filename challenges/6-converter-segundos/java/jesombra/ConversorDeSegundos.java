import java.util.Scanner;

public class ConversorDeSegundos{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor em segundos que deseja converter: ");
        int segundos = sc.nextInt();

        conversor(segundos);
        sc.close();
    }

    public static void conversor(int value){
        final int horasEmSegundos = 3600;
        final int minutosEmSegundos = 60;

        int horas = value / horasEmSegundos;

        int minutos = (value % horasEmSegundos) / minutosEmSegundos;

        int segundos = (value % minutosEmSegundos) % minutosEmSegundos;
        System.out.println();
        System.out.printf("Valor Convertido: %02d:%02d:%02d %n", horas, minutos, segundos);

    }
}