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
            interest: 0,
            rent: 0,
            expenses: 0,
        };
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleInterestChange = this.handleInterestChange.bind(this);
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
        this.setState({ price: price });
    }

    handleInterestChange(event) {
        const interest = event.target.value;
        this.setState({ interest: interest });
    }

    handleRentChange(event) {
        const rent = event.target.value;
        this.setState({ rent: rent });
    }

    handleExpensesChange(event) {
        const expenses = event.target.value;
        this.setState({ expenses: expenses });
    }

    handleSubmit(event) {
        this.startAnalysis();
        event.preventDefault();
    }

    startAnalysis() {
        console.log(this.state.address);
        console.log(this.state.zip);
        console.log(this.state.price);
        console.log(this.state.interest);
        console.log(this.state.rent);
        console.log(this.state.expenses);
    }

    render() {
        return (
            <Flex justify="center" alignContent="center" flexDirection="column">
                <form style={{ width: "40%", margin: "auto" }} onSubmit={this.handleSubmit}>
                    {/* TODO: Separate each input into separate form controls and wrap entire section in <form> handle */}
                    {/* Address Field */}
                    <FormControl>
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <Input
                            onChange={this.handleAddressChange}
                            type="text"
                            id="address"
                            placeholder="42 Wallaby Way Sydney, Australia"
                            aria-describedby="address-helper-text"
                        />
                        <FormHelperText id="address-helper-text" mb="0.5rem">
                            Where is it located?
                        </FormHelperText>
                    </FormControl>
                    {/* Zip Code Field */}
                    <FormControl>
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
                    {/* Purchase Price */}
                    <FormControl>
                        <FormLabel htmlFor="price">Purchase Price</FormLabel>
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
                    {/* Loan Interest Rate*/}
                    <FormControl>
                        <FormLabel htmlFor="interest">
                            Loan Interest Rate
                        </FormLabel>
                        <Input
                            onChange={this.handleInterestChange}
                            type="number"
                            id="interest"
                            placeholder="15"
                            aria-describedby="interest-helper-text"
                        />
                        <FormHelperText id="interest-helper-text" mb="0.5rem">
                            Round to the nearest whole number.
                        </FormHelperText>
                    </FormControl>
                    {/* Include Amortization? */}
                    <FormControl>
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
                    <FormControl>
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
                        <FormHelperText id="expenses-helper-text" mb="0.5rem">
                            Rough estimate, no need to be precise.
                        </FormHelperText>
                    </FormControl>
                    {/* Submission Button */}
                    <Button
                        variantColor="teal"
                        name="submit"
                        type="submit"
                        w="40%"
                        float="right"
                    >
                        Analyze
                    </Button>
                </form>
            </Flex>
        );
    }
}
