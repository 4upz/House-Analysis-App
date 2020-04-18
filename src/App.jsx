import React from "react";
import "./App.css";
import Form from "./components/Form";

// Chakra UI Components
import {
    ThemeProvider,
    CSSReset,
    Heading,
    Box,
    Text,
    Stack,
} from "@chakra-ui/core";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalProjectCost: 0,
            outOfPocketCosts: 0,
            monthlyMortgagePayment: 0,
            estimatedIncome: 0,
            estimatedExpenses: 0,
            cashFlow: 0,
            cocROI: 0,
            totalROI: 0,
            dislayResults: false,
        };
        this.calculateResults = this.calculateResults.bind(this);
    }

    calculateResults(price, loanAmount, interestRate, period, rent, expenses) {
        // Step One: Purchase Cost
        const totalProjectCost = price + expenses;
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
        const totalExpenses = expenses;
        // Step Six: Evaluate the Deal
        const cashFlow = totalIncome - totalExpenses;
        const cocROI = (cashFlow * 12) / outOfPocketCosts;
        const totalROI =
            (totalIncome - totalExpenses) / outOfPocketCosts / period;
        this.setState({
            totalProjectCost: totalProjectCost,
            outOfPocketCosts: outOfPocketCosts,
            monthlyMortgagePayment: monthlyMortgagePayment,
            estimatedIncome: totalIncome,
            estimatedExpenses: totalExpenses,
            cashFlow: cashFlow,
            cocROI: cocROI,
            totalROI: totalROI,
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
        const periodicInterestRate = (interestRate / 100) * 12;
        const discountFactor =
            (Math.pow(1 + periodicInterestRate, numOfPeriodicPayments) - 1) /
            (periodicInterestRate *
                Math.pow(1 + periodicInterestRate, numOfPeriodicPayments));
        return loanAmount / discountFactor;
    }

    render() {
        return (
            <ThemeProvider>
                <CSSReset />
                <Box className="App">
                    <Heading textAlign="center" mb={4}>
                        Rental Property Analysis
                    </Heading>
                    {/* Form for taking House Info */}
                    <Form calculateResults={this.calculateResults} />
                    {/* Only Renders when form is submitted */}
                    {this.state.displayResults && (
                        <Results
                            totalProjectCost={this.state.totalProjectCost}
                            outOfPocketCosts={this.state.outOfPocketCosts}
                            monthlyMortgagePayment={
                                this.state.monthlyMortgagePayment
                            }
                            estimatedIncome={this.state.estimatedIncome}
                            estimatedExpenses={this.state.estimatedExpenses}
                            cashFlow={this.state.cashFlow}
                            cocROI={this.state.cocROI}
                            totalROI={this.state.totalROI}
                        />
                    )}
                </Box>
            </ThemeProvider>
        );
    }
}

function Results() {
    return (
        <Stack align="center">
            <Text>Projected Cost: {this.props.totalProjectCost}</Text>
            <Text>Out of Pocket Cost: {this.props.outOfPocketCosts}</Text>
            <Text>
                Monthly Mortgage Payment: {this.props.monthlyMortgagePayment}
            </Text>
            <Text>Estimated Income: {this.props.estimatedIncome}</Text>
            <Text>Estimated Expenses: {this.props.estimatedExpenses}</Text>
            <Text>Cash Flow: {this.props.cashFlow}</Text>
            <Text>Cash on Cash Return on Investment: {this.props.cocROI}</Text>
            <Text>Total Return on InvestmentL {this.props.totalROI}</Text>
        </Stack>
    );
}
