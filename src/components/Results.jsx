import React from "react";
import {
  Box,
  Heading,
  Stat,
  StatLabel,
  StatHelpText,
  StatGroup,
  StatNumber,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";

export default function Results(props) {
  const results = props.results;
  const header =
    props.address === "" && props.zip === ""
      ? " "
      : `Showing Analysis for ${props.address}, ${props.zip}`;
  return (
    <Box
      className="Card-Display"
      p={5}
      width={["80%", "40%"]}
      my={6}
      backgroundColor="white"
    >
      <Heading textAlign="center" as="h2" size="md" mb={6}>
        {header}
      </Heading>
      <StatGroup
        flexWrap="wrap"
        alignContent="center"
        align="center"
        justifyContent="space-evenly"
        whiteSpace={{ lg: "nowrap", sm: "normal" }}
        textAlign="center"
      >
        <Stat px={2} minW="50%">
          <StatLabel>Total Cost</StatLabel>
          <StatNumber>
            ${formattedNumDisplayOf(results.totalProjectCost)}
          </StatNumber>
          <StatHelpText>Over Time</StatHelpText>
        </Stat>
        <Stat px={2} minW="50">
          <StatLabel>Cash Down</StatLabel>
          <StatNumber>
            ${formattedNumDisplayOf(results.outOfPocketCosts)}
          </StatNumber>
          <StatHelpText>Needed</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%">
          <StatLabel>Mortgage</StatLabel>
          <StatNumber>
            ${formattedNumDisplayOf(results.monthlyMortgagePayment)}
          </StatNumber>
          <StatHelpText>Per Month</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%">
          <StatLabel>Rent Income</StatLabel>
          <StatNumber>
            ${formattedNumDisplayOf(results.estimatedMonthlyIncome)}
          </StatNumber>
          <StatHelpText>Per Month</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%">
          <StatLabel>Total Expenses</StatLabel>
          <StatNumber>
            ${formattedNumDisplayOf(results.estimatedMonthlyExpenses)}
          </StatNumber>
          <StatHelpText>Per Month</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%">
          <StatLabel>Cash Flow</StatLabel>
          <StatNumber>${formattedNumDisplayOf(results.cashFlow)}</StatNumber>
          <StatHelpText>Per Month</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%%">
          <StatLabel>Cash on Cash</StatLabel>
          <StatNumber>{formattedNumDisplayOf(results.cocROI)}%</StatNumber>
          <StatHelpText>ROI</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%">
          <StatLabel>Total</StatLabel>
          <StatNumber>{formattedNumDisplayOf(results.totalROI)}%</StatNumber>
          <StatHelpText>ROI</StatHelpText>
        </Stat>
      </StatGroup>
      {/* Holding Term Slider */}
      <Slider
        aria-label="Holding Term"
        defaultValue={results.holdingTerm}
        onChange={props.handleSliderChange}
        min={1}
        max={50}
      >
        <SliderTrack />
        <SliderFilledTrack bg="teal.500" />
        <SliderThumb />
      </Slider>
      <Heading textAlign="center" as="h3" size="md">
        {`After Holding For ${results.holdingTerm} Years`}
      </Heading>
    </Box>
  );
}

/* **** Utility Functions **** */
// If the result is not a number or not yet calculated, display it as 0
function formattedNumDisplayOf(resultNumber) {
  return isFinite(resultNumber) ? resultNumber.toLocaleString() : "0";
}
