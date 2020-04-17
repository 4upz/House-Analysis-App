import React from "react";
import "./App.css";

// Chakra UI Components
import {
    ThemeProvider,
    CSSReset,
    Heading,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
} from "@chakra-ui/core";

function App() {
    return (
        <ThemeProvider>
            <CSSReset />
            <Box className="App">
                <Heading textAlign="center">House Analysis App</Heading>
                {/* Form for taking House Info */}
                <Flex justify="center" align="center" flexDirection="column">
                    {/* TODO: Separate each input into separate form controls and wrap entire section in <form> handle */}
                    <FormControl w="40%">
                        {/* Address Field */}
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <Input
                            type="text"
                            id="address"
                            placeholder="42 Wallaby Way Sydney, Australia"
                            aria-describedby="address-helper-text"
                        />
                        <FormHelperText id="address-helper-text" mb="0.5rem">
                            Where is it located?
                        </FormHelperText>
                        {/* Zip Code Field */}
                        <FormLabel htmlFor="zip">Zip Code</FormLabel>
                        <Input
                            type="text"
                            id="zip"
                            placeholder="12345"
                            aria-describedby="zip-helper-text"
                            maxLength="5"
                        />
                        <FormHelperText id="zip-helper-text" mb="0.5rem">
                            The 5 digit neighborhood code.
                        </FormHelperText>
                        {/* Purchase Price */}
                        <FormLabel htmlFor="price">Purchase Price</FormLabel>
                        <Input
                            type="number"
                            id="price"
                            placeholder="120000"
                            aria-describedby="price-helper-text"
                        />
                        <FormHelperText id="zip-helper-text" mb="0.5rem">
                            Exclude commas and use US dollars.
                        </FormHelperText>
                        {/* Loan Interest Rate*/}
                        <FormLabel htmlFor="interest">
                            Loan Interest Rate
                        </FormLabel>
                        <Input
                            type="number"
                            id="interest"
                            placeholder="15"
                            aria-describedby="interest-helper-text"
                        />
                        <FormHelperText id="interest-helper-text" mb="0.5rem">
                            Round to the nearest whole number.
                        </FormHelperText>
                        {/* Include Amortization? */}
                        {/* Estimated Monthly Rent */}
                        <FormLabel htmlFor="rent">
                            Estimated Monthly Rent
                        </FormLabel>
                        <Input
                            type="number"
                            id="rent"
                            placeholder="1200"
                            aria-describedby="rent-helper-text"
                        />
                        <FormHelperText id="rent-helper-text" mb="0.5rem">
                            Exclude commas and use US dollars.
                        </FormHelperText>
                        {/* Total Estimated Expenses */}
                        <FormLabel htmlFor="expenses">
                            Total Estimated Expenses
                        </FormLabel>
                        <Input
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
                    <Button variantColor="teal" type="submit" mt={4} w="15rem">
                        Analyze
                    </Button>
                </Flex>
            </Box>
        </ThemeProvider>
    );
}

export default App;
