import java.util.ArrayList;
import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite um inteiro: ");
        int x = sc.nextInt();

        ArrayList<Integer> numeros = new ArrayList<>();
        for(int i = 1; i <= x; i++)
            numeros.add(i);

        ArrayList<String> seq = new ArrayList<>();
        for(int verificar : numeros) {
            if(verificar % 3 == 0 && verificar % 5 == 0)
                seq.add("FizzBuzz");
            else {
                if(verificar % 3 == 0)
                    seq.add("Fizz");
                else if(verificar % 5 == 0)
                    seq.add("Buzz");
                else
                    seq.add(String.valueOf(verificar));
            }
        }

        for(int i = 0; i < x; i++)
            System.out.printf("%s\n", seq.get(i));
    }
}
