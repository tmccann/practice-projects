import { calculateInvestmentResults } from "../../util/investment";
/*
========================================
  Expected Behavior Breakdown (2 Years)
========================================

Year 1
------
Start Value:        1000
Interest (10%):     1000 * 0.10 = 100
Annual Investment:  100
------------------------------
End of Year Value:  1000 + 100 + 100 = 1200

Year 2
------
Start Value:        1200
Interest (10%):     1200 * 0.10 = 120
Annual Investment:  100
------------------------------
End of Year Value:  1200 + 120 + 100 = 1420
--------------------------------------------
Total interest value: 100 + 120 = 220
Total invested capital: 1000 + 100 + 100 =1200
*/

const mockData = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturns: 10,
  duration: 2,
};
type ResultsItem = {
  year: number;
  investmentValue: number;
  interestYear: number;
  totalInterest: number;
  investedCapital: number;
};

type Results = ResultsItem[];
describe("calculate investment result", () => {
  let result: Results;
  beforeEach(() => {
    result = calculateInvestmentResults(mockData);
  });
  describe("Investment Value", () => {
    test("array length should equal number of years", () => {
      expect(result).toHaveLength(2);
    });
    test("investment value for year 1 should  equal 1200", () => {
      expect(result[0].investmentValue).toBe(1200);
    });
    test("investment value for year 2 should  equal 1420", () => {
      expect(result[1].investmentValue).toBe(1420);
    });
    test("investmentvalue  year 2 result should be greater than end of year 1 result", () => {
      expect(result[1].investmentValue).toBeGreaterThan(
        result[0].investmentValue
      );
    });
  });
  describe("interest(year)", () => {
    test("interest for year 1 should  equal 100", () => {
      expect(result[0].interestYear).toBe(100);
    });
    test("investment value for year 2 should  equal 120", () => {
      expect(result[1].interestYear).toBe(120);
    });
    test("interestYear year 2 result should be greater than end of year 1 result", () => {
      expect(result[1].interestYear).toBeGreaterThan(result[0].interestYear);
    });
  });
  describe("total interest", () => {
    test("total interest should equal 220", () => {
      expect(result[result.length - 1].totalInterest).toBe(220);
    });
  });
  describe("invested capital", () => {
    test("total invested captital should equal 1200", () => {
      expect(result[result.length - 1].investedCapital).toBe(1200);
    });
  });
});
