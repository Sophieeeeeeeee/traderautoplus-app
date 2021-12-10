import React, { useEffect, useState } from "react";

/**
 * Renders  Step1 of form on Sign up page
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
function SignUpStep1(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <form className="form">
            {" "}
            <h1>Get started with us today!</h1>
            <h2> Create an account! </h2>
            <h1 className="step">Step 1</h1>
            <div className="form-inputs">
              <label className="form-label">Username:</label>
              <input
                className="form-input"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={props.name}
                onChange={props.handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label">Password:</label>
              <input
                className="form-input"
                name="password"
                type="password"
                placeholder="Enter a password"
                value={props.password}
                onChange={props.handleChange}
              />
            </div>
            <button
              className="form-input-btn"
              type="submit"
              onClick={props.stepOneNext}
            >
              <p className="btn-text"> Next </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpStep1;
