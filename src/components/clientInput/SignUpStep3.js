import React from "react";
import Select from "react-select";

/**
 * Renders  Step3 of form on Sign up page
 * @props  {int} currentStep click
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
 * @props  {function} handleInputChange  when dropdown box content selected, update UserInputs state variables
 */
function SignUpStep3(props) {
  if (props.currentStep !== 3) {
    return null;
  }

  // labels for dropdown boxes
  const employedOptions = [
    { value: "employed", label: "Yes, I am employed" },
    { value: "not employed", label: "No, I am not employed" },
  ];

  const homeownerOptions = [
    { value: "homeowner", label: "Yes, I am a homeowner" },
    { value: "not homeowner", label: "No, I am not a homeowner" },
  ];

  const advancedOptions = [
    { value: "true", label: "Yes!" },
    { value: "false", label: "No, thank you" },
  ];

  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <form onSubmit={props.handleSubmit} className="form">
            <h2>
              <wrap class="blue">Advanced Users</wrap> get better
              recommendations
            </h2>

            <h1 className="step">Step 3</h1>

            <div className="form-inputs">
              <label className="form-label">
                Would you like to be an advanced user?
              </label>
              <div data-testid="select-component">
              <Select
                name="advanced"
                className="check"
                value={props.advanced}
                onChange={props.handleInputChange}
                options={advancedOptions}
                placeholder="Interested in becoming advanced user?"
                isMulti={false}
              />
              </div>
            </div>

            <div className="form-inputs">
              <label className="form-label">Monthly Income:</label>
              <input
                className="form-input"
                name="monthlyIncome"
                type="number"
                placeholder="Enter your monthly income"
                value={props.monthlyIncome}
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
                value={props.monthlyDebt}
                onChange={props.handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label">Are you currently employed?</label>
              <Select
                name="employed"
                className="check"
                value={props.advanced}
                onChange={props.handleInputChange}
                options={employedOptions}
                placeholder="Yes/No"
                isMulti={false}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label">Are you a homeowner?</label>
              <Select
                name="homeowner"
                className="check"
                value={props.advanced}
                onChange={props.handleInputChange}
                options={homeownerOptions}
                placeholder="Yes/No"
                isMulti={false}
              />
            </div>

            <button
              className="form-input-btn"
              type="submit"
              onClick={props.handleSubmit}
            >
              <p class="btn-text">Submit</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpStep3;
