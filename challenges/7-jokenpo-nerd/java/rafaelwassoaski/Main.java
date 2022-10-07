public class Main{

    public static Arma pegaArmaPeloNome(String nome){
        for(Arma arma : Arma.values()){
            if(arma.getSymbol().equals(nome)){
                return arma;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        System.out.println(pegaArmaPeloNome("tesoura"));
    }

}
