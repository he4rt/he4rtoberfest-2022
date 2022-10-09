import java.util.Scanner;
import java.util.NoSuchElementException;
import java.util.InputMismatchException;


public class Jokenpo {

    private Arma arma1;
    private Arma arma2;


    private Arma pegaArmaPeloNome(String nome){
        for(Arma arma : Arma.values()){
            if(arma.getSymbol().equals(nome)){
                return arma;
            }
        }

        throw new NoSuchElementException();
    }

    public void startGame(){
        System.out.println("Informe o numero de vezes que deseja jogar: ");
        int numeroDeVezes = this.lerNumeroDeJogadas();

        for (int vez = 0; vez < numeroDeVezes; vez++){
            this.play();
        }

    }

    private int lerNumeroDeJogadas(){
        int numeroDeVezes = 0;
        Scanner scanner = new Scanner(System.in);
        do {
            try {
                numeroDeVezes = scanner.nextInt();
            }catch (InputMismatchException exception){
                System.out.println("Valor nao eh um inteiro, tente novamente");
                scanner.nextLine();
            }

            if(numeroDeVezes == 0) {
                System.out.println("Informe um valor maior que zero");
            }
        }while (numeroDeVezes == 0);

        return numeroDeVezes;
    }


    private void play(){
        System.out.println("Jogador 1, escolha sua arma");
        this.arma1 = this.escolherArma();

        System.out.println("Jogador 2, escolha sua arma");
        this.arma2 = this.escolherArma();

        this.descobrirVencedor();
    }

    private Arma escolherArma(){
        System.out.println("Digite a arma escolhida: \n" +
                "tesoura\n" +
                "papel\n" +
                "pedra\n" +
                "lagarto\n" +
                "spock");

        Scanner scanner = new Scanner(System.in);
        String arma;
        Arma armaEncontrada = null;

        do{
            arma = scanner.nextLine();
            armaEncontrada = this.localizarOuInvalidarArma(arma);
        }while(armaEncontrada == null);

        return armaEncontrada;
    }

    private Arma localizarOuInvalidarArma(String arma){
        try {
            return this.pegaArmaPeloNome(arma.toLowerCase());
        }catch (NoSuchElementException  exception){
            System.out.println("Opcao invalida, tente novamente");
            return null;
        }
    }

    private void descobrirVencedor(){

        if(this.arma1 == this.arma2){
            System.out.println("empate");
        }

        if(this.arma1.vence(this.arma2)){
            System.out.println("rajesh");
        }
        if(this.arma2.vence(this.arma1)){
            System.out.println("sheldon");
        }
    }


}
