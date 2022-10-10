import java.util.Scanner;

import javax.lang.model.element.Element;

public class FizzBuzz{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Entrada: ");
        int value = sc.nextInt();

        for(int i = 1; i <= value; i++){
            if(i % 3 == 0 && i % 5 == 0){
                System.out.println("FizzBuzz");
            } else if(i % 3 == 0){
                System.out.println("Fizz");
            } else if(i % 5 == 0){
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }      
        }

        sc.close();
    }
}