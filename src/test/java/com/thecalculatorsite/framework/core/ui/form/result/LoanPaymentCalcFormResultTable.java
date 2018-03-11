package com.thecalculatorsite.framework.core.ui.form.result;

import com.thecalculatorsite.framework.core.driver.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import ru.yandex.qatools.htmlelements.element.HtmlElement;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@FindBy(how = How.XPATH, using = "//div[@id='results1' and @class='calculator_results compoundTable']")
public class LoanPaymentCalcFormResultTable extends HtmlElement {

    @FindAll({@FindBy(how = How.XPATH, using = ".//div[contains(@class,'resultText')]")})
    private List<WebElement> calculationResults;

    @FindAll({@FindBy(how = How.XPATH, using = ".//div[@class='resultInfoLeft']")})
    private List<WebElement> calculationInfoResults;

    @FindAll({@FindBy(how = How.XPATH, using = ".//div[@class='resultInfoRight']//b")})
    private List<WebElement> dateResults;

    @FindBy(how = How.XPATH, using = ".//h2[contains(text(),'Loan Repayments by Month')]/following-sibling::table[@class='reportdata']")
    private WebElement resultPaymentTable;

    private Map calculationResultsMap;
    private Map calculationInfoResultsMap;
    private Map dateResultsMap;

    public Map getCalculationResults() {
        if (calculationResultsMap == null) {
            calculationResultsMap = calculationResults.stream().collect(
                    Collectors.toMap(WebElement::getText
                            , element -> Driver.executeJsAndGetStringResult("return arguments[0].nextSibling.textContent", element)
                                    .trim().toLowerCase()));
        }
        return calculationResultsMap;
    }

    public Map getCalculationInfoResults() {
        if (calculationInfoResultsMap == null) {
            calculationInfoResultsMap = calculationInfoResults.stream().collect(
                    Collectors.toMap(WebElement::getText
                            , element -> Driver.executeJsAndGetStringResult("return arguments[0].nextSibling.data", element)
                                    .trim().toLowerCase()));
        }
        return calculationInfoResultsMap;
    }

    public Map getDateResults() {
        if (dateResultsMap == null) {
            dateResultsMap = dateResults.stream().collect(
                    Collectors.toMap(WebElement::getText
                            , element -> Driver.executeJsAndGetStringResult("return arguments[0].nextSibling.data", element)
                                    .trim().toLowerCase()));
        }
        return dateResultsMap;
    }

    public WebElement getResultPaymentTable() {
        //TODO implementation for extracting data from this table, Create custom element
        return resultPaymentTable;
    }
}
