import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class ContadorDeNucleotideos {

   public static void main(String[] args) {

      dna();
   }


   private static void dna() {

      ArrayList<String> dna = new ArrayList<>();
      Scanner s = new Scanner(System.in);

      int a = 0;
      int c = 0;
      int g = 0;
      int t = 0;

      System.out.println("Entre com uma sequência de DNA: ");
      String dnaSequence = s.next().toUpperCase();

      if(!(dnaSequence.contains("A") && dnaSequence.contains("C") && dnaSequence.contains("G") && dnaSequence.contains("T"))){
         System.out.println("Sequência de DNA inválida");
      }else{

         for (int i = 0; i < dnaSequence.length(); i++) {

            dna.add(String.valueOf(dnaSequence.charAt(i)));

            if(dna.get(i).contains("A")){
               a++;
            }if(dna.get(i).contains("C")){
               c++;
            }if(dna.get(i).contains("G")){
               g++;
            }if(dna.get(i).contains("T")){
               t++;
            }

         }

         System.out.println(String.format("'A' : %s, 'C' : %s, 'G' : %s, 'T' : %s", a, c, g, t));
      }
   }

}

