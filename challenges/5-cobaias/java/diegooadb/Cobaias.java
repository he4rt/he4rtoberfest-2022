import java.util.HashMap;
import java.util.Scanner;

public class Cobaias {
    public static void main(String[] args) {
        HashMap<Character, Integer> tests = inputValues();

        System.out.printf("Total: %d cobaias\n", getTotal(tests));
        System.out.printf("Total de coelhos: %d\n", tests.get('C'));
        System.out.printf("Total de ratos: %d\n", tests.get('R'));
        System.out.printf("Total de sapos: %d\n", tests.get('S'));
        System.out.printf("Percentual de coelhos: %.2f %%\n", getPercentage(tests, 'C'));
        System.out.printf("Percentual de ratos: %.2f %%\n", getPercentage(tests, 'R'));
        System.out.printf("Percentual de sapos: %.2f %%\n", getPercentage(tests, 'S'));

    }

    private static HashMap<Character, Integer> inputValues() {
        Scanner scan = new Scanner(System.in);
        System.out.println("Digite a quantidade de testes:");
        String quantityString = scan.nextLine();
        System.out.println("Informe os testes: ");
        int quantity = Integer.parseInt(quantityString);

        HashMap<Character, Integer> tests = new HashMap<>();
        Scanner scannValues = new Scanner(System.in);

        for (int i = 1; i <= quantity; i++) {
            String line = scannValues.nextLine();
            String[] s = line.split(" ");

            char c = s[1].charAt(0);
            c = Character.toUpperCase(c);

            int inte = Integer.parseInt(s[0]);

            if (tests.get(c) != null) {
                inte += tests.get(c);
            }

            tests.put(c, inte);
            System.out.println("    ");
        }
        return tests;
    }

    private static int getTotal(HashMap<Character, Integer> tests) {
        int res = 0;
        for (Integer value : tests.values()) {
            res += value;
        }
        return res;
    }

    private static double getPercentage(HashMap<Character, Integer> tests, char c) {
        double value = 0;

        if (tests.containsKey(c)) {
            value = tests.get(c);
        }
        double total = getTotal(tests);

        return (value * 100) / total;
    }
}
