Feature: Loan Payoff Calculator
  Calculation of "Months to pay off depths"
  ,"total interest"
  ,"total to pay back"
  It Depends on parameters:
  1. loan balance
  2. annual interest rate
  3. amount you are paying


  Background:
    Given Refresh browser

  Scenario Outline: Calculation loan payoff (Dollar)
    Given  I navigate to home page

    When I click on LOAN PAYOFF CALCULATOR tab
    When I select CURRENCY  with "<currencyName>"
    And I fill in  LOAN BALANCE with "<loanBalance>"
    And I fill in  ANNUAL INTEREST RATE with "<annualInterestRate>"
    And I fill in AMOUNT YOU ARE PAYING with "<amountOfPaying>"
    And I click  on Calculate button

    Then  Calculation results form should should be visible
    And loan payoff calculation result is:
      | Months to pay off debt:      | 23           |
      | Total interest you will pay: | dollar12.13  |
      | Total to pay back:           | dollar112.13 |

    Examples:
      | currencyName | loanBalance | annualInterestRate | amountOfPaying |
      | Dollar       | 100         | 12                 | 5              |

  Scenario Outline: Calculation loan payoff (Euro)
    Given  I navigate to home page

    When I click on LOAN PAYOFF CALCULATOR tab
    When I select CURRENCY  with "<currencyName>"
    And I fill in  LOAN BALANCE with "<loanBalance>"
    And I fill in  ANNUAL INTEREST RATE with "<annualInterestRate>"
    And I fill in AMOUNT YOU ARE PAYING with "<amountOfPaying>"
    And I click  on Calculate button

    Then  Calculation results form should should be visible
    And loan payoff calculation result is:
      | Months to pay off debt:      | 23         |
      | Total interest you will pay: | euro12.13  |
      | Total to pay back:           | euro112.13 |

    Examples:
      | currencyName | loanBalance | annualInterestRate | amountOfPaying |
      | Euro         | 100         | 12                 | 5              |

  Scenario Outline: Calculation loan payoff(if calculation result should contain, "$,€,£" instead of "dollar, pound, euro")
    Given  I navigate to home page

    When I click on LOAN PAYOFF CALCULATOR tab
    When I select CURRENCY  with "<currencyName>"
    And I fill in  LOAN BALANCE with "<loanBalance>"
    And I fill in  ANNUAL INTEREST RATE with "<annualInterestRate>"
    And I fill in AMOUNT YOU ARE PAYING with "<amountOfPaying>"
    And I click  on Calculate button

    Then  Calculation results form should should be visible
    And loan payoff calculation result is:
      | Months to pay off debt:      | 23      |
      | Total interest you will pay: | $12.13  |
      | Total to pay back:           | $112.13 |

    Examples:
      | currencyName | loanBalance | annualInterestRate | amountOfPaying |
      | Dollar       | 100         | 12                 | 5              |