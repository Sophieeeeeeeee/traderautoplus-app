import React from "react";

/**
 * Renders  Step2 of form on Sign up page
 * @props  {int} currentStep click on each image to get to this path
 * @props  {function} handleCurrentStep
 * @props  {String} name
 * @props  {String} password
 * @props  {String} maxMonthlyPayment
 * @props  {String} maxDownPayment
 * @props  {String} zipCode
 * @props  {String} creditScore
 * @props  {function} handleChange
 * @props  {function} handleSubmit
 * @props  {function} sendPost
 * @props  {function} stepOneNext
 */
function SignUpStep2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <form onSubmit={props.handleSubmit} className="form">
            <h1>Additional Information </h1>

            <h1 className="step">Step 2</h1>

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
              type="button"
              onClick={props.stepTwoNext}
            >
              <p className="btn-text"> Next </p>
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default SignUpStep2;
