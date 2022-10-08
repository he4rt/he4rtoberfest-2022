public class IdadeDias {
    public static void main(String[] args) {
        int arg = Integer.parseInt(args[0]);

        int year = 0;
        int month = 0;
        int day = 0;

        if (arg >= 365) {
            year = arg / 365;
            arg -= (year * 365);
        }
        if (arg >= 30) {
            month = arg / 30;
            arg -= (month * 30);
        }
        day = arg;

        System.out.printf("""
                %d ano(s)
                %d mes(es)
                %d dia(s)""", year, month, day);
    }
}
