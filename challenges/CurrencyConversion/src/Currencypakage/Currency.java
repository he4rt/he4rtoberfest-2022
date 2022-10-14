package Currencypakage;

public class Currency {
    String nameOfCurrency;
    int amountOfCurrency;
}

class  Calculation{
    String nameOfCurrency;
    int amountOfcurrency;

    public void Calcuation(int numberOfDollars){
        System.out.println(nameOfCurrency + "=" + numberOfDollars * amountOfcurrency);
    }
}
