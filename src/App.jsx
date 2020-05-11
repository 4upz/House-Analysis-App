import React from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";

// Chakra UI Components
import {
  ThemeProvider,
  CSSReset,
  Heading,
  Box,
  Flex,
  Text,
  Link,
} from "@chakra-ui/core";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      zip: "",
      price: 0,
      loanAmount: 0,
      interestRate: 0,
      loanPeriod: 0,
      rent: 0,
      initialExpenses: 0,
      monthlyExpenses: 0,
      holdingTerm: 20,
    };
    this.updatePropertyInfo = this.updatePropertyInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.calculateResults = this.calculateResults.bind(this);
  }

  // Updates the state based on the given field and its updated value
  updatePropertyInfo(field, newVal) {
    this.setState({ [field]: newVal });
  }

  // Handles input changes within the form component
  handleInputChange(event) {
    event.preventDefault();
    let value;
    // Retrieve appropriate value format based on input type
    if (event.target.type === "text") {
      value = event.target.value;
    } else {
      value = isNaN(event.target.value) ? 0 : parseFloat(event.target.value);
    }
    this.updatePropertyInfo(event.target.name, value);
  }

  // Handles slider changes within the results component
  handleSliderChange(value) {
    this.updatePropertyInfo("holdingTerm", value);
  }

  calculateResults() {
    /* *** Step One: Purchase Cost *** */
    const totalProjectCost = this.state.price + this.state.initialExpenses;
    /* *** Step Two: Total Cost Out of Pocket *** */
    const outOfPocketCosts = totalProjectCost - this.state.loanAmount;
    /* *** Step Three: Calculate the monthly mortgage payment (loan amortization) *** */
    const monthlyMortgagePayment = this.calculatedMonthlyMortgage(
      this.state.loanAmount,
      this.state.interestRate,
      this.state.loanPeriod
    );
    /* *** Step Four: Determine Total Income *** */
    const totalIncome = this.state.rent;
    /* *** Step Five: Determine Total Expenses *** */
    const totalExpenses = this.state.monthlyExpenses + monthlyMortgagePayment;

    /* *** Step Six: Evaluate the Deal *** */
    const cashFlow = totalIncome - totalExpenses;
    const remainingLoan =
      this.state.loanAmount -
      this.state.holdingTerm * monthlyMortgagePayment * 12;

    // salesPrice = Projected equity of annual 2% increase
    const projectedSalesPrice = this.calculatedHouseAppreciation(
      this.state.price,
      this.state.holdingTerm
    );

    // salesExpenses = 6% for real estate agent, 4,000 in closing costs, and 4% painting
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
    const totalROI =
      (totalProfit / outOfPocketCosts / this.state.holdingTerm) * 100;

    // Return the results as an object that can be called from the results component
    const results = {
      totalProjectCost: totalProjectCost,
      outOfPocketCosts: outOfPocketCosts,
      monthlyMortgagePayment: monthlyMortgagePayment,
      estimatedMonthlyIncome: totalIncome,
      estimatedInitialExpenses: this.state.initialExpenses,
      estimatedMonthlyExpenses: totalExpenses,
      cashFlow: cashFlow,
      cocROI: Math.round(100 * cocROI) / 100, // round to hundredth
      totalROI: Math.round(100 * totalROI) / 100, // round to ten hundredth
      holdingTerm: this.state.holdingTerm,
      projectedSalesPrice: projectedSalesPrice,
      projectedSalesExpenses: projectedSalesExpenses,
    };
    return results;
  }

  /* 
    Based on Monthly Fixed-Rate Mortgage method 
    Follows steps provided by https://www.thebalance.com/calculate-mortgage-315668
    Monthly Loan Payment = Loan Amount / Discount Factor 
  */
  calculatedMonthlyMortgage(loanAmount, interestRate, period) {
    const numOfPeriodicPayments = period * 12;
    const periodicInterestRate = interestRate / 100 / 12;
    const discountFactor =
      (Math.pow(1 + periodicInterestRate, numOfPeriodicPayments) - 1) /
      (periodicInterestRate *
        Math.pow(1 + periodicInterestRate, numOfPeriodicPayments));
    // Round to nearest hundredth
    return Math.round(100 * (loanAmount / discountFactor)) / 100;
  }

  /*
    Assumes an average appreciation of 2% per year and returns the 
    projected equity after the length of the current holding term.
  */
  calculatedHouseAppreciation(price, holdingTerm) {
    let currentEquity = price;
    for (let i = 0; i < holdingTerm; i++) {
      currentEquity += currentEquity * 0.02;
    }
    return Math.round(currentEquity);
  }

  render() {
    const results = this.calculateResults();
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
            <Form handleInputChange={this.handleInputChange} />
            {/* Only Renders when form is submitted */}
            <Results
              address={this.state.address}
              zip={this.state.zip}
              results={results}
              handleSliderChange={this.handleSliderChange}
            />
          </Flex>
          <Box className="Footer" py={6} mt={3}>
            <footer>
              <Text fontSize="sm">
                Inspired by{" "}
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
  }
}
