public class FizzBuzz {
    public static void main(String[] args) {
        int value = Integer.parseInt(args[0]);
        System.out.println("Saída:");
        for (int i = 1; i <= value; i++) {
            if ((i % 3) == 0 && (i % 5) == 0) {
                System.out.println("FizzBuzz");
                continue;
            }
            if ((i % 3) == 0) {
                System.out.println("Fizz");
                continue;
            }
            if ((i % 5) == 0) {
                System.out.println("Buzz");
                continue;
            }
            System.out.println(i);
        }
    }
}
