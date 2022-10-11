package com.maikella.exer7;

import java.util.NoSuchElementException;
import java.util.Scanner;

public class JokenpoNerd {

   private Choice player1;
   private Choice player2;

   private Choice choiceName(String moves){

      for(Choice playerValues : Choice.values()){
         if(playerValues.getChoice().equals(moves)){
            return playerValues;
         }
      }

      throw new NoSuchElementException();
   }

   public void start(){
      System.out.println("Informe o número de jogadas: ");
      int moves = moves();

      for (int i = 0; i < moves; i++){
         play();
      }

   }

   private int moves(){

      Scanner s = new Scanner(System.in);

      int moves = 0;
      boolean out = false;

      while(!out){

         moves = s.nextInt();

         if(moves > 0 ){
            out = true;
         }else{
            System.out.println("Informe um valor maior que zero");
         }
      }

      return moves;
   }


   private void play(){

      System.out.println("Jogador 1, sua escolha: ");
      player1 = choice();

      System.out.println("Jogador 2, sua escolha: ");
      player2 = choice();

      champion();
   }

   private Choice choice(){

      Scanner s = new Scanner(System.in);

      System.out.println("Você escolhe: \ntesoura\npapel\npedra\nlagarto\nspock");
      
      String choice;
      Choice validChoice = null;

      do{
         choice = s.nextLine();
         validChoice = choiceInvalid(choice);
      }while(validChoice == null);

      return validChoice;
   }

   private Choice choiceInvalid(String choice){

      try {
         return this.choiceName(choice.toLowerCase());
      }catch (NoSuchElementException e){
         System.out.println("Opção inválida, tente novamente!");
         return null;
      }
   }

   private void champion(){

      if(player1 == player2){
         System.out.println("empate");
      }

      if(player1.vence(player2)){
         System.out.println("rajesh");
      }
      if(player2.vence(player1)){
         System.out.println("sheldon");
      }
   }

}
