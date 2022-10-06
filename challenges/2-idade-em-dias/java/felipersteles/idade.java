
import java.util.*;

class converteIdade {
    public static void main(String[ ] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um numero inteiro: ");
        int dias = scanner.nextInt();
        scanner.close();

        IdadeEmDias(dias);

    }

    private static void IdadeEmDias(int dias){

        int anos= 0, meses = 0;

        if(dias>=365){
            anos = dias/365;
            dias = dias%365;
        }

        if(dias >= 30){
            meses = dias/30;
            dias = dias%30;
        }
        
        System.out.println(anos + " ano(s)");
        System.out.println(meses + " mes(es)");
        System.out.println(dias + " dia(s)");
    }
}