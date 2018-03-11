Feature: Loan Payment Calculator
  As a example I use simple
  calculation depends on: currency, loan amount
  , annual interest rate, number of months
  ,initial deposit, extra fees, balloon payment at the end
  ,loan start date

  Background:
    Given Refresh browser

  Scenario Outline: Regular calculation of loan payments by month
    Given  I navigate to home page

    When I select CURRENCY  with "<currencyName>"
    And I fill in  LOAN AMOUNT with "<loanAmount>"
    And I fill in  ANNUAL INTEREST RATE with "<annualInterestRate>"
    And I fill in MONTHS with "<numberOfMonths>"
    And I click  on Calculate button

    Then  Calculation results form should should be visible
    And calculation result is:
      | Loan payments:                        | $101.00 |
      | Total payable:                        | $101.00 |
      | <numberOfMonths> monthly payments of: | $101.00 |
      | Total interest:                       | $1.00   |
    And calculation result info is:
      | Loan amount:           | $100.00 |
      | Interest Rate:         | 12%     |
      | Effective Annual Rate: | 12.68%  |
      | APR (?):               | 12.68%  |
    And Loan Repayments by Month table should be visible
    And Loan Repayments by Month table result is:
      | month | Start Balance | Principal | Interest | Payment |

    Examples:
      | currencyName | loanAmount | annualInterestRate | numberOfMonths |
      | Dollar       | 100        | 12                 | 1              |

  Scenario Outline: Regular calculation of loan payments by month with other different parameters (Initial Deposit and Extra Fees)
    Given  I navigate to home page

    When I select CURRENCY  with "<currencyName>"
    And I fill in  LOAN AMOUNT with "<loanAmount>"
    And I fill in  ANNUAL INTEREST RATE with "<annualInterestRate>"
    And I fill in MONTHS with "<numberOfMonths>"
    And I fill in INITIAL DEPOSIT with "<initialDeposit>"
    And I fill in EXTRA FEES with "<extraFees>"
    And I click on add to loan checkbox
    And I click  on Calculate button

    Then  Calculation results form should should be visible
    And calculation result is:
      | Initial deposit:                      | $10.00  |
      | Loan payments:                        | $111.10 |
      | Including fees:                       | $20.00  |
      | Total payable:                        | $121.10 |
      | <numberOfMonths> monthly payments of: | $111.10 |
      | Total interest:                       | $1.10   |
    And calculation result info is:
      | Loan amount:           | $100.00 |
      | Interest Rate:         | 12%     |
      | Effective Annual Rate: | 12.68%  |
  #      | APR (?):               | 1,125.37% |
    And Loan Repayments by Month table should be visible
    And Loan Repayments by Month table result is:
      | month | Start Balance | Principal | Interest | Payment |

    Examples:
      | currencyName | loanAmount | annualInterestRate | numberOfMonths | initialDeposit | extraFees |
      | Dollar       | 100        | 12                 | 1              | 10             | 20        |

  Scenario Outline: Regular calculation of loan payments by month with other different parameters (all parameters )
    Given  I navigate to home page

    When I select CURRENCY  with "<currencyName>"
    And I fill in  LOAN AMOUNT with "<loanAmount>"
    And I fill in  ANNUAL INTEREST RATE with "<annualInterestRate>"
    And I fill in MONTHS with "<numberOfMonths>"
    And I fill in INITIAL DEPOSIT with "<initialDeposit>"
    And I fill in EXTRA FEES with "<extraFees>"
    And I click on add to loan checkbox
    And I fill in BALLOON PAYMENT AT END with "<balloonPayment>"
    And i fill LOAN START DATE with "<loanStartDate>"
    And I click  on Calculate button

    Then  Calculation results form should should be visible
    And calculation result is:
      | Initial deposit:                      | $10.00  |
      | Loan payments:                        | $101.10 |
      | Including fees:                       | $20.00  |
      | Balloon payment at end:               | $10.00  |
      | Total payable:                        | $121.10 |
      | <numberOfMonths> monthly payments of: | $101.10 |
      | Total interest:                       | $1.10   |
    And calculation result info is:
      | Loan amount:           | $100.00 |
      | Interest Rate:         | 12%     |
      | Effective Annual Rate: | 12.68%  |
#      | APR (?):               | 1,125.37% |
    And Loan Repayments by Month table should be visible
    And Loan Repayments by Month table result is:
      | month | Start Balance | Principal | Interest | Payment |

    Examples:
      | currencyName | loanAmount | annualInterestRate | numberOfMonths | initialDeposit | extraFees | balloonPayment | loanStartDate |
      | Dollar       | 100        | 12                 | 1              | 10             | 20        | 10             | 12.09.2018    |