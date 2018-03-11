package com.thecalculatorsite.framework.core.ui.tab;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import ru.yandex.qatools.htmlelements.element.HtmlElement;


@FindBy(how = How.XPATH, using = "//ul[@class='tabs'  and @id ='calculator']")
public class SwitchCalculatorTab extends HtmlElement {

    @FindBy(how = How.XPATH, xpath = ".//li[@id='tab1']")
    private WebElement loanPaymCalc;

    @FindBy(how = How.XPATH, xpath = ".//li[@id='tab2']")
    private WebElement loanPayOffCalc;

    public WebElement getLoanPaymCalc() {
        return loanPaymCalc;
    }

    public WebElement getLoanPayOffCalc() {
        return loanPayOffCalc;
    }

}
