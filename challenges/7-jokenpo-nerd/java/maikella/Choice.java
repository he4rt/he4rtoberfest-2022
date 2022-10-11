public enum Choice {

   PAPEL("papel") {
      @Override
      public boolean champion(Choice choice) {
         return choice == Choice.PEDRA || choice == Choice.SPOCK;
      }
   },
   PEDRA("pedra") {
      @Override
      public boolean champion(Choice choice) {
         return choice == Choice.LAGARTO || choice == Choice.TESOURA;
      }
   },
   LAGARTO("lagarto") {
      @Override
      public boolean champion(Choice choice) {
         return choice == Choice.SPOCK || choice == Choice.PAPEL;
      }
   },
   SPOCK("spock") {
      @Override
      public boolean champion(Choice choice) {
         return choice == Choice.TESOURA || choice == Choice.PEDRA;
      }
   },
   TESOURA("tesoura") {
      @Override
      public boolean champion(Choice choice) {
         return choice == Choice.PAPEL || choice == Choice.LAGARTO;
      }
   };

   private final String choice;

   Choice(String choice) {
      this.choice = choice;
   }

   public String getChoice() {
      return choice;
   }

   public abstract boolean champion(Choice choice);
}
