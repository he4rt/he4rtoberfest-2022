import java.util.Scanner;
import java.util.stream.IntStream;

public class FizzBuzz {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Entrada: ");
        int value = sc.nextInt();

        IntStream.rangeClosed(1, value)
                .mapToObj(i -> i % 3 == 0 ? (i % 5 == 0 ? "FizzBuzz" : "Fizz") : (i % 5 == 0 ? "Buzz" : i))
                .forEach(System.out::println);


    }

}
