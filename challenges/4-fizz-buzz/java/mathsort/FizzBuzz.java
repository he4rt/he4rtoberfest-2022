public class FizzBuzz {
    public static void main(String[] args) {
        if(args.length != 1) {
            System.out.println("Invalid number of arguments");
            System.out.println("Usage: java FizzBuzz X");
            System.exit(0);
        }

        int counter = Integer.parseInt(args[0]);

        System.out.println("saída:");
        for (int i = 1; i <= counter; i++) {
            printFizzBuzz(i);
        }

    }

    public static void printFizzBuzz(int number) {
        if (number % 3 == 0 && number % 5 == 0)
            System.out.println("FizzBuzz");
        else if (number % 3 == 0)
            System.out.println("Fizz");
        else if (number % 5 == 0)
            System.out.println("Buzz");
        else
            System.out.println(number);
    }
}
