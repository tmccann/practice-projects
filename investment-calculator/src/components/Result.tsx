import { formatter } from "../util/investment";

export type ResultsItem = {
  year: number;
  investmentValue: number;
  interestYear: number;
  totalInterest: number;
  investedCapital: number;
};
export type Results = ResultsItem[];
type ResultProps = {
  tableData: Results;
};

const Result = ({ tableData }: ResultProps) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th className="center">Year</th>
          <th className="center">Investment Value</th>
          <th className="center">Interest(Year)</th>
          <th className="center">Total Interest</th>
          <th className="center">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => {
          let year = `year-${index + 1}`;
          return (
            <tr key={`row-${year}`}>
              <td className="center" key={year}>
                {row.year}
              </td>
              <td
                className="center"
                key={`investmentValue-${year}`}
                data-testid={`investmentValue-${year}`}
              >
                {formatter.format(row.investmentValue)}
              </td>
              <td
                className="center"
                key={`interestYear-${year}`}
                data-testid={`interestYear-${year}`}
              >
                {formatter.format(row.interestYear)}
              </td>
              <td
                className="center"
                key={`totalInterest-${year}`}
                data-testid={`totalInterest-${year}`}
              >
                {formatter.format(row.totalInterest)}
              </td>
              <td
                className="center"
                key={`investedCapital-${year}`}
                data-testid={`investedCapital-${year}`}
              >
                {formatter.format(row.investedCapital)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
