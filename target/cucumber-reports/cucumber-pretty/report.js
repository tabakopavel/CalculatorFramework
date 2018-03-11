$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loan.payment.calc/loanGraphs.feature");
formatter.feature({
  "line": 1,
  "name": "Loan Payment Calculator Graphs",
  "description": "As a example I use simple\r\ncalculation depends on:currency, loan amount\r\n, annual interest rate, number of months",
  "id": "loan-payment-calculator-graphs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Regular calculation of loan payments by month",
  "description": "",
  "id": "loan-payment-calculator-graphs;regular-calculation-of-loan-payments-by-month",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I select CURRENCY  with \"\u003ccurrencyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I fill in  LOAN AMOUNT with \"\u003cloanAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I fill in  ANNUAL INTEREST RATE with \"\u003cannualInterestRate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I fill in MONTHS with \"\u003cnumberOfMonths\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on GRAPHS OF RESULTS tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Graph 1 - Loan Balance should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Graph 2 - Total interest and principal paid should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Check that the Graph 1 is rendered correctly contains needed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check that the Graph 2 is rendered correctly contains needed",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "loan-payment-calculator-graphs;regular-calculation-of-loan-payments-by-month;",
  "rows": [
    {
      "cells": [
        "currencyName",
        "loanAmount",
        "annualInterestRate",
        "numberOfMonths"
      ],
      "line": 26,
      "id": "loan-payment-calculator-graphs;regular-calculation-of-loan-payments-by-month;;1"
    },
    {
      "cells": [
        "Dollar",
        "100",
        "12",
        "1"
      ],
      "line": 27,
      "id": "loan-payment-calculator-graphs;regular-calculation-of-loan-payments-by-month;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Refresh browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BackGroundSteps.refreshBrowser()"
});
formatter.result({
  "duration": 285327686,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Regular calculation of loan payments by month",
  "description": "",
  "id": "loan-payment-calculator-graphs;regular-calculation-of-loan-payments-by-month;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I select CURRENCY  with \"Dollar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I fill in  LOAN AMOUNT with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I fill in  ANNUAL INTEREST RATE with \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I fill in MONTHS with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on GRAPHS OF RESULTS tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Graph 1 - Loan Balance should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Graph 2 - Total interest and principal paid should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Check that the Graph 1 is rendered correctly contains needed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check that the Graph 2 is rendered correctly contains needed",
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorPageSteps.iNavigateToHomePage()"
});
formatter.result({
  "duration": 2680611341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 25
    }
  ],
  "location": "CalculatorPageSteps.iSelectCURRENCYWith(String)"
});
formatter.result({
  "duration": 73175967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "CalculatorPageSteps.iFillInLOANAMOUNTWith(String)"
});
formatter.result({
  "duration": 26615081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInANNUALINTERESTRATEWith(String)"
});
formatter.result({
  "duration": 51631588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "CalculatorPageSteps.iFillInMONTHSWith(String)"
});
formatter.result({
  "duration": 31465110,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnCalculateButton()"
});
formatter.result({
  "duration": 124964504,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnGRAPHSOFRESULTSTAB()"
});
formatter.result({
  "duration": 1292099596,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.graphLoanBalanceShouldBeVisible()"
});
formatter.result({
  "duration": 104357971,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.graphTotalInterestAndPrincipalPaidShouldBeVisible()"
});
formatter.result({
  "duration": 26620639,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.checkThatTheGraph1IsRenderedCorrectlyContainsNeeded()"
});
formatter.result({
  "duration": 1271417,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.thecalculatorsite.stepdefs.CalculatorPageSteps.checkThatTheGraph1IsRenderedCorrectlyContainsNeeded(CalculatorPageSteps.java:193)\r\n\tat ✽.And Check that the Graph 1 is rendered correctly contains needed(loan.payment.calc/loanGraphs.feature:21)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "CalculatorPageSteps.checkThatTheGraph2IsRenderedCorrectlyContainsNeeded()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("loan.payment.calc/loanPaymentCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "Loan Payment Calculator",
  "description": "As a example I use simple\ncalculation depends on: currency, loan amount\n, annual interest rate, number of months\n,initial deposit, extra fees, balloon payment at the end\n,loan start date",
  "id": "loan-payment-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Regular calculation of loan payments by month",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select CURRENCY  with \"\u003ccurrencyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I fill in  LOAN AMOUNT with \"\u003cloanAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I fill in  ANNUAL INTEREST RATE with \"\u003cannualInterestRate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I fill in MONTHS with \"\u003cnumberOfMonths\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "calculation result is:",
  "rows": [
    {
      "cells": [
        "Loan payments:",
        "$101.00"
      ],
      "line": 22
    },
    {
      "cells": [
        "Total payable:",
        "$101.00"
      ],
      "line": 23
    },
    {
      "cells": [
        "\u003cnumberOfMonths\u003e monthly payments of:",
        "$101.00"
      ],
      "line": 24
    },
    {
      "cells": [
        "Total interest:",
        "$1.00"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "calculation result info is:",
  "rows": [
    {
      "cells": [
        "Loan amount:",
        "$100.00"
      ],
      "line": 27
    },
    {
      "cells": [
        "Interest Rate:",
        "12%"
      ],
      "line": 28
    },
    {
      "cells": [
        "Effective Annual Rate:",
        "12.68%"
      ],
      "line": 29
    },
    {
      "cells": [
        "APR (?):",
        "12.68%"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Loan Repayments by Month table should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Loan Repayments by Month table result is:",
  "rows": [
    {
      "cells": [
        "month",
        "Start Balance",
        "Principal",
        "Interest",
        "Payment"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month;",
  "rows": [
    {
      "cells": [
        "currencyName",
        "loanAmount",
        "annualInterestRate",
        "numberOfMonths"
      ],
      "line": 36,
      "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month;;1"
    },
    {
      "cells": [
        "Dollar",
        "100",
        "12",
        "1"
      ],
      "line": 37,
      "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "Refresh browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BackGroundSteps.refreshBrowser()"
});
formatter.result({
  "duration": 26915294,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Regular calculation of loan payments by month",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select CURRENCY  with \"Dollar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I fill in  LOAN AMOUNT with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I fill in  ANNUAL INTEREST RATE with \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I fill in MONTHS with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "calculation result is:",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "Loan payments:",
        "$101.00"
      ],
      "line": 22
    },
    {
      "cells": [
        "Total payable:",
        "$101.00"
      ],
      "line": 23
    },
    {
      "cells": [
        "1 monthly payments of:",
        "$101.00"
      ],
      "line": 24
    },
    {
      "cells": [
        "Total interest:",
        "$1.00"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "calculation result info is:",
  "rows": [
    {
      "cells": [
        "Loan amount:",
        "$100.00"
      ],
      "line": 27
    },
    {
      "cells": [
        "Interest Rate:",
        "12%"
      ],
      "line": 28
    },
    {
      "cells": [
        "Effective Annual Rate:",
        "12.68%"
      ],
      "line": 29
    },
    {
      "cells": [
        "APR (?):",
        "12.68%"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Loan Repayments by Month table should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Loan Repayments by Month table result is:",
  "rows": [
    {
      "cells": [
        "month",
        "Start Balance",
        "Principal",
        "Interest",
        "Payment"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorPageSteps.iNavigateToHomePage()"
});
formatter.result({
  "duration": 2937842124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 25
    }
  ],
  "location": "CalculatorPageSteps.iSelectCURRENCYWith(String)"
});
formatter.result({
  "duration": 87920641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "CalculatorPageSteps.iFillInLOANAMOUNTWith(String)"
});
formatter.result({
  "duration": 29840450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInANNUALINTERESTRATEWith(String)"
});
formatter.result({
  "duration": 60153032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "CalculatorPageSteps.iFillInMONTHSWith(String)"
});
formatter.result({
  "duration": 33568743,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnCalculateButton()"
});
formatter.result({
  "duration": 130308476,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultsFormShouldShouldBeVisible()"
});
formatter.result({
  "duration": 1192111826,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultIs(DataTable)"
});
formatter.result({
  "duration": 166336660,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultInfoIs(DataTable)"
});
formatter.result({
  "duration": 56268646,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanRepaymentsByMonthTableShouldBeVisible()"
});
formatter.result({
  "duration": 40811072,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanRepaymentsByMonthTableResultIs(DataTable)"
});
formatter.result({
  "duration": 295937,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.thecalculatorsite.stepdefs.CalculatorPageSteps.loanRepaymentsByMonthTableResultIs(CalculatorPageSteps.java:199)\r\n\tat ✽.And Loan Repayments by Month table result is:(loan.payment.calc/loanPaymentCalculator.feature:32)\r\n",
  "status": "pending"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Regular calculation of loan payments by month with other different parameters (Initial Deposit and Extra Fees)",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(initial-deposit-and-extra-fees)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I select CURRENCY  with \"\u003ccurrencyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I fill in  LOAN AMOUNT with \"\u003cloanAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I fill in  ANNUAL INTEREST RATE with \"\u003cannualInterestRate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I fill in MONTHS with \"\u003cnumberOfMonths\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I fill in INITIAL DEPOSIT with \"\u003cinitialDeposit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I fill in EXTRA FEES with \"\u003cextraFees\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on add to loan checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "calculation result is:",
  "rows": [
    {
      "cells": [
        "Initial deposit:",
        "$10.00"
      ],
      "line": 53
    },
    {
      "cells": [
        "Loan payments:",
        "$111.10"
      ],
      "line": 54
    },
    {
      "cells": [
        "Including fees:",
        "$20.00"
      ],
      "line": 55
    },
    {
      "cells": [
        "Total payable:",
        "$121.10"
      ],
      "line": 56
    },
    {
      "cells": [
        "\u003cnumberOfMonths\u003e monthly payments of:",
        "$111.10"
      ],
      "line": 57
    },
    {
      "cells": [
        "Total interest:",
        "$1.10"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "calculation result info is:",
  "rows": [
    {
      "cells": [
        "Loan amount:",
        "$100.00"
      ],
      "line": 60
    },
    {
      "cells": [
        "Interest Rate:",
        "12%"
      ],
      "line": 61
    },
    {
      "cells": [
        "Effective Annual Rate:",
        "12.68%"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#      | APR (?):               | 1,125.37% |"
    }
  ],
  "line": 64,
  "name": "Loan Repayments by Month table should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Loan Repayments by Month table result is:",
  "rows": [
    {
      "cells": [
        "month",
        "Start Balance",
        "Principal",
        "Interest",
        "Payment"
      ],
      "line": 66
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(initial-deposit-and-extra-fees);",
  "rows": [
    {
      "cells": [
        "currencyName",
        "loanAmount",
        "annualInterestRate",
        "numberOfMonths",
        "initialDeposit",
        "extraFees"
      ],
      "line": 69,
      "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(initial-deposit-and-extra-fees);;1"
    },
    {
      "cells": [
        "Dollar",
        "100",
        "12",
        "1",
        "10",
        "20"
      ],
      "line": 70,
      "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(initial-deposit-and-extra-fees);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "Refresh browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BackGroundSteps.refreshBrowser()"
});
formatter.result({
  "duration": 327184374,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Regular calculation of loan payments by month with other different parameters (Initial Deposit and Extra Fees)",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(initial-deposit-and-extra-fees);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I select CURRENCY  with \"Dollar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I fill in  LOAN AMOUNT with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I fill in  ANNUAL INTEREST RATE with \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I fill in MONTHS with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I fill in INITIAL DEPOSIT with \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I fill in EXTRA FEES with \"20\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on add to loan checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "calculation result is:",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "Initial deposit:",
        "$10.00"
      ],
      "line": 53
    },
    {
      "cells": [
        "Loan payments:",
        "$111.10"
      ],
      "line": 54
    },
    {
      "cells": [
        "Including fees:",
        "$20.00"
      ],
      "line": 55
    },
    {
      "cells": [
        "Total payable:",
        "$121.10"
      ],
      "line": 56
    },
    {
      "cells": [
        "1 monthly payments of:",
        "$111.10"
      ],
      "line": 57
    },
    {
      "cells": [
        "Total interest:",
        "$1.10"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "calculation result info is:",
  "rows": [
    {
      "cells": [
        "Loan amount:",
        "$100.00"
      ],
      "line": 60
    },
    {
      "cells": [
        "Interest Rate:",
        "12%"
      ],
      "line": 61
    },
    {
      "cells": [
        "Effective Annual Rate:",
        "12.68%"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#      | APR (?):               | 1,125.37% |"
    }
  ],
  "line": 64,
  "name": "Loan Repayments by Month table should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Loan Repayments by Month table result is:",
  "rows": [
    {
      "cells": [
        "month",
        "Start Balance",
        "Principal",
        "Interest",
        "Payment"
      ],
      "line": 66
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorPageSteps.iNavigateToHomePage()"
});
formatter.result({
  "duration": 1999123308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 25
    }
  ],
  "location": "CalculatorPageSteps.iSelectCURRENCYWith(String)"
});
formatter.result({
  "duration": 83908386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "CalculatorPageSteps.iFillInLOANAMOUNTWith(String)"
});
formatter.result({
  "duration": 24992132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInANNUALINTERESTRATEWith(String)"
});
formatter.result({
  "duration": 41593680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "CalculatorPageSteps.iFillInMONTHSWith(String)"
});
formatter.result({
  "duration": 38887055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 32
    }
  ],
  "location": "CalculatorPageSteps.iFillInINITIALDEPOSITWith(String)"
});
formatter.result({
  "duration": 38510719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "CalculatorPageSteps.iFillInEXTRAFEESWith(String)"
});
formatter.result({
  "duration": 51429735,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnAddToLoanCheckbox()"
});
formatter.result({
  "duration": 79316232,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnCalculateButton()"
});
formatter.result({
  "duration": 78291999,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultsFormShouldShouldBeVisible()"
});
formatter.result({
  "duration": 1177231159,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultIs(DataTable)"
});
formatter.result({
  "duration": 191420309,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultInfoIs(DataTable)"
});
formatter.result({
  "duration": 47056112,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanRepaymentsByMonthTableShouldBeVisible()"
});
formatter.result({
  "duration": 31146508,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanRepaymentsByMonthTableResultIs(DataTable)"
});
formatter.result({
  "duration": 271561,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.thecalculatorsite.stepdefs.CalculatorPageSteps.loanRepaymentsByMonthTableResultIs(CalculatorPageSteps.java:199)\r\n\tat ✽.And Loan Repayments by Month table result is:(loan.payment.calc/loanPaymentCalculator.feature:65)\r\n",
  "status": "pending"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Regular calculation of loan payments by month with other different parameters (all parameters )",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(all-parameters-)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I select CURRENCY  with \"\u003ccurrencyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I fill in  LOAN AMOUNT with \"\u003cloanAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I fill in  ANNUAL INTEREST RATE with \"\u003cannualInterestRate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I fill in MONTHS with \"\u003cnumberOfMonths\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I fill in INITIAL DEPOSIT with \"\u003cinitialDeposit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I fill in EXTRA FEES with \"\u003cextraFees\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click on add to loan checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I fill in BALLOON PAYMENT AT END with \"\u003cballoonPayment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "i fill LOAN START DATE with \"\u003cloanStartDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "calculation result is:",
  "rows": [
    {
      "cells": [
        "Initial deposit:",
        "$10.00"
      ],
      "line": 88
    },
    {
      "cells": [
        "Loan payments:",
        "$101.10"
      ],
      "line": 89
    },
    {
      "cells": [
        "Including fees:",
        "$20.00"
      ],
      "line": 90
    },
    {
      "cells": [
        "Balloon payment at end:",
        "$10.00"
      ],
      "line": 91
    },
    {
      "cells": [
        "Total payable:",
        "$121.10"
      ],
      "line": 92
    },
    {
      "cells": [
        "\u003cnumberOfMonths\u003e monthly payments of:",
        "$101.10"
      ],
      "line": 93
    },
    {
      "cells": [
        "Total interest:",
        "$1.10"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "calculation result info is:",
  "rows": [
    {
      "cells": [
        "Loan amount:",
        "$100.00"
      ],
      "line": 96
    },
    {
      "cells": [
        "Interest Rate:",
        "12%"
      ],
      "line": 97
    },
    {
      "cells": [
        "Effective Annual Rate:",
        "12.68%"
      ],
      "line": 98
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 99,
      "value": "#      | APR (?):               | 1,125.37% |"
    }
  ],
  "line": 100,
  "name": "Loan Repayments by Month table should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Loan Repayments by Month table result is:",
  "rows": [
    {
      "cells": [
        "month",
        "Start Balance",
        "Principal",
        "Interest",
        "Payment"
      ],
      "line": 102
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 104,
  "name": "",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(all-parameters-);",
  "rows": [
    {
      "cells": [
        "currencyName",
        "loanAmount",
        "annualInterestRate",
        "numberOfMonths",
        "initialDeposit",
        "extraFees",
        "balloonPayment",
        "loanStartDate"
      ],
      "line": 105,
      "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(all-parameters-);;1"
    },
    {
      "cells": [
        "Dollar",
        "100",
        "12",
        "1",
        "10",
        "20",
        "10",
        "12.09.2018"
      ],
      "line": 106,
      "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(all-parameters-);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "Refresh browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BackGroundSteps.refreshBrowser()"
});
formatter.result({
  "duration": 148607813,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Regular calculation of loan payments by month with other different parameters (all parameters )",
  "description": "",
  "id": "loan-payment-calculator;regular-calculation-of-loan-payments-by-month-with-other-different-parameters-(all-parameters-);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I select CURRENCY  with \"Dollar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I fill in  LOAN AMOUNT with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I fill in  ANNUAL INTEREST RATE with \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I fill in MONTHS with \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I fill in INITIAL DEPOSIT with \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I fill in EXTRA FEES with \"20\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click on add to loan checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I fill in BALLOON PAYMENT AT END with \"10\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "i fill LOAN START DATE with \"12.09.2018\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "calculation result is:",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "Initial deposit:",
        "$10.00"
      ],
      "line": 88
    },
    {
      "cells": [
        "Loan payments:",
        "$101.10"
      ],
      "line": 89
    },
    {
      "cells": [
        "Including fees:",
        "$20.00"
      ],
      "line": 90
    },
    {
      "cells": [
        "Balloon payment at end:",
        "$10.00"
      ],
      "line": 91
    },
    {
      "cells": [
        "Total payable:",
        "$121.10"
      ],
      "line": 92
    },
    {
      "cells": [
        "1 monthly payments of:",
        "$101.10"
      ],
      "line": 93
    },
    {
      "cells": [
        "Total interest:",
        "$1.10"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "calculation result info is:",
  "rows": [
    {
      "cells": [
        "Loan amount:",
        "$100.00"
      ],
      "line": 96
    },
    {
      "cells": [
        "Interest Rate:",
        "12%"
      ],
      "line": 97
    },
    {
      "cells": [
        "Effective Annual Rate:",
        "12.68%"
      ],
      "line": 98
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 99,
      "value": "#      | APR (?):               | 1,125.37% |"
    }
  ],
  "line": 100,
  "name": "Loan Repayments by Month table should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Loan Repayments by Month table result is:",
  "rows": [
    {
      "cells": [
        "month",
        "Start Balance",
        "Principal",
        "Interest",
        "Payment"
      ],
      "line": 102
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorPageSteps.iNavigateToHomePage()"
});
formatter.result({
  "duration": 5431353749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 25
    }
  ],
  "location": "CalculatorPageSteps.iSelectCURRENCYWith(String)"
});
formatter.result({
  "duration": 43227748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "CalculatorPageSteps.iFillInLOANAMOUNTWith(String)"
});
formatter.result({
  "duration": 34115286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInANNUALINTERESTRATEWith(String)"
});
formatter.result({
  "duration": 72601200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "CalculatorPageSteps.iFillInMONTHSWith(String)"
});
formatter.result({
  "duration": 89776234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 32
    }
  ],
  "location": "CalculatorPageSteps.iFillInINITIALDEPOSITWith(String)"
});
formatter.result({
  "duration": 66717957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "CalculatorPageSteps.iFillInEXTRAFEESWith(String)"
});
formatter.result({
  "duration": 65741194,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnAddToLoanCheckbox()"
});
formatter.result({
  "duration": 50807070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "CalculatorPageSteps.iFillInBALLOONPAYMENTATENDWith(String)"
});
formatter.result({
  "duration": 50356322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.09.2018",
      "offset": 29
    }
  ],
  "location": "CalculatorPageSteps.iFillLOANSTARTDATEWith(String)"
});
formatter.result({
  "duration": 328064914,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnCalculateButton()"
});
formatter.result({
  "duration": 106183200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultsFormShouldShouldBeVisible()"
});
formatter.result({
  "duration": 1012273257,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultIs(DataTable)"
});
formatter.result({
  "duration": 64811045,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultInfoIs(DataTable)"
});
formatter.result({
  "duration": 37092188,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanRepaymentsByMonthTableShouldBeVisible()"
});
formatter.result({
  "duration": 47008643,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanRepaymentsByMonthTableResultIs(DataTable)"
});
formatter.result({
  "duration": 292516,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.thecalculatorsite.stepdefs.CalculatorPageSteps.loanRepaymentsByMonthTableResultIs(CalculatorPageSteps.java:199)\r\n\tat ✽.And Loan Repayments by Month table result is:(loan.payment.calc/loanPaymentCalculator.feature:101)\r\n",
  "status": "pending"
});
formatter.uri("loan.payoff.calc/loanPayoffCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "Loan Payoff Calculator",
  "description": "Calculation of \"Months to pay off depths\"\r\n,\"total interest\"\r\n,\"total to pay back\"\r\nIt Depends on parameters:\r\n1. loan balance\r\n2. annual interest rate\r\n3. amount you are paying",
  "id": "loan-payoff-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Calculation loan payoff (Dollar)",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff-(dollar)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on LOAN PAYOFF CALCULATOR tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select CURRENCY  with \"\u003ccurrencyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I fill in  LOAN BALANCE with \"\u003cloanBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I fill in  ANNUAL INTEREST RATE with \"\u003cannualInterestRate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill in AMOUNT YOU ARE PAYING with \"\u003camountOfPaying\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "loan payoff calculation result is:",
  "rows": [
    {
      "cells": [
        "Months to pay off debt:",
        "23"
      ],
      "line": 26
    },
    {
      "cells": [
        "Total interest you will pay:",
        "dollar12.13"
      ],
      "line": 27
    },
    {
      "cells": [
        "Total to pay back:",
        "dollar112.13"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff-(dollar);",
  "rows": [
    {
      "cells": [
        "currencyName",
        "loanBalance",
        "annualInterestRate",
        "amountOfPaying"
      ],
      "line": 31,
      "id": "loan-payoff-calculator;calculation-loan-payoff-(dollar);;1"
    },
    {
      "cells": [
        "Dollar",
        "100",
        "12",
        "5"
      ],
      "line": 32,
      "id": "loan-payoff-calculator;calculation-loan-payoff-(dollar);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "Refresh browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BackGroundSteps.refreshBrowser()"
});
formatter.result({
  "duration": 41246852,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Calculation loan payoff (Dollar)",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff-(dollar);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on LOAN PAYOFF CALCULATOR tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select CURRENCY  with \"Dollar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I fill in  LOAN BALANCE with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I fill in  ANNUAL INTEREST RATE with \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill in AMOUNT YOU ARE PAYING with \"5\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "loan payoff calculation result is:",
  "rows": [
    {
      "cells": [
        "Months to pay off debt:",
        "23"
      ],
      "line": 26
    },
    {
      "cells": [
        "Total interest you will pay:",
        "dollar12.13"
      ],
      "line": 27
    },
    {
      "cells": [
        "Total to pay back:",
        "dollar112.13"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorPageSteps.iNavigateToHomePage()"
});
formatter.result({
  "duration": 2906155488,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnLOANPAYOFFCALCULATOROFRESULTSTab()"
});
formatter.result({
  "duration": 42244143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 25
    }
  ],
  "location": "CalculatorPageSteps.iSelectCURRENCYWith(String)"
});
formatter.result({
  "duration": 71142471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "CalculatorPageSteps.iFillInLOANBALANCEWith(String)"
});
formatter.result({
  "duration": 27805243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInANNUALINTERESTRATEWith(String)"
});
formatter.result({
  "duration": 60340344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInAMOUNTYOUAREPAYINGWith(String)"
});
formatter.result({
  "duration": 42493893,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnCalculateButton()"
});
formatter.result({
  "duration": 102873582,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultsFormShouldShouldBeVisible()"
});
formatter.result({
  "duration": 29640308,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanPayoffCalculationResultIs(DataTable)"
});
formatter.result({
  "duration": 31489058,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Calculation loan payoff (Euro)",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff-(euro)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on LOAN PAYOFF CALCULATOR tab",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I select CURRENCY  with \"\u003ccurrencyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I fill in  LOAN BALANCE with \"\u003cloanBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I fill in  ANNUAL INTEREST RATE with \"\u003cannualInterestRate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I fill in AMOUNT YOU ARE PAYING with \"\u003camountOfPaying\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "loan payoff calculation result is:",
  "rows": [
    {
      "cells": [
        "Months to pay off debt:",
        "23"
      ],
      "line": 46
    },
    {
      "cells": [
        "Total interest you will pay:",
        "euro12.13"
      ],
      "line": 47
    },
    {
      "cells": [
        "Total to pay back:",
        "euro112.13"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff-(euro);",
  "rows": [
    {
      "cells": [
        "currencyName",
        "loanBalance",
        "annualInterestRate",
        "amountOfPaying"
      ],
      "line": 51,
      "id": "loan-payoff-calculator;calculation-loan-payoff-(euro);;1"
    },
    {
      "cells": [
        "Euro",
        "100",
        "12",
        "5"
      ],
      "line": 52,
      "id": "loan-payoff-calculator;calculation-loan-payoff-(euro);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "Refresh browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BackGroundSteps.refreshBrowser()"
});
formatter.result({
  "duration": 97112648,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Calculation loan payoff (Euro)",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff-(euro);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on LOAN PAYOFF CALCULATOR tab",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I select CURRENCY  with \"Euro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I fill in  LOAN BALANCE with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I fill in  ANNUAL INTEREST RATE with \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I fill in AMOUNT YOU ARE PAYING with \"5\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "loan payoff calculation result is:",
  "rows": [
    {
      "cells": [
        "Months to pay off debt:",
        "23"
      ],
      "line": 46
    },
    {
      "cells": [
        "Total interest you will pay:",
        "euro12.13"
      ],
      "line": 47
    },
    {
      "cells": [
        "Total to pay back:",
        "euro112.13"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorPageSteps.iNavigateToHomePage()"
});
formatter.result({
  "duration": 2652215080,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnLOANPAYOFFCALCULATOROFRESULTSTab()"
});
formatter.result({
  "duration": 65133496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 25
    }
  ],
  "location": "CalculatorPageSteps.iSelectCURRENCYWith(String)"
});
formatter.result({
  "duration": 103086126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "CalculatorPageSteps.iFillInLOANBALANCEWith(String)"
});
formatter.result({
  "duration": 77222863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInANNUALINTERESTRATEWith(String)"
});
formatter.result({
  "duration": 66845825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInAMOUNTYOUAREPAYINGWith(String)"
});
formatter.result({
  "duration": 155875375,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnCalculateButton()"
});
formatter.result({
  "duration": 243440635,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultsFormShouldShouldBeVisible()"
});
formatter.result({
  "duration": 66256945,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanPayoffCalculationResultIs(DataTable)"
});
formatter.result({
  "duration": 38692900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Calculation loan payoff(if calculation result should contain, \"$,€,£\" instead of \"dollar, pound, euro\")",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff(if-calculation-result-should-contain,-\"$,€,£\"-instead-of-\"dollar,-pound,-euro\")",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I click on LOAN PAYOFF CALCULATOR tab",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I select CURRENCY  with \"\u003ccurrencyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I fill in  LOAN BALANCE with \"\u003cloanBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I fill in  ANNUAL INTEREST RATE with \"\u003cannualInterestRate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I fill in AMOUNT YOU ARE PAYING with \"\u003camountOfPaying\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "loan payoff calculation result is:",
  "rows": [
    {
      "cells": [
        "Months to pay off debt:",
        "23"
      ],
      "line": 66
    },
    {
      "cells": [
        "Total interest you will pay:",
        "$12.13"
      ],
      "line": 67
    },
    {
      "cells": [
        "Total to pay back:",
        "$112.13"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff(if-calculation-result-should-contain,-\"$,€,£\"-instead-of-\"dollar,-pound,-euro\");",
  "rows": [
    {
      "cells": [
        "currencyName",
        "loanBalance",
        "annualInterestRate",
        "amountOfPaying"
      ],
      "line": 71,
      "id": "loan-payoff-calculator;calculation-loan-payoff(if-calculation-result-should-contain,-\"$,€,£\"-instead-of-\"dollar,-pound,-euro\");;1"
    },
    {
      "cells": [
        "Dollar",
        "100",
        "12",
        "5"
      ],
      "line": 72,
      "id": "loan-payoff-calculator;calculation-loan-payoff(if-calculation-result-should-contain,-\"$,€,£\"-instead-of-\"dollar,-pound,-euro\");;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 12,
  "name": "Refresh browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BackGroundSteps.refreshBrowser()"
});
formatter.result({
  "duration": 132833348,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Calculation loan payoff(if calculation result should contain, \"$,€,£\" instead of \"dollar, pound, euro\")",
  "description": "",
  "id": "loan-payoff-calculator;calculation-loan-payoff(if-calculation-result-should-contain,-\"$,€,£\"-instead-of-\"dollar,-pound,-euro\");;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I click on LOAN PAYOFF CALCULATOR tab",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I select CURRENCY  with \"Dollar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I fill in  LOAN BALANCE with \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I fill in  ANNUAL INTEREST RATE with \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I fill in AMOUNT YOU ARE PAYING with \"5\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click  on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Calculation results form should should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "loan payoff calculation result is:",
  "rows": [
    {
      "cells": [
        "Months to pay off debt:",
        "23"
      ],
      "line": 66
    },
    {
      "cells": [
        "Total interest you will pay:",
        "$12.13"
      ],
      "line": 67
    },
    {
      "cells": [
        "Total to pay back:",
        "$112.13"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorPageSteps.iNavigateToHomePage()"
});
formatter.result({
  "duration": 2947955726,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnLOANPAYOFFCALCULATOROFRESULTSTab()"
});
formatter.result({
  "duration": 107476428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dollar",
      "offset": 25
    }
  ],
  "location": "CalculatorPageSteps.iSelectCURRENCYWith(String)"
});
formatter.result({
  "duration": 57095730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "CalculatorPageSteps.iFillInLOANBALANCEWith(String)"
});
formatter.result({
  "duration": 35828041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInANNUALINTERESTRATEWith(String)"
});
formatter.result({
  "duration": 56939636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 38
    }
  ],
  "location": "CalculatorPageSteps.iFillInAMOUNTYOUAREPAYINGWith(String)"
});
formatter.result({
  "duration": 38899029,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.iClickOnCalculateButton()"
});
formatter.result({
  "duration": 96291123,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.calculationResultsFormShouldShouldBeVisible()"
});
formatter.result({
  "duration": 26964046,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorPageSteps.loanPayoffCalculationResultIs(DataTable)"
});
formatter.result({
  "duration": 35636880,
  "error_message": "java.lang.AssertionError: expected [$12.13] but found [dollar12.13]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:442)\r\n\tat com.thecalculatorsite.stepdefs.CalculatorPageSteps.lambda$loanPayoffCalculationResultIs$2(CalculatorPageSteps.java:179)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.ReferencePipeline$Head.forEach(ReferencePipeline.java:580)\r\n\tat com.thecalculatorsite.stepdefs.CalculatorPageSteps.loanPayoffCalculationResultIs(CalculatorPageSteps.java:178)\r\n\tat ✽.And loan payoff calculation result is:(loan.payoff.calc/loanPayoffCalculator.feature:65)\r\n",
  "status": "failed"
});
});