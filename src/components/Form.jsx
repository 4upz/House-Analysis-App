import React from "react";
import {
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Flex,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
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
            initialExpenses: 0,
            monthlyExpenses: 0,
        };
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Updates the state based on the change target value and using its name as a dynamic key name
    handleTextChange(event) {
        const value = event.target.value;
        this.setState({ [event.target.name]: value });
    }

    // Variant for number values (until I find a way to combine these methods)
    handleNumberChange(event) {
        // Should store the value as a float if the input expects a number
        const value = parseFloat(event.target.value);
        this.setState({ [event.target.name]: value });
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
            this.state.initialExpenses,
            this.state.monthlyExpenses
        );
    }

    render() {
        return (
            <Flex alignItems="center">
                <form
                    style={{ width: "60%", margin: "auto" }}
                    onSubmit={this.handleSubmit}
                >
                    {/* House Location Information */}
                    <Flex justifyContent="space-between">
                        {/* Address Field */}
                        <FormControl w="40%">
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <Input
                                name="address"
                                value={this.state.address}
                                onChange={this.handleTextChange}
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
                                name="zip"
                                value={this.state.zip}
                                onChange={this.handleTextChange}
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
                                name="price"
                                value={this.state.price}
                                onChange={this.handleNumberChange}
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
                                name="loanAmount"
                                value={this.state.loanAmount}
                                onChange={this.handleNumberChange}
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
                                name="interest"
                                value={this.state.interest}
                                onChange={this.handleNumberChange}
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
                            <NumberInput
                                defaultValue={20}
                                min={0}
                                max={50}
                                name="loanPeriod"
                                onChange={this.handleNumberChange}
                                type="number"
                                id="loan-period"
                                placeholder="20"
                                aria-describedby="loan-period-helper-text"
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
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
                        <FormControl w="30%">
                            {/* Estimated Monthly Rent */}
                            <FormLabel htmlFor="rent">
                                Estimated Monthly Rent
                            </FormLabel>
                            <Input
                                name="rent"
                                value={this.state.rent}
                                onChange={this.handleNumberChange}
                                type="number"
                                id="rent"
                                placeholder="1200"
                                aria-describedby="rent-helper-text"
                            />
                            <FormHelperText id="rent-helper-text" mb="0.5rem">
                                Exclude commas and use US dollars.
                            </FormHelperText>
                        </FormControl>
                        {/* Initial Expenses */}
                        <FormControl w="30%">
                            <FormLabel htmlFor="initial-expenses">
                                Estimated Initial Expenses
                            </FormLabel>
                            <Input
                                name="initialExpenses"
                                value={this.state.initialExpenses}
                                onChange={this.handleNumberChange}
                                type="number"
                                id="initial-expenses"
                                placeholder="17000"
                                aria-describedby="initial-expenses-helper-text"
                            />
                            <FormHelperText
                                id="initial-expenses-helper-text"
                                mb="0.5rem"
                            >
                                Closing costs, initial repairs, etc.
                            </FormHelperText>
                        </FormControl>
                        {/* Recurring Monthly Expenses */}
                        <FormControl w="30%">
                            <FormLabel htmlFor="monthly-expenses">
                                Estimated Monthly Expenses
                            </FormLabel>
                            <Input
                                name="monthlyExpenses"
                                value={this.state.monthlyExpenses}
                                onChange={this.handleNumberChange}
                                type="number"
                                id="monthly-expenses"
                                placeholder="902.27"
                                aria-describedby="monthly-expenses-helper-text"
                            />
                            <FormHelperText
                                id="monthly-expenses-helper-text"
                                mb="0.5rem"
                            >
                                Recurring bills including gas, electric, etc.
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
