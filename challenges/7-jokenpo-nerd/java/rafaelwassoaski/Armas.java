import java.util.Arrays;

public enum Arma {
    PAPEL("papel") {
        @Override
        public boolean vence(Arma arma) {
            return arma == Arma.PEDRA || arma == Arma.SPOCK;
        }
    },
    PEDRA("pedra") {
        @Override
        public boolean vence(Arma arma) {
            return arma == Arma.LAGARTO || arma == Arma.TESOURA;
        }
    },
    LAGARTO("lagarto") {
        @Override
        public boolean vence(Arma arma) {
            return arma == Arma.SPOCK || arma == Arma.PAPEL;
        }
    },
    SPOCK("spock") {
        @Override
        public boolean vence(Arma arma) {
            return arma == Arma.TESOURA || arma == Arma.PEDRA;
        }
    },
    TESOURA("tesoura") {
        @Override
        public boolean vence(Arma arma) {
            return arma == Arma.PAPEL || arma == Arma.LAGARTO;
        }
    };

    private final String symbol;

    public Arma(String symbol) {
        this.symbol = symbol;
    }

    public static Arma get(String symbol) {
        return lookup.get(symbol);
    }

    public abstract boolean vence(Arma arma);
}
