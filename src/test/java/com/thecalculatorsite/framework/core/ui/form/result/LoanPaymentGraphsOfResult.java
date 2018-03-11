package com.thecalculatorsite.framework.core.ui.form.result;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import ru.yandex.qatools.htmlelements.element.HtmlElement;

@FindBy(how = How.XPATH, using = "//div[@id='results2' and @class='calculator_results compoundTable']")
public class LoanPaymentGraphsOfResult extends HtmlElement {

    @FindBy(how = How.XPATH, using = ".//div[@id='chart_div']")
    private WebElement loanBalanceGraph;

    @FindBy(how = How.XPATH, using = ".//div[@id='chart_div2']")
    private WebElement totalIneterestAndPrincipalPaidGraph;

    public WebElement getLoanBalanceGraph() {
        return loanBalanceGraph;
    }

    public WebElement getTotalIneterestAndPrincipalPaidGraph() {
        return totalIneterestAndPrincipalPaidGraph;
    }
}
