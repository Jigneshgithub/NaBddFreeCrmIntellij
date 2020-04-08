package StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

@RunWith(Cucumber.class)
public class LoginStepDefinition {

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
//      Step 1 without data driven  -> hardcode value
//    @Then("^user enters username and password$")
//    public void user_enters_username_and_password() {
//        driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("batchautomation");
//        driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("Test@12345");
//    }

    // data driven -> without example keyword
//    @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
//    public void user_enters_something_and_something(String strArg1, String strArg2){
//        driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(strArg1);
//        driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(strArg2);
//    }

    // data driven -> with example keyword
    @Then("^user enters (.+) and (.+)$")
    public void user_enters_and(String username, String password){
        driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(username);
        driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(password);
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

    @Then("^close the browser$")
    public void close_the_browser(){
        driver.quit();
    }

//    @Given("^user is already on  home page$")
//    public void user_is_already_on_home_page() {
//        String title = driver.getTitle();
//        System.out.println("Home Page : " + title);
//        Assert.assertEquals("CRMPRO",title);
//        System.out.println("Home Page");
//    }

//    @Given("^user click on contact$")
//    public void user_click_on_contact(){
//        driver.findElement(By.xpath("//a[contains(text(),'Contacts')]")).click();
//    }
//
//    @When("^user mouse over on contacts link$")
//    public void user_mouse_over_on_contacts_link() {
//        driver.switchTo().frame("mainpanel");
//        Actions action = new Actions(driver);
//        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//    }
//
//    @Then("^user click on new contact link$")
//    public void user_click_on_new_contact_link() {
//        driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//    }
//
//    @Then("^user fill the ftname, ltname and comapany$")
//    public void user_fill_the_ftname_ltname_and_comapany() {
//        Select select = new Select(driver.findElement(By.xpath("//select[@name='title']")));
//        select.selectByVisibleText("Mr.");
//        driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys("Akash");
//        driver.findElement(By.xpath("//input[@id='surname']")).sendKeys("Patel");
//        driver.findElement(By.xpath("//input[@name='client_lookup']")).sendKeys("ABC corporation");
//    }
//
//    @Then("^user click on saveBtn$")
//    public void user_click_on_saveBtn() {
//        driver.findElement(By.xpath("//input[@type ='submit' and value='Save']")).click();
//    }
//
//    @Then("^verify new contact created$")
//    public void verify_new_contact_created() {
//
//    }

    @Then("^user moves to new contact page$")
    public void user_moves_to_new_contact_page(){
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
    }

    @Then("^user enters contact details (.+) and (.+) and (.+)$")
    public void user_enters_contact_details_and_and(String ftname, String ltname, String companyname) {
        driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(ftname);
        driver.findElement(By.xpath("//input[@id='surname']")).sendKeys(ltname);
        driver.findElement(By.xpath("//input[@name='client_lookup']")).sendKeys(companyname);
        driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
    }
}
