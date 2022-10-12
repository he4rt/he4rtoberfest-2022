import java.security.InvalidParameterException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class ContadorNucleotideo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String sequenciaDna = "";

        System.out.print("Digite uma Sequência: ");
        sequenciaDna = scanner.nextLine();
        scanner.close();

        String resultado = validaSequenciaDna(sequenciaDna.toUpperCase());

        if(resultado.isEmpty()) System.out.println("Sequência de DNA inválida");
        else System.out.println(resultado);
    }

    private static String validaSequenciaDna(String sequenciaDna){
        List<String> listaTotalCharacter = new ArrayList<>();
        List<Character> listaCharacter = new ArrayList<>();
        List<Character> listaCharacterValidos = Arrays.asList('A', 'C', 'G', 'T');
        for(int i = 0; i < sequenciaDna.length(); i ++)  {
            listaCharacter.add(sequenciaDna.charAt(i));
        }

        for (Character character : listaCharacter) {
            if (!listaCharacterValidos.contains(character)) {
                return "";
            }
        }

        listaTotalCharacter.add("A: "+ listaCharacter.stream().filter(character -> character.equals('A')).count());
        listaTotalCharacter.add("C: "+ listaCharacter.stream().filter(character -> character.equals('C')).count());
        listaTotalCharacter.add("G: "+ listaCharacter.stream().filter(character -> character.equals('G')).count());
        listaTotalCharacter.add("T: "+ listaCharacter.stream().filter(character -> character.equals('T')).count());

        return listaTotalCharacter.toString().replace("[", "").replace("]","");
    }
}
