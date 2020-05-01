import React from "react";
import "./App.css";
import Form from "./components/Form";

// Chakra UI Components
import {
    ThemeProvider,
    CSSReset,
    Heading,
    Box,
    Flex,
    Text,
    Stack,
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
        };
        this.calculateResults = this.calculateResults.bind(this);
        this.updatePropertyInfo = this.updatePropertyInfo.bind(this);
    }

    // Updates the state based on the given field and its updated value
    updatePropertyInfo(field, newVal) {
        this.setState({ [field]: newVal });
    }

    calculateResults() {
        // Step One: Purchase Cost
        const totalProjectCost = this.state.price + this.state.initialExpenses;
        // Step Two: Total Cost Out of Pocket
        const outOfPocketCosts = totalProjectCost - this.state.loanAmount;
        // Step Three: Calculate the monthly mortgage payment (loan amortization)
        const monthlyMortgagePayment = this.calculatedMonthlyMortgage(
            this.state.loanAmount,
            this.state.interestRate,
            this.state.loanPeriod
        );
        // Step Four: Determine Total Income
        const totalIncome = this.state.rent;
        // Step Five: Determine Total Expenses
        const totalExpenses =
            this.state.monthlyExpenses + monthlyMortgagePayment;

        // Step Six: Evaluate the Deal
        const totalProfit =
            this.state.price - this.state.initialExpenses - outOfPocketCosts;
        // cocROI = annualCashFlow / totalInvestedCapital
        // totalROI = (totalProfit / totalInvestedCapital) / time (before selling)
        const cashFlow = totalIncome - totalExpenses;
        const cocROI = ((cashFlow * 12) / outOfPocketCosts) * 100;

        // TODO: Add a feature to see the different totalROI across adjustable time period
        const totalROI =
            (totalProfit / outOfPocketCosts / this.state.loanPeriod) * 100;

        const results = {
            totalProjectCost: totalProjectCost,
            outOfPocketCosts: outOfPocketCosts,
            monthlyMortgagePayment: monthlyMortgagePayment,
            estimatedMonthlyIncome: totalIncome,
            estimatedInitialExpenses: this.state.initialExpenses,
            estimatedMonthlyExpenses: totalExpenses,
            cashFlow: cashFlow,
            cocROI: Math.round(10000 * cocROI) / 10000, // round X to ten thousandth
            totalROI: Math.round(10000 * totalROI) / 10000, // round X to ten thousandth
        };
        return results;
    }

    calculatedMonthlyMortgage(loanAmount, interestRate, period) {
        /* 
        Based on Monthly Fixed-Rate Mortgage method 
        Follows steps provided by https://www.thebalance.com/calculate-mortgage-315668
        Monthly Loan Payment = Loan Amount / Discount Factor 
        */
        const numOfPeriodicPayments = period * 12;
        const periodicInterestRate = interestRate / 100 / 12;
        const discountFactor =
            (Math.pow(1 + periodicInterestRate, numOfPeriodicPayments) - 1) /
            (periodicInterestRate *
                Math.pow(1 + periodicInterestRate, numOfPeriodicPayments));
        // Round to nearest hundredth
        return Math.round(100 * (loanAmount / discountFactor)) / 100;
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
                        className="Anlysis-Display"
                        alignItems="center"
                        justifyContent="space-around"
                    >
                        {/* Form for taking House Info */}
                        <Form
                            updatePropertyInfo={this.updatePropertyInfo}
                            calculateResults={this.calculateResults}
                        />
                        {/* Only Renders when form is submitted */}
                        <Results
                            address={this.state.address}
                            zip={this.state.zip}
                            results={results}
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
                                Copyright &copy; {new Date().getFullYear()}{" "}
                                Smith & Butler LLC
                            </Text>
                        </footer>
                    </Box>
                </Box>
            </ThemeProvider>
        );
    }
}

function Results(props) {
    const results = props.results;
    const header =
        props.address === "" && props.zip === ""
            ? " "
            : `Showing Analysis for ${props.address}, ${props.zip}`;
    return (
        <Box
            className="Card-Display"
            p={5}
            w="40%"
            my={6}
            backgroundColor="white"
        >
            <Stack align="center">
                <Heading as="h2" size="md">
                    {header}
                </Heading>
                <Text>
                    Total Projected Cost: $
                    {formattedNumDisplayOf(results.totalProjectCost)}
                </Text>
                <Text>
                    Out of Pocket Cost: $
                    {formattedNumDisplayOf(results.outOfPocketCosts)}
                </Text>
                <Text>
                    Monthly Mortgage Payment: $
                    {formattedNumDisplayOf(results.monthlyMortgagePayment)}
                </Text>
                <Text>
                    Estimated Monthly Income: $
                    {formattedNumDisplayOf(results.estimatedMonthlyIncome)}
                </Text>
                <Text>
                    Estimated Monthly Expenses: $
                    {formattedNumDisplayOf(results.estimatedMonthlyExpenses)}
                </Text>
                <Text>Cash Flow: ${formattedNumDisplayOf(results.cashFlow)}</Text>
                <Text>
                    Cash on Cash Return on Investment:{" "}
                    {formattedNumDisplayOf(results.cocROI)}%
                </Text>
                <Text>
                    Total Return on Investment{" "}
                    {formattedNumDisplayOf(results.totalROI)}%
                </Text>
            </Stack>
        </Box>
    );
}

/* **** Utility Functions **** */
// If the result is not a number or not yet calculated, display it as 0
function formattedNumDisplayOf(resultNumber){
    return isNaN(resultNumber) ? "0" : resultNumber.toLocaleString();
}
