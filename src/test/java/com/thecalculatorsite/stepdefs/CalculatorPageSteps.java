package com.thecalculatorsite.stepdefs;

import com.thecalculatorsite.cucumber.Context;
import com.thecalculatorsite.framework.core.driver.Driver;
import com.thecalculatorsite.framework.core.page.CalculatorPage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.Map;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

public class CalculatorPageSteps {
    private Context context;
    private CalculatorPage calculatorPage;

    public CalculatorPageSteps(Context context) {
        this.context = context;
        calculatorPage = context.getPageObjectManager().getCalculatorPage();
    }

    @Given("^I navigate to home page$")
    public void iNavigateToHomePage() {
        context.getPageObjectManager().getCalculatorPage().open();
        Driver.waitForJSToLoad();
        Driver.waitForAjaxToLoad();
        Driver.waitForJQueryToLoad();
    }

    @When("^I select CURRENCY  with \"([^\"]*)\"$")
    public void iSelectCURRENCYWith(String arg0) {
        if (calculatorPage.getLoanPaymentCalcForm().isDisplayed()) {
            calculatorPage.getLoanPaymentCalcForm().selectCurrency(arg0);
        } else {
            calculatorPage.getLoanPayOffCalcForm().selectCurrency(arg0);
        }
    }

    @And("^I fill in  LOAN AMOUNT with \"([^\"]*)\"$")
    public void iFillInLOANAMOUNTWith(String arg0) {
        calculatorPage.getLoanPaymentCalcForm().getLoanAmount().sendKeys(arg0);
    }

    @And("^I fill in  ANNUAL INTEREST RATE with \"([^\"]*)\"$")
    public void iFillInANNUALINTERESTRATEWith(String arg0) {
        if (calculatorPage.getLoanPaymentCalcForm().isDisplayed()) {
            calculatorPage.getLoanPaymentCalcForm().getAnnualInterestRate().sendKeys(arg0);
        } else {
            calculatorPage.getLoanPayOffCalcForm().getAnnualInterestRate().sendKeys(arg0);
        }

    }

    @And("^I fill in MONTHS with \"([^\"]*)\"$")
    public void iFillInMONTHSWith(String arg0) {
        calculatorPage.getLoanPaymentCalcForm().getMonths().sendKeys(arg0);
    }

    @And("^I click  on Calculate button$")
    public void iClickOnCalculateButton() {
        if (calculatorPage.getLoanPaymentCalcForm().isDisplayed()) {
            calculatorPage.getLoanPaymentCalcForm().getCalculateButton().click();
        } else {
            calculatorPage.getLoanPayOffCalcForm().getCalculateButton().click();
        }
        Driver.waitForJSToLoad();
        Driver.waitForAjaxToLoad();
        Driver.waitForJQueryToLoad();
    }

    @Then("^Calculation results form should appear$")
    public void calculationResultsFormShouldAppear() {
       /* // Write code here that turns the phrase above into concrete actions
        throw new PendingException();*/
    }

    @And("^I fill in INITIAL DEPOSIT with \"([^\"]*)\"$")
    public void iFillInINITIALDEPOSITWith(String arg0) {
        calculatorPage.getLoanPaymentCalcForm().getInitialDeposit().sendKeys(arg0);
    }

    @And("^I fill in EXTRA FEES with \"([^\"]*)\"$")
    public void iFillInEXTRAFEESWith(String arg0) {
        calculatorPage.getLoanPaymentCalcForm().getExtraFees().sendKeys(arg0);
    }

    @And("^I click on add to loan checkbox$")
    public void iClickOnAddToLoanCheckbox() {
        calculatorPage.getLoanPaymentCalcForm().getIncludeFees().select();
    }

    @And("^I fill in BALLOON PAYMENT AT END with \"([^\"]*)\"$")
    public void iFillInBALLOONPAYMENTATENDWith(String arg0) {
        calculatorPage.getLoanPaymentCalcForm().getBalloonPaymentAtTheEnd().sendKeys(arg0);
    }

    @And("^i fill LOAN START DATE with \"([^\"]*)\"$")
    public void iFillLOANSTARTDATEWith(String arg0) {
        calculatorPage.getLoanPaymentCalcForm().getStartDate().sendKeys(arg0);
    }

    @And("^calculation result info is:$")
    public void calculationResultInfoIs(DataTable calculationResultsInfo) {
        Map calculationResultInfoMap = calculationResultsInfo.asMap(String.class, String.class);
        calculationResultInfoMap.keySet().stream().forEach(
                key -> assertEquals(calculatorPage.getLoanPaymentCalcFormResultTable().getCalculationInfoResults().get(key)
                        , calculationResultInfoMap.get(key))
        );
    }

