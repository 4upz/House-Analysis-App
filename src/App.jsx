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
            totalProjectCost: 0,
            outOfPocketCosts: 0,
            monthlyMortgagePayment: 0,
            estimatedIncome: 0,
            estimatedInitialExpenses: 0,
            estimatedMonthlyExpenses: 0,
            cashFlow: 0,
            cocROI: 0,
            totalROI: 0,
            dislayResults: false,
        };
        this.calculateResults = this.calculateResults.bind(this);
    }

    calculateResults(
        price,
        loanAmount,
        interestRate,
        period,
        rent,
        initialExpenses,
        monthlyExpenses
    ) {
        // Step One: Purchase Cost
        const totalProjectCost = price + initialExpenses;
        // Step Two: Total Cost Out of Pocket
        const outOfPocketCosts = totalProjectCost - loanAmount;
        // Step Three: Calculate the monthly mortgage payment (loan amortization)
        const monthlyMortgagePayment = this.calculatedMonthlyMortgage(
            loanAmount,
            interestRate,
            period
        );
        // Step Four: Determine Total Income
        const totalIncome = rent;
        // Step Five: Determine Total Expenses
        const totalExpenses = monthlyExpenses + monthlyMortgagePayment;

        // Step Six: Evaluate the Deal
        const totalProfit = price - initialExpenses - outOfPocketCosts;
        // cocROI = annualCashFlow / totalInvestedCapital
        // totalROI = (totalProfit / totalInvestedCapital) / time (before selling)
        const cashFlow = totalIncome - totalExpenses;
        const cocROI = ((cashFlow * 12) / outOfPocketCosts) * 100;

        // TODO: Add a feature to see the different totalROI across adjustable time period
        const totalROI = (totalProfit / outOfPocketCosts / period) * 100;

        this.setState({
            totalProjectCost: totalProjectCost,
            outOfPocketCosts: outOfPocketCosts,
            monthlyMortgagePayment: monthlyMortgagePayment,
            estimatedIncome: totalIncome,
            estimatedInitialExpenses: initialExpenses,
            estimatedMonthlyExpenses: totalExpenses,
            cashFlow: cashFlow,
            cocROI: Math.round(10000 * cocROI) / 10000, // round X to ten thousandth
            totalROI: Math.round(10000 * totalROI) / 10000, // round X to ten thousandth
            displayResults: true,
        });
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
        return (
            <ThemeProvider>
                <CSSReset />
                <Box className="App">
                    <Heading textAlign="center" mb={4}>
                        Rental Property Analysis
                    </Heading>
                    <Flex alignItems="center" justifyContent="space-around">
                        {/* Form for taking House Info */}
                        <Form calculateResults={this.calculateResults} />
                        {/* Only Renders when form is submitted */}
                        <Results
                            totalProjectCost={this.state.totalProjectCost}
                            outOfPocketCosts={this.state.outOfPocketCosts}
                            monthlyMortgagePayment={
                                this.state.monthlyMortgagePayment
                            }
                            estimatedMonthlyIncome={this.state.estimatedIncome}
                            estimatedMonthlyExpenses={
                                this.state.estimatedMonthlyExpenses
                            }
                            cashFlow={this.state.cashFlow}
                            cocROI={this.state.cocROI}
                            totalROI={this.state.totalROI}
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
    return (
        <Box my={6}>
            <Stack align="center">
                <Text>
                    Total Projected Cost: $
                    {props.totalProjectCost.toLocaleString()}
                </Text>
                <Text>
                    Out of Pocket Cost: $
                    {props.outOfPocketCosts.toLocaleString()}
                </Text>
                <Text>
                    Monthly Mortgage Payment: $
                    {props.monthlyMortgagePayment.toLocaleString()}
                </Text>
                <Text>
                    Estimated Monthly Income: $
                    {props.estimatedMonthlyIncome.toLocaleString()}
                </Text>
                <Text>
                    Estimated Monthly Expenses: $
                    {props.estimatedMonthlyExpenses.toLocaleString()}
                </Text>
                <Text>Cash Flow: ${props.cashFlow.toLocaleString()}</Text>
                <Text>
                    Cash on Cash Return on Investment:{" "}
                    {props.cocROI.toLocaleString()}%
                </Text>
                <Text>
                    Total Return on Investment {props.totalROI.toLocaleString()}
                    %
                </Text>
            </Stack>
        </Box>
    );
}
