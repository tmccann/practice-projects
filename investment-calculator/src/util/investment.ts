// Calculates the investment growth over a number of years.
// Accepts an object with the following properties:
// - initialInvestment: Initial amount of money invested
// - annualInvestment: Fixed amount added every year
// - expectedReturns: Annual return rate (as a percentage)
// - duration: Number of years to invest

import { FormValueProps } from "../components/InvestmentForm";

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturns,
  duration,
}: FormValueProps) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let totalInvested = initialInvestment;
  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturns / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInterest += interestEarnedInYear;
    totalInvested += annualInvestment;
    annualData.push({
      year: i + 1, // Year number (1-based)
      investmentValue: investmentValue, // Total value at end of this year
      interestYear: interestEarnedInYear, // Interest earned this year
      totalInterest: totalInterest, // Cumulative interest earned
      investedCapital: totalInvested, // Cumulative amount invested
    });
  }

  return annualData;
}

// Prepares a currency formatter for British Pounds using the built-in Intl API.
// Use formatter.format(number) to format values as GBP.
// Example: formatter.format(1000) => "£1,000"
export const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
