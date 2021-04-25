/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import {
  ThemeProvider,
  CSSReset,
  Heading,
  Box,
  Flex,
  Text,
  Link,
} from '@chakra-ui/core';
import Form from '../Form';
import Results from '../Results';
import PropertyCalculator from '../../utils/PropertyCalculator';

import './App.css';

// Chakra UI Components

const App = () => {
  const initialState = {
    address: '',
    zip: '',
    price: 0,
    loanAmount: 0,
    interestRate: 0,
    loanPeriod: 0,
    rent: 0,
    initialExpenses: 0,
    monthlyExpenses: 0,
    holdingTerm: 20,
  };

  const [state, updateState] = useState(initialState);

  // Updates the state based on the given field and its updated value
  function updatePropertyInfo(field, newVal) {
    updateState({ ...state, [field]: newVal });
  }

  // Handles input changes within the form component
  function handleInputChange(event) {
    event.preventDefault();
    let value;
    // Retrieve appropriate value format based on input type
    if (event.target.type === 'text') {
      value = event.target.value;
    } else {
      value = Number.isNaN(event.target.value)
        ? 0
        : parseFloat(event.target.value);
    }
    updatePropertyInfo(event.target.name, value);
  }

  // Handles slider changes within the results component
  function handleSliderChange(value) {
    updatePropertyInfo('holdingTerm', value);
  }

  /*
    Based on Monthly Fixed-Rate Mortgage method
    Follows steps provided by https://www.thebalance.com/calculate-mortgage-315668
    Monthly Loan Payment = Loan Amount / Discount Factor
  */
  function calculatedMonthlyMortgage(loanAmount, interestRate, period) {
    const numOfPeriodicPayments = period * 12;
    const periodicInterestRate = interestRate / 100 / 12;
    const discountFactor =
      ((1 + periodicInterestRate) ** numOfPeriodicPayments - 1) /
      (periodicInterestRate *
        (1 + periodicInterestRate) ** numOfPeriodicPayments);
    // Round to nearest hundredth
    return Math.round(100 * (loanAmount / discountFactor)) / 100;
  }

  function calculateResults() {
    const {
      price,
      rent,
      initialExpenses,
      monthlyExpenses,
      loanAmount,
      interestRate,
      loanPeriod,
      holdingTerm,
    } = state;

    /* *** Step One: Purchase Cost *** */
    const totalProjectCost = price + initialExpenses;
    /* *** Step Two: Total Cost Out of Pocket *** */
    const outOfPocketCosts = totalProjectCost - loanAmount;
    /* *** Step Three: Calculate the monthly mortgage payment (loan amortization) *** */
    const monthlyMortgagePayment = calculatedMonthlyMortgage(
      loanAmount,
      interestRate,
      loanPeriod
    );
    /* *** Step Four: Determine Total Income *** */
    const totalIncome = rent;
    /* *** Step Five: Determine Total Expenses *** */
    const totalExpenses = monthlyExpenses + monthlyMortgagePayment;

    /* *** Step Six: Evaluate the Deal *** */
    const cashFlow = totalIncome - totalExpenses;
    const remainingLoan =
      loanAmount - holdingTerm * monthlyMortgagePayment * 12;

    // salesPrice = Projected equity of annual 2% increase
    const projectedSalesPrice = PropertyCalculator.calculatedHouseAppreciation(
      price,
      holdingTerm
    );

    // salesExpenses = 6% for real estate agent, 4,000 in closing costs, and 4% maintenance costs
    const projectedSalesExpenses = Math.round(
      projectedSalesPrice * 0.06 + projectedSalesPrice * 0.04 + 4000
    );

    // Calculated overall profit at sale
    const totalProfit =
      projectedSalesPrice -
      projectedSalesExpenses -
      remainingLoan -
      outOfPocketCosts;

    // cocROI = annualCashFlow / totalInvestedCapital
    // totalROI = (totalProfit / totalInvestedCapital) / time (before selling)
    const cocROI = ((cashFlow * 12) / outOfPocketCosts) * 100;
    const totalROI = (totalProfit / outOfPocketCosts / holdingTerm) * 100;

    // Return the results as an object that can be called from the results component
    const results = {
      totalProjectCost,
      outOfPocketCosts,
      monthlyMortgagePayment,
      cashFlow,
      holdingTerm,
      projectedSalesPrice,
      projectedSalesExpenses,
      estimatedMonthlyIncome: totalIncome,
      estimatedInitialExpenses: initialExpenses,
      estimatedMonthlyExpenses: totalExpenses,
      cocROI: Math.round(100 * cocROI) / 100, // round to hundredth
      totalROI: Math.round(100 * totalROI) / 100, // round to ten hundredth
    };
    return results;
  }

  const results = calculateResults();
  return (
    <ThemeProvider>
      <CSSReset />
      <Box className="App" backgroundColor="gray.50">
        <Heading textAlign="center" mb={4}>
          Rental Property Analysis
        </Heading>
        <Flex
          alignItems="center"
          justifyContent="space-around"
          flexDir="column"
        >
          {/* Form for taking House Info */}
          <Form handleInputChange={handleInputChange} />
          {/* Only Renders when form is submitted */}
          <Results
            address={state.address}
            zip={state.zip}
            results={results}
            handleSliderChange={handleSliderChange}
          />
        </Flex>
        <Box className="Footer" py={6} mt={3}>
          <footer>
            <Text fontSize="sm">
              Inspired by{' '}
              <Link
                color="teal.500"
                href="https://www.biggerpockets.com/buy_and_hold_results/new"
              >
                Bigger Pockets Property Analysis Tool
              </Link>
            </Text>
            <Text fontSize="sm">
              Copyright &copy; {new Date().getFullYear()} Smith & Butler LLC
            </Text>
          </footer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
