public class IdadeEmDias {
    public static void main(String[] args) {
        int idadeEmDias = Integer.parseInt(args[0]);
        System.out.printf("%d ano(s)%n",anos(idadeEmDias));
        System.out.printf("%d mes(s)%n", meses(idadeEmDias));
        System.out.printf("%d dia(s)%n", dias(idadeEmDias));
    }

    private static Integer dias(int idadeEmDias) {
        return idadeEmDias - 365 * anos(idadeEmDias) - 30 * meses(idadeEmDias);
    }

    private static Integer meses(int idadeEmDias) {
        return (idadeEmDias - 365 * anos(idadeEmDias)) / 30;
    }

    private static Integer anos(int valorEmDias) {
        return valorEmDias / 365;
    }
}
