import java.util.Scanner;

public class ConverterSegundos {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.printf("Digite aqui o valor relativo aos segundos: ");
        int numero = sc.nextInt();

        int horas = numero / 3600;
        int minutos = (numero - (horas * 3600)) / 60;
        int segundos = numero - (horas * 3600) - (minutos * 60);

        System.out.printf("%02d:%02d:%02d", horas,minutos,segundos);
        sc.close();
    }
}