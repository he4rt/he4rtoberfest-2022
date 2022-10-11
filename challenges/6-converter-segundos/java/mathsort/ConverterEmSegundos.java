public class ConverterEmSegundos {

    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Invalid number of arguments.");
            System.out.println("Usage: java ConverterEmSegundos NumberInSeconds");
            System.exit(0);
        }

        int temp = Integer.parseInt(args[0]);

        int hours = temp / 3600;
        temp = temp % 3600;

        int minutes = temp / 60;
        int seconds = temp % 60;

        String inHHMMSS = String.format("%02d:%02d:%02d", hours, minutes, seconds);

        System.out.println(inHHMMSS);
    }


}
