package Currencypakage;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
public class DataBaseMethods {
    private Connection connect=null;
    public Statement statement;
    String dbname="Currency";
    public void connect(){
        try{
            Class.forName("org.postgresql.Driver");
            String user="postgres";
            String password="ali";

            this.connect= DriverManager.getConnection("jdbc:postgresql://localhost:5432/"+dbname,user,password);
            if(this.connect!=null)
            {
                System.out.println("Connection Established");
            }
            else{
                System.out.println("Connection Failed");
            }
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }
    public List<Calculation> retriveCurrencyCalculation() {
        ResultSet result;
        List<Calculation> calculateList=new ArrayList<>();
        try {
            String Query = "select * from tbl_currency;";
            statement = connect.createStatement();
            result=statement.executeQuery(Query);
            while(result.next())
            {
                Calculation calculation=new Calculation();

                calculation.nameOfCurrency=result.getString("name_of_currency");
                calculation.amountOfcurrency=result.getInt("amount_of_currency");
                calculateList.add(calculation);
            }
        }catch(Exception e)
        {
            System.out.println(e);
        }
        return calculateList;
    }


    public void createCurrencyTable() {
        Statement statement;
        try {
            String createQuery = "Create table tbl_currency (id Integer generated always as identity,name_of_currency varchar(200)," +
                    "amount_of_currency Integer," +
                    "primary key (id));";
            statement = this.connect.createStatement();
            statement.executeUpdate(createQuery);
            System.out.println("Table Created");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
    public void insertCurrenyTable(List<Currency> currencyList){
        try {
            String insertQuery = "Insert into public.tbl_currency (name_of_currency,amount_of_currency)" +
                    " values ('%s',%s);";
            for(Currency currency:currencyList) {
                String Query=String.format(insertQuery,currency.nameOfCurrency,currency.amountOfCurrency);
                this.statement = this.connect.createStatement();
                this.statement.executeUpdate(Query);
                System.out.println("Row Inserted");
            }
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    public void updateCurrencyName(int id,String nameofcurrency){
        try{


            String updateQuery="Update tbl_currency set name_of_currency='%s' where id=%s ;";
            String Query=String.format(updateQuery,nameofcurrency,id);
            this.statement=this.connect.createStatement();
            this.statement.executeUpdate(Query);
            System.out.println("Updated");
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    public void updateCurrencyAmount(int id,int newAmountOfcurrency){
        try{


            String updateQuery="Update tbl_currency set amount_of_currency=%s where id=%s ;";
            String Query=String.format(updateQuery,newAmountOfcurrency,id);
            statement=connect.createStatement();
            statement.executeUpdate(Query);
            System.out.println("Updated");
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    public void dropCurrencyTable() {
        try {
            String dropQuery = "Drop table tbl_currency;";
            this.statement = this.connect.createStatement();
            this.statement.executeUpdate(dropQuery);
            System.out.println("Table Dropped");
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void retriveCurrencyTable() {
        ResultSet result;
        try {
            String Query = "select * from tbl_currency;";
            statement = connect.createStatement();
            result=statement.executeQuery(Query);
            while(result.next())
            {
                System.out.print("  "+result.getString("id"));
                System.out.print("  "+result.getString("name_of_currency"));
                System.out.println("  "+result.getString("amount_of_currency"));
            }
        }catch(Exception e)
        {
            System.out.println(e);
        }
    }
}

