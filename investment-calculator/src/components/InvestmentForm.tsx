const InvestmentForm = () => {
  return (
    <section id="user-input">
      <form aria-label="Investment form">
        <div className="input-group">
          <p>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input id="initial-investment" type="number" required />
          </p>
          <p>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input id="annual-investment" type="number" required />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-returns">Expected Returns</label>
            <input id="expected-returns" type="number" required />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input id="duration" type="number" required />
          </p>
        </div>
      </form>
    </section>
  );
};

export default InvestmentForm;
