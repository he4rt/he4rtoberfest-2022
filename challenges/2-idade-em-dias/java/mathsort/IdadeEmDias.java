public class IdadeEmDias {
    public static void main(String[] args) {

        if (args.length != 1) {
            System.out.println("Invalid number of arguments!");
            System.out.println("Usage: java IdadeEmDias X");
            System.exit(0);
        }

        int temp = Integer.parseInt(args[0]);
        int years = temp / 365;
        temp = temp % 365;

        int months = temp / 30;
        temp = temp % 30;

        int days = temp;

        System.out.println(years + " ano(s)");
        System.out.println(months + " mes(es)");
        System.out.println(days + " dia(s)");


    }
}
