import React, { Component } from "react";
import "../../app/App.css";
import "./UserInput.css";

/**
 * Renders sign-in page
 * @state {String} username
 * @state {String} password
 * @state {String} response stores response of fetch request to backend
 */
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      response: "",
    };
    this.handleSignin = this.handleSignin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * When signin button clicked, displays a pop up console dialogue box with user inputs
   * Save use inputs in class state variables and send them to back end to be saved in data base
   */
  handleSignin(event) {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`____Your Details____\n
          Username : ${username}
          Password: ${password}
        `);

    // send request to backend
    let post = {};
    const user = this.state;
    post = {
      username: user.username,
      password: user.password,
    };

    //console.log(JSON.stringify(post));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    };

    fetch(
      "https://cors-everywhere.herokuapp.com/http://ec2-18-118-19-97.us-east-2.compute.amazonaws.com:8080/signin",
      requestOptions
    )
      //fetch("http://localhost:8080/signin", requestOptions)
      .then((response) => response.json())
      .then((response) => this.setState({ response: response }))
      .then((response) => console.log(this.state.response))
      .then((response) => this.checkAccount());
  }

  /**
   * Check if user logs in successfully based on fetch response
   */
  checkAccount() {
    if (this.state.response['Authentication'] === 'Unsuccessful'){
        alert(`Sorry Log in unsuccessful, please try again.`)
    } else{
        window.open("/browse");
    }
  }

  /**
   * Updates corresponding state variables when user inputs
   */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-content">
          <form onSubmit={this.handleSignin} className="form" data-testid="form">
            <h1>Already have an account?</h1>
            <h2> Sign in NOW! </h2>

            <div className="form-inputs">
              <label className="form-label"> Username:</label>
              <input
                className="form-input"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={this.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label"> Password:</label>
              <input
                className="form-input"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={this.password}
                onChange={this.handleChange}
              />
            </div>

            <button className="form-input-btn" type="submit">
              <p className="btn-text"> Sign in </p>
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
