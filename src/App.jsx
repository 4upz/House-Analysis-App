import React from "react";
import "./App.css";
import Form from "./components/Form";

// Chakra UI Components
import { ThemeProvider, CSSReset, Heading, Box } from "@chakra-ui/core";

export default class App extends React.Component {

    // TotalProjectCost = Purchase Price + Expenses
    // outOfPocketCosts = Project Cost - Loan Amount
    // MonthylMortgage: TBD
    // TotalIncome = Rent
    // TotalExpenses = Expenses
    // Cash Flow = TotalIncome - 
    constructor(props){
        super(props);
    }

    calculateResults(){

    }

    render() {
        return (
            <ThemeProvider>
                <CSSReset />
                <Box className="App">
                    <Heading textAlign="center">House Analysis App</Heading>
                    {/* Form for taking House Info */}
                    <Form />
                </Box>
            </ThemeProvider>
        );
    }
}
