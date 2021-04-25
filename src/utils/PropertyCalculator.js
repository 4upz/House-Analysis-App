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
};

export default PropertyCalculator;
