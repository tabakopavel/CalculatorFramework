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
public class LoanPayOffCalculatorResultTable extends HtmlElement {

    @FindAll({@FindBy(how = How.XPATH, using = ".//div[contains(@class,'resultText')]")})
    private List<WebElement> calculationResults;

    private Map calculationResultsMap;

    public Map getCalculationResults() {
        if (calculationResultsMap == null) {
            calculationResultsMap = calculationResults.stream().collect(
                    Collectors.toMap(WebElement::getText
                            , element -> Driver.executeJsAndGetStringResult("return arguments[0].nextSibling.textContent", element).trim().toLowerCase()));
        }
        return calculationResultsMap;
    }

}
