import java.util.Scanner;

public class ConverterSegundos {

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite o valor de segundos:");
    int totalDeSegundos = scanner.nextInt();
    scanner.close();

    final int HORAS_EM_SEGUNDOS = 3600;
    final int MINUTOS_EM_SEGUNDOS = 60;

    int quantidadeHoras = totalDeSegundos / HORAS_EM_SEGUNDOS;
    int quantidadeMinutos = (totalDeSegundos % HORAS_EM_SEGUNDOS) /MINUTOS_EM_SEGUNDOS;
    int quantidadeSegundos = (totalDeSegundos % HORAS_EM_SEGUNDOS) % MINUTOS_EM_SEGUNDOS;

    System.out.printf("%02d:%02d:%02d", quantidadeHoras, quantidadeMinutos, quantidadeSegundos) ;


  }

}
