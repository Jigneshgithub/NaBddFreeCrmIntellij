package StepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.List;
import java.util.Map;

public class DealsStepWithMapDefinition {

    WebDriver driver;

    @Given("^user is already on login page$")
    public void user_is_already_on_login_page() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\main\\java\\Resources\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://classic.freecrm.com/");
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
    }

    @When("^title of login page is Free Crm$")
    public void title_of_login_page_is_free_crm() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
    }
//
    @Then("^user enters the username and password$")
    public void user_enters_the_username_and_password(DataTable credentials){
        for(Map<String, String> data : credentials.asMaps(String.class, String.class)){
            driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(data.get("username"));
            driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(data.get("password"));
        };

    }
//
    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() {
        driver.findElement(By.xpath("//input[@value='Login' and @type='submit']")).click();
//        WebElement loginBtn = driver.findElement(By.xpath("//input[@value='Login' and @type='submit']"));
//        JavascriptExecutor js = (JavascriptExecutor)driver;
//        js.executeScript("arguments[0].click();", loginBtn);
    }
//
    @Then("^user is on home page$")
    public void user_is_on_home_page() {
        String title = driver.getTitle();
        System.out.println("Home Page : " + title);
        Assert.assertEquals("CRMPRO", title);
    }

    @Then("^user moves to new deal page$")
    public void user_moves_to_new_deal_page(){
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
    }
    //
    @Then("^user enters deals details$")
    public void user_enters_deals_details(DataTable dealData){
        for(Map<String, String> dealValue : dealData.asMaps(String.class,String.class)) {
            driver.findElement(By.xpath("//input[@id='title']")).sendKeys(dealValue.get("title"));
            driver.findElement(By.xpath("//input[@id='amount']")).sendKeys(dealValue.get("amount"));
            driver.findElement(By.xpath("//input[@id='probability']")).sendKeys(dealValue.get("probability"));
            driver.findElement(By.xpath("//input[@id='commission']")).sendKeys(dealValue.get("commission"));

            driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click(); // save button

            // move to new deal
            Actions action = new Actions(driver);
            action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
            driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();

        }
    }
//
    @Then("^close the browser$")
    public void close_the_browser(){
        driver.quit();
    }
}
