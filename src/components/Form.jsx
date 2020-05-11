import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
} from "@chakra-ui/core";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Updates the state based on the change target value and using its name as a dynamic key name
  handleInputChange(event) {
    event.preventDefault();
    let value;
    // Retrieve appropriate value format based on input type
    if (event.target.type === "text") {
      value = event.target.value;
    } else {
      value = isNaN(event.target.value) ? 0 : parseFloat(event.target.value);
    }
    this.props.updatePropertyInfo(event.target.name, value);
  }

  render() {
    return (
      <Box
        backgroundColor="white"
        width={["80%", "60%"]}
        p={5}
        textAlign={["center", "left"]}
        className="Card-Display"
      >
        <form onSubmit={this.handleSubmit}>
          {/* House Location Information */}
          <Flex flexWrap="wrap" justifyContent={["center", "space-between"]}>
            {/* Address Field */}
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                name="address"
                onChange={this.handleInputChange}
                type="text"
                id="address"
                placeholder="21 Jump Street"
                aria-describedby="address-helper-text"
              />
              <FormHelperText id="address-helper-text" mb="0.5rem">
                Where is it located?
              </FormHelperText>
            </FormControl>
            {/* Zip Code Field */}
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="zip">Zip Code</FormLabel>
              <Input
                name="zip"
                onChange={this.handleInputChange}
                type="text"
                id="zip"
                placeholder="91210"
                aria-describedby="zip-helper-text"
                maxLength="5"
              />
              <FormHelperText id="zip-helper-text" mb="0.5rem">
                The 5 digit neighborhood code.
              </FormHelperText>
            </FormControl>
            {/* Purchase Price & Information */}
            {/* Purchase Price */}
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="price">Purchase Price</FormLabel>
              <Input
                name="price"
                onChange={this.handleInputChange}
                type="number"
                id="price"
                placeholder="120000"
                aria-describedby="price-helper-text"
              />
              <FormHelperText id="zip-helper-text" mb="0.5rem">
                Exclude commas and use US dollars.
              </FormHelperText>
            </FormControl>
            {/* Loan Info Group */}
            {/* Loan Amount*/}
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="loan">Loan Amount</FormLabel>
              <Input
                name="loanAmount"
                onChange={this.handleInputChange}
                type="number"
                id="loan"
                placeholder="100000"
                aria-describedby="loan-helper-text"
              />
              <FormHelperText id="loan-helper-text" mb="0.5rem">
                Round to the nearest whole number.
              </FormHelperText>
            </FormControl>
            {/* Loan Interest Rate*/}
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="interestRate">Loan Interest Rate</FormLabel>
              <Input
                name="interestRate"
                onChange={this.handleInputChange}
                type="number"
                id="interestRate"
                placeholder="5"
                aria-describedby="interest-helper-text"
              />
              <FormHelperText id="interest-helper-text" mb="0.5rem">
                Rounded percentage rate.
              </FormHelperText>
            </FormControl>
            {/* Loan Period*/}
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="loan-period">Loan Period</FormLabel>
              <Input
                min={0}
                name="loanPeriod"
                id="loan-period"
                placeholder="20"
                aria-describedby="loan-period-helper-text"
                onChange={this.handleInputChange}
                type="number"
              />
              <FormHelperText id="loan-period-helper-text" mb="0.5rem">
                Length of loan in years.
              </FormHelperText>
            </FormControl>
            {/* Income and Expenses information */}
            <FormControl width={["90%", "45%", "30%"]}>
              {/* Estimated Monthly Rent */}
              <FormLabel htmlFor="rent">Estimated Monthly Rent</FormLabel>
              <Input
                name="rent"
                onChange={this.handleInputChange}
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
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="initial-expenses">
                Estimated Initial Expenses
              </FormLabel>
              <Input
                name="initialExpenses"
                onChange={this.handleInputChange}
                type="number"
                id="initial-expenses"
                placeholder="17000"
                aria-describedby="initial-expenses-helper-text"
              />
              <FormHelperText id="initial-expenses-helper-text" mb="0.5rem">
                Closing costs, initial repairs, etc.
              </FormHelperText>
            </FormControl>
            {/* Recurring Monthly Expenses */}
            <FormControl width={["90%", "45%", "30%"]}>
              <FormLabel htmlFor="monthly-expenses">
                Estimated Monthly Expenses
              </FormLabel>
              <Input
                name="monthlyExpenses"
                onChange={this.handleInputChange}
                type="number"
                id="monthly-expenses"
                placeholder="350"
                aria-describedby="monthly-expenses-helper-text"
              />
              <FormHelperText id="monthly-expenses-helper-text" mb="0.5rem">
                Recurring bills excluding mortgage.
              </FormHelperText>
            </FormControl>
          </Flex>
        </form>
      </Box>
    );
  }
}
