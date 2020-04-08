package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="src/main/java/Features",
        glue = {"StepDefinitions"},
        format = {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber_xml"},
        monochrome = true,
        dryRun = false,
        strict = true
)
public class TestRunner {


}
