import React from "react";

function SignupStep2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <form onSubmit={props.handleSubmit} className="form">
            <h1>Additional Information </h1>

            <h1 class="step">Step 2</h1>

            <div className="form-inputs">
              <label className="form-label">Downpayment:</label>
              <input
                className="form-input"
                name="maxDownPayment"
                type="number"
                placeholder="Enter your down payment"
                value={props.maxDownPayment}
                onChange={props.handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label"> Monthly Budget:</label>
              <input
                className="form-input"
                name="maxMonthlyPayment"
                type="number"
                placeholder="Enter your monthly payment budget"
                value={props.maxMonthlyPayment}
                onChange={props.handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label">Zip Code:</label>
              <input
                className="form-input"
                name="zipCode"
                type="text"
                placeholder="Enter your zip code"
                value={props.zipCode}
                onChange={props.handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label">Credit Score: </label>
              <input
                className="form-input"
                name="creditScore"
                type="number"
                placeholder="Enter your credit score"
                value={props.creditScore}
                onChange={props.handleChange}
              />
            </div>

            <button
              className="form-input-btn"
              type="submit"
              onClick={props.handleSubmit}
            >
              <p class="btn-text"> Submit </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupStep2;
