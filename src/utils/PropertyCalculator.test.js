import PropertyCalculator from './PropertyCalculator';

describe('Property Calculator', () => {
  it('calculates the house appreciation based on a 2% appreciation rate', () => {
    const price = 100;
    const holdingTerm = 20;
    const calculator = PropertyCalculator.calculatedHouseAppreciation;

    expect(calculator(price, 0)).toBe(price);
    expect(calculator(0, holdingTerm)).toBe(0);
    expect(calculator(price, holdingTerm)).toBe(149);
  });
});
