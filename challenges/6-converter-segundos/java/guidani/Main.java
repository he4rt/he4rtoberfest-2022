import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scannerObj = new Scanner(System.in);

        System.out.println("Valor em segundos: ");
        int seconds = scannerObj.nextInt();

        int horas = seconds / 3600;
        int minutos = (seconds % 3600) / 60;
        int segundos = (seconds % 3600) % 60;

        String horasFormated = horas < 10 ? "0"+horas : Integer.toString(horas);
        String minutosFormated = minutos < 10 ? "0"+minutos : Integer.toString(minutos);
        String segundosFormated = segundos < 10 ? "0"+segundos : Integer.toString(segundos);

        System.out.println(horasFormated+":"+minutosFormated+":"+segundosFormated);
    }
}