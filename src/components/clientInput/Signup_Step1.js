import React, { useEffect, useState } from "react";

function SignupStep1(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  let errors = {};

  const validateInput = (e) => {
    e.preventDefault();

    if (props.username.trim()) {
      errors.username = "Username required";
    }
    if (!props.password) {
      errors.username = "Password required";
    }
    console.log(errors);
  };

  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <form className="form">
            {" "}
            {/*onSubmit={validateInput}*/}
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
            {errors.password && <p>{errors.password}</p>}
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
              {/*onClick={props.handleCurrentStep}*/}
              <p className="btn-text"> Next </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupStep1;
