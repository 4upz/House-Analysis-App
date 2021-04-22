/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatHelpText,
  StatGroup,
  StatNumber,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/core';

/* *** Utility Functions *** */
// If the result is not a number or not yet calculated, display it as 0
function formattedNumDisplayOf(resultNumber) {
  return Number.isFinite(resultNumber) ? resultNumber.toLocaleString() : '0';
}

const Results = ({ results, address, zip, handleSliderChange }) => {
  const header =
    address === '' && zip === ''
      ? ' '
      : `Showing Analysis for ${address}, ${zip}`;

  return (
    <Box
      className="Card-Display"
      p={5}
      width={['80%', '40%']}
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
        whiteSpace={{ lg: 'nowrap', sm: 'normal' }}
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
          <StatHelpText>Out of Pocket</StatHelpText>
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
        <Stat px={2} minW="50%">
          <StatLabel>Selling Price</StatLabel>
          <StatNumber>
            ${formattedNumDisplayOf(results.projectedSalesPrice)}
          </StatNumber>
          <StatHelpText>At time of Sale</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%">
          <StatLabel>Selling Expenses</StatLabel>
          <StatNumber>
            $
            {results.totalProjectCost === 0
              ? 0
              : formattedNumDisplayOf(results.projectedSalesExpenses)}
          </StatNumber>
          <StatHelpText>At time of Sale</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%%">
          <StatLabel>Cash on Cash</StatLabel>
          <StatNumber>{formattedNumDisplayOf(results.cocROI)}%</StatNumber>
          <StatHelpText>ROI</StatHelpText>
        </Stat>
        <Stat px={2} minW="50%">
          <StatLabel>Total Return</StatLabel>
          <StatNumber>{formattedNumDisplayOf(results.totalROI)}%</StatNumber>
          <StatHelpText>ROI</StatHelpText>
        </Stat>
      </StatGroup>
      {/* Holding Term Slider */}
      <Slider
        aria-label="Holding Term"
        defaultValue={results.holdingTerm}
        onChange={handleSliderChange}
        min={1}
        max={50}
      >
        <SliderTrack />
        <SliderFilledTrack bg="teal.500" />
        <SliderThumb />
      </Slider>
      <Heading textAlign="center" as="h3" size="md">
        After Holding for{' '}
        <Text display="inline" color="teal.600" size="md">
          {results.holdingTerm}
        </Text>{' '}
        {results.holdingTerm > 1 ? 'Years' : 'Year'} Before Selling
      </Heading>
    </Box>
  );
};

Results.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.object.isRequired,
  address: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  handleSliderChange: PropTypes.func.isRequired,
};

export default Results;
