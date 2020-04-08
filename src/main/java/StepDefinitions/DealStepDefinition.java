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

public class DealStepDefinition {

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

    @Then("^user enters username and password$")
    public void user_enters_username_and_password(DataTable credentials){
        List<List<String>> data = credentials.raw();
        driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(data.get(0).get(0));
        driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(data.get(0).get(1));
    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() {
        driver.findElement(By.xpath("//input[@value='Login' and @type='submit']")).click();
//        WebElement loginBtn = driver.findElement(By.xpath("//input[@value='Login' and @type='submit']"));
//        JavascriptExecutor js = (JavascriptExecutor)driver;
//        js.executeScript("arguments[0].click();", loginBtn);
    }

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

    @Then("^user enters deals details$")
    public void user_enters_deals_details(DataTable dealData){
        List<List<String >> dealValue = dealData.raw();
        driver.findElement(By.xpath("//input[@id='title']")).sendKeys(dealValue.get(0).get(0));
        driver.findElement(By.xpath("//input[@id='amount']")).sendKeys(dealValue.get(0).get(1));
        driver.findElement(By.xpath("//input[@id='probability']")).sendKeys(dealValue.get(0).get(2));
        driver.findElement(By.xpath("//input[@id='commission']")).sendKeys(dealValue.get(0).get(3));
    }

    @Then("^close the browser$")
    public void close_the_browser(){
        driver.quit();
    }




}
