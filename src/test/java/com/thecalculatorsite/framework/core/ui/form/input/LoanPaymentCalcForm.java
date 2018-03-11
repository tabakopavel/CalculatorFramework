package com.thecalculatorsite.framework.core.ui.form.input;


import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import ru.yandex.qatools.htmlelements.element.*;

@FindBy(how = How.XPATH, using = "//div[@class='calculator_form loan-calculator' and @id='form1']")
public class LoanPaymentCalcForm extends HtmlElement {

    @FindBy(how = How.XPATH, xpath = ".//select[@id='currency']")
    private Select currency;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='amount']")
    private TextInput loanAmount;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='percent']")
    private TextInput annualInterestRate;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='term']")
    private TextInput months;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='deposit']")
    private TextInput initialDeposit;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='extrafees']")
    private TextInput extraFees;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='balloon']")
    private TextInput balloonPaymentAtTheEnd;

    @FindBy(how = How.XPATH, xpath = ".//input[@name='startdate']")
    private TextInput startDate;

    @FindBy(how = How.XPATH, xpath = ".//select[@id='showdates']")
    private Select showDates;

    @FindBy(how = How.XPATH, xpath = ".//input[@name='includefees']")
    private CheckBox icludeFees;

    @FindBy(how = How.XPATH, xpath = ".//input[@class='calculatorButton' and @type='submit']")
    private Button calculate;


    public Select getCurrency() {
        return currency;
    }

    public void selectCurrency(String currency) {
        this.currency.selectByValue(currency.toLowerCase());
    }

    public TextInput getLoanAmount() {
        return loanAmount;
    }

    public TextInput getAnnualInterestRate() {
        return annualInterestRate;
    }

    public TextInput getMonths() {
        return months;
    }

    public TextInput getInitialDeposit() {
        return initialDeposit;
    }

    public TextInput getExtraFees() {
        return extraFees;
    }

    public TextInput getBalloonPaymentAtTheEnd() {
        return balloonPaymentAtTheEnd;
    }

    public TextInput getStartDate() {
        return startDate;
    }

    public Select getShowDates() {
        return showDates;
    }

    public CheckBox getIncludeFees() {
        return icludeFees;
    }

    public Button getCalculateButton() {
        return calculate;
    }
}
