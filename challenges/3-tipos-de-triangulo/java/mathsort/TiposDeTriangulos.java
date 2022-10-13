import java.util.Arrays;

public class TiposDeTriangulos {

    public static void main(String[] args) {

        if (args.length != 3) {
            System.out.println("Invalid number of arguments!");
            System.out.println("Usage: java TiposDeTriangulos X Y Z");
            System.exit(0);
        }

        double[] lengths = new double[3];

        for(int i = 0; i < args.length; i++) {
            lengths[i] = Double.parseDouble(args[i]);
        }

        Arrays.sort(lengths);

        if(!isTriangulo(lengths)) {
            System.out.println("NAO FORMA TRIANGULO");
            System.exit(1);
        } else {
            whichTriangulo(lengths);
            isEquilatero(lengths);
            isIsosceles(lengths);


        }

    }

    public static void isEquilatero(double[] arr) {

        double aSize = arr[2];
        double bSize = arr[1];
        double cSize = arr[0];

        if(aSize == bSize && bSize == cSize) {
            System.out.println("TRIANGULO RETANGULO");
        }
    }

    public static void isIsosceles(double[] arr) {
        double aSize = arr[2];
        double bSize = arr[1];
        double cSize = arr[0];

        if ((aSize == bSize && aSize != cSize) ||
                (bSize == cSize && bSize != aSize) ||
                (aSize == cSize && aSize != bSize))
            System.out.println("TRIANGULO ISOSCELES");

    }

    public static boolean isTriangulo(double[] arr) {
        double aSize = arr[2];
        double bSize = arr[1];
        double cSize = arr[0];

        if (aSize >= (bSize + cSize)) {
            return false;
        } else {
            return true;
        }
    }

    public static void whichTriangulo(double[] arr) {
        double aSize = arr[2];
        double bSize = arr[1];
        double cSize = arr[0];

        aSize = Math.pow(aSize,2);
        bSize = Math.pow(bSize,2);
        cSize = Math.pow(cSize,2);

        if(aSize == (bSize + cSize))
            System.out.println("TRIANGULO RETANGULO");
        else if(aSize > (bSize + cSize))
            System.out.println("TRIANGULO OBTUSANGULO");
        else
            System.out.println("TRIANGULO ACUTANGULO");
    }

}

