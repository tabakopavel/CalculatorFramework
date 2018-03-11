package com.thecalculatorsite.test.base;


import com.thecalculatorsite.framework.core.driver.Driver;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;


public class BaseCucumberTest extends AbstractTestNGCucumberTests {

    @BeforeMethod(alwaysRun = true)
    public void init() {
        Driver.init();
    }

    @AfterMethod(alwaysRun = true)
    public void clean(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            Driver.takeScreenShot();
        }
        Driver.clean();
    }

}

