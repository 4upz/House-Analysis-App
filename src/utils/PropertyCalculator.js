const PropertyCalculator = {
  /**
      Returns the projected equity after the length of the current holding term 
      by assuming an average appreciation of 2% per year
    */
  calculatedHouseAppreciation: (price, holdingTerm) => {
    let currentEquity = price;
    for (let i = 0; i < holdingTerm; i += 1) {
      currentEquity += currentEquity * 0.02;
    }
    return Math.round(currentEquity);
  },

  /** 
    Calculates Monthly Fixed-Rate Mortgage using the method
    provided by https://www.thebalance.com/calculate-mortgage-315668
    (Monthly Loan Payment = Loan Amount / Discount Factor)
  */
  calculatedMonthlyMortgage: (loanAmount, interestRate, period) => {
    const numOfPeriodicPayments = period * 12;
    const periodicInterestRate = interestRate / 100 / 12;
    const discountFactor =
      ((1 + periodicInterestRate) ** numOfPeriodicPayments - 1) /
      (periodicInterestRate *
        (1 + periodicInterestRate) ** numOfPeriodicPayments);
    return Math.round(100 * (loanAmount / discountFactor)) / 100; // Round to nearest hundredth
  },
};

export default PropertyCalculator;
