package com.thecalculatorsite.framework.core.ui.tab;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import ru.yandex.qatools.htmlelements.element.HtmlElement;


@FindBy(how = How.XPATH, using = "//ul[@class='resulttabs']")
public class SwitchCalculatorsResultTab extends HtmlElement {

    @FindBy(how = How.XPATH, xpath = ".//li[@id='resultstab1']")
    private WebElement calculationResult;

    @FindBy(how = How.XPATH, xpath = ".//*[@id='resultstab2']")
    private WebElement graphOfResults;

    public WebElement getCalculationResult() {
        return calculationResult;
    }

    public WebElement getGraphOfResults() {
        return graphOfResults;
    }

}
