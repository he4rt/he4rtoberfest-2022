import java.text.DecimalFormat;
import java.util.*;

public class Cobaias {

    private static final DecimalFormat df = new DecimalFormat("0.00");

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int N;
        String caseSubject;
        int totalTestSubjects = 0;

        HashMap<String, Integer> testSubjects = new HashMap<String, Integer>();

        System.out.print("Number of test cases: ");
        do {
            N = Integer.parseInt(input.nextLine());
        } while (N <= 0);

        System.out.println("Usage: number_of_test_subjects type_of_subject");

        for (int i = 1; i <= N; i++) {

            int valueCase = 0;
            String keyCase = "";
            String[] caseSubjectSplitted;

            do {
                System.out.print("Test #" + i + ": ");
                caseSubject = input.nextLine();
                caseSubjectSplitted = caseSubject.split("\\s");
                valueCase = Integer.parseInt(caseSubjectSplitted[0]);
                keyCase = caseSubjectSplitted[1];
            } while (valueCase < 1 || valueCase > 15 || caseSubjectSplitted.length != 2);

            testSubjects.put(keyCase.toUpperCase(), testSubjects.getOrDefault(keyCase.toUpperCase(), 0) + valueCase);

        }

        totalTestSubjects = testSubjects.get("R") + testSubjects.get("S") + testSubjects.get("C");

	System.out.println();
        System.out.println("Carregando...");
        System.out.println();
        System.out.println("Total: " + totalTestSubjects + " cobaias - 100%");
        System.out.print("Total de ratos: " + testSubjects.get("R") + " - ");
        printPercentage(testSubjects.get("R"), totalTestSubjects);
        System.out.print("Total de coelhos: " + testSubjects.get("C") + " - ");
        printPercentage(testSubjects.get("C"), totalTestSubjects);
        System.out.print("Total de sapos: " + testSubjects.get("S") + " - ");
        printPercentage(testSubjects.get("S"), totalTestSubjects);
    }

    public static void printPercentage(int number, int total) {

        double value = ((double) number / total) * 100;
        System.out.println(df.format(value) + "%");
    }
}
