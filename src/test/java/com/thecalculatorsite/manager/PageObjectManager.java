package com.thecalculatorsite.manager;

import com.thecalculatorsite.framework.core.page.CalculatorPage;
import org.openqa.selenium.WebDriver;

public class PageObjectManager {
    private WebDriver driver;
    private CalculatorPage calculatorPage;

    public PageObjectManager(WebDriver driver) {
        this.driver = driver;
    }

    public CalculatorPage getCalculatorPage() {
        if (calculatorPage == null) {
            calculatorPage = new CalculatorPage(driver);
        }
        return calculatorPage;
    }

}
