package Currencypakage;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import javax.xml.crypto.Data;

public class MainClass {

    Currency currency=new Currency();
    public static void main(String[] args) {
        DataBaseMethods db=new DataBaseMethods();
        db.connect();
        Recursion(db);
    }

    public static void Recursion(DataBaseMethods db){

        Scanner scan=new Scanner(System.in);
        System.out.println("What you want to do: \n" +
                "1.Create table \n" +
                "2.Insert And Save Currency \n" +
                "3.Update Currency\n" +
                "4.Drop Table \n" +
                "5.See currency Data\n" +
                "6.Convert currency in to Dollar\n"+
                "7.Stop Program\n"+
                "Enter Choice:");
        int choice=scan.nextInt();
        switch (choice){
            case 1:
                db.createCurrencyTable();
                Recursion(db);
                break;
            case 2:
                db.insertCurrenyTable(getCurrency());
                Recursion(db);
                break;
            case 3:
                System.out.println("What you want to update \n 1.name_of_currency " +
                        "\n 2.amount_of_currency");
                int updateChoice=scan.nextInt();
                System.out.println("Enter id");
                int id=scan.nextInt();
                if(updateChoice==1)
                {
                    System.out.println("Enter new name");
                    String newUpdateName=scan.next();
                    db.updateCurrencyName(id,newUpdateName);
                }
                else if (updateChoice==2)
                {
                    System.out.println("Enter new amout of curreny");
                    int newAmountOfcurrency=scan.nextInt();
                    db.updateCurrencyAmount(id,newAmountOfcurrency);
                }
                Recursion(db);
                break;
            case 4:
                db.dropCurrencyTable();
                Recursion(db);
                break;
            case 5:
                db.retriveCurrencyTable();
                Recursion(db);
                break;
            case 6:
                System.out.println("How many dollars you have:");
                int numberOfDollars= scan.nextInt();
                for(Calculation calculation:db.retriveCurrencyCalculation())
                {
                    calculation.Calcuation(numberOfDollars);
                }
                Recursion(db);
                break;

            default:
                break;
        }
    }

    public static List<Currency> getCurrency() {
        List<Currency> currencyList= new ArrayList<>();
        System.out.println("how many currencies you have?");
        Scanner scan = new Scanner(System.in);

        int numberOfCurrency = scan.nextInt();
        for (int i = 0; i < numberOfCurrency; i++) {
            Currency currency = new Currency();
            System.out.println("Name Of Currency");
            currency.nameOfCurrency = scan.next();

            System.out.println("Amount of currency equal to one dollar:");
            currency.amountOfCurrency = scan.nextInt();
            currencyList.add(currency);
        }
        return currencyList;
    }

}

