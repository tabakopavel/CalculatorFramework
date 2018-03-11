package com.thecalculatorsite.framework.core.ui.form.input;


import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import ru.yandex.qatools.htmlelements.element.Button;
import ru.yandex.qatools.htmlelements.element.HtmlElement;
import ru.yandex.qatools.htmlelements.element.Select;
import ru.yandex.qatools.htmlelements.element.TextInput;

@FindBy(how = How.XPATH, using = "//div[@class='calculator_form credit-card' and @id='form2']")
public class LoanPayOffCalcForm extends HtmlElement {

    @FindBy(how = How.XPATH, xpath = ".//select[@id='currency']")
    private Select currency;

    @FindBy(how = How.XPATH, xpath = ".//input[@name='loanBalance']")
    private TextInput loanBalance;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='loanRate']")
    private TextInput annualInterestRate;

    @FindBy(how = How.XPATH, xpath = ".//input[@id='paymentAmount']")
    private TextInput paymentAmount;

    @FindBy(how = How.XPATH, xpath = ".//input[@class='calculatorButton' and @type='submit']")
    private Button calculate;

    public Select getCurrency() {
        return currency;
    }

    public void selectCurrency(String currency) {
        this.currency.selectByValue(currency.toLowerCase());
    }

    public TextInput getLoanBalance() {
        return loanBalance;
    }

    public TextInput getAnnualInterestRate() {
        return annualInterestRate;
    }

    public TextInput getPaymentAmount() {
        return paymentAmount;
    }

    public Button getCalculateButton() {
        return calculate;
    }
}
