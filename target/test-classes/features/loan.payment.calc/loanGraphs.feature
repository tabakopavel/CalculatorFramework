Feature: Loan Payment Calculator Graphs
  As a example I use simple
  calculation depends on:currency, loan amount
  , annual interest rate, number of months

  Background:
    Given Refresh browser

  Scenario Outline: Regular calculation of loan payments by month
    Given  I navigate to home page

    When I select CURRENCY  with "<currencyName>"
    And I fill in  LOAN AMOUNT with "<loanAmount>"
    And I fill in  ANNUAL INTEREST RATE with "<annualInterestRate>"
    And I fill in MONTHS with "<numberOfMonths>"
    And I click  on Calculate button
    And I click on GRAPHS OF RESULTS tab

    Then  Graph 1 - Loan Balance should be visible
    And Graph 2 - Total interest and principal paid should be visible
    And Check that the Graph 1 is rendered correctly contains needed
    And Check that the Graph 2 is rendered correctly contains needed


    Examples:
      | currencyName | loanAmount | annualInterestRate | numberOfMonths |
      | Dollar       | 100        | 12                 | 1              |