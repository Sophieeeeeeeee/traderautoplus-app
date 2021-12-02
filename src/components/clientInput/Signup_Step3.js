import React from "react";
import Select from "react-select";

function SignupStep3(props) {
  if (props.currentStep !== 3) {
    return null;
  }

  const employedOptions = [
    { value: "employed", label: "Yes" },
    { value: "not employed", label: "No" },
  ];

  const homeownerOptions = [
    { value: "homeowner", label: "Yes, I own a home" },
    { value: "not homeowner", label: "No, I do not" },
  ];

  const advancedOptions = [
    { value: true, label: "Yes!" },
    { value: false, label: "No, thank you" },
  ];

  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <form onSubmit={props.handleSubmit} className="form">
            <h2>
              Below are <span class="blue"> optional</span> inputs if you'd like
              to be an <span class="blue"> advanced</span> user and get more
              <span class="blue"> tailored</span> car recomendation!
            </h2>

            <div className="form-inputs check">
              <Select
                name="advanced"
                value={props.advanced}
                onChange={props.handleCarFilter}
                options={advancedOptions}
                placeholder="Interested in becoming advanced user?"
                isMulti={false}
              />
            </div>

            <h1 class="step">Step 3</h1>

            <div className="form-inputs">
              <label className="form-label">Monthly Income:</label>
              <input
                className="form-input"
                name="monthlyIncome"
                type="number"
                placeholder="Enter your monthly income"
                value={props.maxDownPayment}
                onChange={props.handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label">Monthly Debt:</label>
              <input
                className="form-input"
                name="monthlyDebt"
                type="number"
                placeholder="Enter your monthly debt"
                value={props.maxDownPayment}
                onChange={props.handleChange}
              />
            </div>

            <div className="form-inputs check">
              <Select
                name="employed"
                value={props.employed}
                onChange={props.handleCarFilter}
                options={employedOptions}
                placeholder="Are you currently employed?"
                isMulti={false}
              />
            </div>

            <div className="form-inputs check">
              <Select
                name="homeowner"
                value={props.homeowner}
                onChange={props.handleCarFilter}
                options={homeownerOptions}
                placeholder="Do you own a home?"
                isMulti={false}
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

export default SignupStep3;
