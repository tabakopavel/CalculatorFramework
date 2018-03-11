package com.thecalculatorsite.stepdefs;

import com.thecalculatorsite.cucumber.Context;
import com.thecalculatorsite.framework.core.driver.Driver;
import com.thecalculatorsite.framework.core.page.CalculatorPage;
import cucumber.api.java.en.Given;

public class BackGroundSteps {

    private Context context;
    private CalculatorPage calculatorPage;

    public BackGroundSteps(Context context) {
        this.context = context;
        calculatorPage = context.getPageObjectManager().getCalculatorPage();
    }

    @Given("^Refresh browser$")
    public void refreshBrowser() {
        Driver.getDriver().manage().deleteAllCookies();
        Driver.getDriver().get("about:blank");
    }
}
