public class ConverterSegundos {
    public static void main(String[] args) {
        int arg = Integer.parseInt(args[0]);

        int hour = 0;
        int min = 0;
        int sec;

        if (arg >= 3600) {
            hour = arg / 3600;
            arg -= hour * 3600;
        }
        if (arg >= 60) {
            min = arg / 60;
            arg -= min * 60;
        }
        sec = arg;

        System.out.printf("%02d:%02d:%02d", hour, min, sec);

    }
}