    @And("^calculation result is:$")
    public void calculationResultIs(DataTable calculationResults) {
        Map calculationResultsMap = calculationResults.asMap(String.class, String.class);
        calculationResultsMap.keySet().stream().forEach(
                key -> assertEquals(calculatorPage.getLoanPaymentCalcFormResultTable().getCalculationResults().get(key)
                        , calculationResultsMap.get(key))
        );
    }

    @And("^Loan Repayments by Month table should be visible$")
    public void loanRepaymentsByMonthTableShouldBeVisible() {
        assertTrue(Driver.checkElementVisibility(calculatorPage.getLoanPaymentCalcFormResultTable().getResultPaymentTable()));
    }

    @Then("^Calculation results form should should be visible$")
    public void calculationResultsFormShouldShouldBeVisible() {
        assertTrue(Driver.checkElementVisibility(calculatorPage.getLoanPaymentCalcFormResultTable().getWrappedElement()));
    }

    @And("^I click on GRAPHS OF RESULTS tab$")
    public void iClickOnGRAPHSOFRESULTSTAB() {
        if (Driver.getCurrentDriver().equalsIgnoreCase("chrome")) {
            Driver.performJsClick(context.getPageObjectManager().getCalculatorPage().getSwitchCalculatorsResultTab().getGraphOfResults());
        } else {
            context.getPageObjectManager().getCalculatorPage().getSwitchCalculatorsResultTab().getGraphOfResults().click();
        }
        Driver.waitForJSToLoad();
    }

    @Then("^Graph 1 - Loan Balance should be visible$")
    public void graphLoanBalanceShouldBeVisible() {
        assertTrue(Driver.checkElementVisibility(calculatorPage.getLoanPaymentGraphsOfResult().getLoanBalanceGraph()));
    }

    @And("^Graph 2 - Total interest and principal paid should be visible$")
    public void graphTotalInterestAndPrincipalPaidShouldBeVisible() {
        assertTrue(Driver.checkElementVisibility(calculatorPage.getLoanPaymentGraphsOfResult().getTotalIneterestAndPrincipalPaidGraph()));
    }

    @When("^I click on LOAN PAYOFF CALCULATOR tab$")
    public void iClickOnLOANPAYOFFCALCULATOROFRESULTSTab() {
        if (Driver.getCurrentDriver().equalsIgnoreCase("chrome")) {
            Driver.performJsClick(context.getPageObjectManager().getCalculatorPage().getSwitchCalculatorTab().getLoanPayOffCalc());
        } else {
            context.getPageObjectManager().getCalculatorPage().getSwitchCalculatorTab().getLoanPayOffCalc().click();
        }
        Driver.waitForJSToLoad();
    }

    @And("^I fill in  LOAN BALANCE with \"([^\"]*)\"$")
    public void iFillInLOANBALANCEWith(String arg0) {
        context.getPageObjectManager().getCalculatorPage().getLoanPayOffCalcForm().getLoanBalance().sendKeys(arg0);
    }

    @And("^I fill in AMOUNT YOU ARE PAYING with \"([^\"]*)\"$")
    public void iFillInAMOUNTYOUAREPAYINGWith(String arg0) {
        context.getPageObjectManager().getCalculatorPage().getLoanPayOffCalcForm().getPaymentAmount().sendKeys(arg0);
    }

    @And("^loan payoff calculation result is:$")
    public void loanPayoffCalculationResultIs(DataTable calculationResults) {
        Map calculationResultsMap = calculationResults.asMap(String.class, String.class);
        calculationResultsMap.keySet().stream().forEach(
                key -> assertEquals(calculatorPage.getLoanPayOffCalculatorResultTable().getCalculationResults().get(key)
                        , calculationResultsMap.get(key))
        );
    }

    @And("^Check that the Graph 2 is rendered correctly contains needed$")
    public void checkThatTheGraph2IsRenderedCorrectlyContainsNeeded() {
        //TODO implementation of validation
        throw new PendingException();
    }

    @And("^Check that the Graph 1 is rendered correctly contains needed$")
    public void checkThatTheGraph1IsRenderedCorrectlyContainsNeeded() {
        //TODO implementation of validation
        throw new PendingException();
    }

    @And("^Loan Repayments by Month table result is:$")
    public void loanRepaymentsByMonthTableResultIs(DataTable table) {
        //TODO implementation of validation
        throw new PendingException();
    }
}
