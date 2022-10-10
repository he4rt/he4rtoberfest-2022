import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Entre com um número: ");
        int x = scan.nextInt();

        System.out.println("Saída: ");
        int count = 0;

        for(int i = 1; i <= x; i++){
            count++;

            if(i % 3 == 0 && i % 5 == 0)
                System.out.println("FizzBuzz");

            if(i % 3 == 0)
                System.out.println("fizz");

            if(i % 5 == 0)
                System.out.println("buzz");

            else
                System.out.println(i);
        }
    }
}
