package com.thecalculatorsite.framework.core.page;

import com.thecalculatorsite.framework.core.driver.Driver;
import com.thecalculatorsite.framework.core.ui.form.input.LoanPayOffCalcForm;
import com.thecalculatorsite.framework.core.ui.form.input.LoanPaymentCalcForm;
import com.thecalculatorsite.framework.core.ui.form.result.LoanPayOffCalculatorResultTable;
import com.thecalculatorsite.framework.core.ui.form.result.LoanPaymentCalcFormResultTable;
import com.thecalculatorsite.framework.core.ui.form.result.LoanPaymentGraphsOfResult;
import com.thecalculatorsite.framework.core.ui.tab.SwitchCalculatorTab;
import com.thecalculatorsite.framework.core.ui.tab.SwitchCalculatorsResultTab;
import org.openqa.selenium.WebDriver;
import ru.yandex.qatools.htmlelements.loader.HtmlElementLoader;

public class CalculatorPage {

    private SwitchCalculatorTab switchCalculatorTab;

    private SwitchCalculatorsResultTab switchCalculatorsResultTab;

    private LoanPaymentCalcForm loanPaymentCalcForm;

    private LoanPayOffCalcForm loanPayOffCalcForm;

    private LoanPaymentCalcFormResultTable loanPaymentCalcFormResultTable;

    private LoanPaymentGraphsOfResult loanPaymentGraphsOfResult;

    private LoanPayOffCalculatorResultTable loanPayOffCalculatorResultTable;


    public CalculatorPage(WebDriver driver) {
        HtmlElementLoader.populatePageObject(this, driver);
    }

    public CalculatorPage open() {
        Driver.getDriver().get(System.getProperty("calc_page"));
        return this;
    }

    public SwitchCalculatorTab getSwitchCalculatorTab() {
        return switchCalculatorTab;
    }

    public LoanPaymentCalcForm getLoanPaymentCalcForm() {
        return loanPaymentCalcForm;
    }

    public LoanPaymentCalcFormResultTable getLoanPaymentCalcFormResultTable() {
        return loanPaymentCalcFormResultTable;
    }

    public SwitchCalculatorsResultTab getSwitchCalculatorsResultTab() {
        return switchCalculatorsResultTab;
    }

    public LoanPayOffCalcForm getLoanPayOffCalcForm() {
        return loanPayOffCalcForm;
    }

    public LoanPaymentGraphsOfResult getLoanPaymentGraphsOfResult() {
        return loanPaymentGraphsOfResult;
    }

    public LoanPayOffCalculatorResultTable getLoanPayOffCalculatorResultTable() {
        return loanPayOffCalculatorResultTable;
    }
    
}
