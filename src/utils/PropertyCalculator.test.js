import PropertyCalculator from './PropertyCalculator';

describe('Property Calculator', () => {
  it('calculates the house appreciation based on a 2% appreciation rate', () => {
    const sample = { price: 100, holdingTerm: 20 };
    const calculator = PropertyCalculator.calculatedHouseAppreciation;

    expect(calculator(sample.price, 0)).toBe(sample.price);
    expect(calculator(0, sample.holdingTerm)).toBe(0);
    expect(calculator(sample.price, sample.holdingTerm)).toBe(149);
  });

  it('Calculates the monthly mortgage based on a given fixed rate and term', () => {
    const sample = { loan: 100000, interestRate: 5, term: 10 };
    const calculator = PropertyCalculator.calculatedMonthlyMortgage;

    expect(calculator(sample.loan, sample.interestRate, sample.term)).toBe(
      1060.66
    );
  });
});
