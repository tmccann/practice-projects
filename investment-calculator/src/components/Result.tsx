export type ResultsItem = {
  year: number;
  investmentValue: number;
  interestYear: number;
  totalInterest: number;
  investedCapital: number;
};
export type Results = ResultsItem[];
export type TableData = {
  tableData: Results;
};
const Result = (tableData: TableData) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
    </table>
  );
};

export default Result;
