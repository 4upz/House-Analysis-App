import React from "react";
import {
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Flex,
} from "@chakra-ui/core";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            zip: "",
            price: 0,
            loanAmount: 0,
            interest: 0,
            loanPeriod: 0,
            rent: 0,
            expenses: 0,
        };
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleLoanChange = this.handleLoanChange.bind(this);
        this.handleInterestChange = this.handleInterestChange.bind(this);
        this.handlePeriodChange = this.handlePeriodChange.bind(this);
        this.handleRentChange = this.handleRentChange.bind(this);
        this.handleExpensesChange = this.handleExpensesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAddressChange(event) {
        const address = event.target.value;
        this.setState({ address: address });
    }

    handleZipCodeChange(event) {
        const zip = event.target.value;
        this.setState({ zip: zip });
    }

    handlePriceChange(event) {
        const price = event.target.value;
        this.setState({ price: parseFloat(price) });
    }

    handleLoanChange(event) {
        const loanAmount = event.target.value;
        this.setState({ loanAmount: parseFloat(loanAmount) });
    }

    handleInterestChange(event) {
        const interest = event.target.value;
        this.setState({ interest: parseFloat(interest) });
    }

    handlePeriodChange(event) {
        const loanPeriod = event.target.value;
        this.setState({ loanPeriod: parseFloat(loanPeriod) });
    }

    handleRentChange(event) {
        const rent = event.target.value;
        this.setState({ rent: parseFloat(rent) });
    }

    handleExpensesChange(event) {
        const expenses = event.target.value;
        this.setState({ expenses: parseFloat(expenses) });
    }

    handleSubmit(event) {
        this.startAnalysis();
        event.preventDefault();
    }

    startAnalysis() {
        this.props.calculateResults(
            this.state.price,
            this.state.loanAmount,
            this.state.interest,
            this.state.loanPeriod,
            this.state.rent,
            this.state.expenses
        );
    }

    render() {
        return (
            <Flex alignItems="center">
                <form
                    style={{ width: "40%", margin: "auto" }}
                    onSubmit={this.handleSubmit}
                >
                    {/* House Location Information */}
                    <Flex justifyContent="space-between">
                        {/* Address Field */}
                        <FormControl w="40%">
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <Input
                                onChange={this.handleAddressChange}
                                type="text"
                                id="address"
                                placeholder="42 Wallaby Way Sydney, Australia"
                                aria-describedby="address-helper-text"
                            />
                            <FormHelperText
                                id="address-helper-text"
                                mb="0.5rem"
                            >
                                Where is it located?
                            </FormHelperText>
                        </FormControl>
                        {/* Zip Code Field */}
                        <FormControl w="40%">
                            <FormLabel htmlFor="zip">Zip Code</FormLabel>
                            <Input
                                onChange={this.handleZipCodeChange}
                                type="text"
                                id="zip"
                                placeholder="12345"
                                aria-describedby="zip-helper-text"
                                maxLength="5"
                            />
                            <FormHelperText id="zip-helper-text" mb="0.5rem">
                                The 5 digit neighborhood code.
                            </FormHelperText>
                        </FormControl>
                    </Flex>
                    {/* Purchase Price & Information */}
                    <Flex justifyContent="space-between">
                        {/* Purchase Price */}
                        <FormControl w="40%">
                            <FormLabel htmlFor="price">
                                Purchase Price
                            </FormLabel>
                            <Input
                                onChange={this.handlePriceChange}
                                type="number"
                                id="price"
                                placeholder="120000"
                                aria-describedby="price-helper-text"
                            />
                            <FormHelperText id="zip-helper-text" mb="0.5rem">
                                Exclude commas and use US dollars.
                            </FormHelperText>
                        </FormControl>
                        {/* Loan Amount*/}
                        <FormControl w="40%">
                            <FormLabel htmlFor="loan">Loan Amount</FormLabel>
                            <Input
                                onChange={this.handleLoanChange}
                                type="number"
                                id="loan"
                                placeholder="100000"
                                aria-describedby="loan-helper-text"
                            />
                            <FormHelperText id="loan-helper-text" mb="0.5rem">
                                Round to the nearest whole number.
                            </FormHelperText>
                        </FormControl>
                    </Flex>
                    {/* Loan Info Group */}
                    <Flex justifyContent="space-between">
                        {/* Loan Interest Rate*/}
                        <FormControl w="40%">
                            <FormLabel htmlFor="interest">
                                Loan Interest Rate
                            </FormLabel>
                            <Input
                                onChange={this.handleInterestChange}
                                type="number"
                                id="interest"
                                placeholder="5"
                                aria-describedby="interest-helper-text"
                            />
                            <FormHelperText
                                id="interest-helper-text"
                                mb="0.5rem"
                            >
                                Rounded percentage rate.
                            </FormHelperText>
                        </FormControl>
                        {/* Loan Period*/}
                        <FormControl w="40%">
                            <FormLabel htmlFor="loan-period">
                                Loan Period
                            </FormLabel>
                            <Input
                                onChange={this.handlePeriodChange}
                                type="number"
                                id="loan-period"
                                placeholder="20"
                                aria-describedby="loan-period-helper-text"
                            />
                            <FormHelperText
                                id="loan-period-helper-text"
                                mb="0.5rem"
                            >
                                Length of loan in years.
                            </FormHelperText>
                        </FormControl>
                    </Flex>
                    {/* Income and Expenses information */}
                    <Flex justifyContent="space-between">
                        <FormControl w="40%">
                            {/* Estimated Monthly Rent */}
                            <FormLabel htmlFor="rent">
                                Estimated Monthly Rent
                            </FormLabel>
                            <Input
                                onChange={this.handleRentChange}
                                type="number"
                                id="rent"
                                placeholder="1200"
                                aria-describedby="rent-helper-text"
                            />
                            <FormHelperText id="rent-helper-text" mb="0.5rem">
                                Exclude commas and use US dollars.
                            </FormHelperText>
                        </FormControl>
                        {/* Total Estimated Expenses */}
                        <FormControl w="40%">
                            <FormLabel htmlFor="expenses">
                                Total Estimated Expenses
                            </FormLabel>
                            <Input
                                onChange={this.handleExpensesChange}
                                type="number"
                                id="expenses"
                                placeholder="700"
                                aria-describedby="expenses-helper-text"
                            />
                            <FormHelperText
                                id="expenses-helper-text"
                                mb="0.5rem"
                            >
                                Rough estimate, no need to be precise.
                            </FormHelperText>
                        </FormControl>
                    </Flex>
                    {/* Submission Button */}
                    <Flex justifyContent="center" mt={4}>
                        <Button
                            variantColor="teal"
                            name="submit"
                            type="submit"
                            w="40%"
                        >
                            Analyze
                        </Button>
                    </Flex>
                </form>
            </Flex>
        );
    }
}
