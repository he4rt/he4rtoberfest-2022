import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.printf("Digite aqui o valor: ");
        int num = sc.nextInt();

        for (int i = 1; i < num + 1; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            
            } else if (i % 3 == 0) {
                System.out.println("Fizz");

            } else if ( i % 5 == 0) {
                System.out.println("Buzz");

            } else {
                System.out.println(i);
            }
        }
    }
}
