import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Cars.css";
import "./Loan.css";

/**
 * Renders car-details page of each car popping up on browse page
 * @props.location.state {boolean} fromBrowse if the link is directed from browse page
 * @props.location.state  {Array} allInfo response of car ID post request, contains car info and associated loan info
 *
 * @state {Array} loanList saves all extracted info as element in list
 * @state {Array} fromBrowse default false
 * @state {String} allInfo default ''
 */
class Loans extends Component {
  constructor(props) {
    super(props);
    try {
      this.state = {
        fromBrowse: this.props.location.state.fromBrowse,
        allInfo: this.props.location.state.allInfo,
        loanList: [],
      };
    } catch (e) {
      this.state = {
        fromBrowse: false,
        allInfo: "",
        loanList: [],
      };
    }
    this.parseLoans = this.parseLoans.bind(this);

    if(this.state.fromBrowse){
    this.parseLoans();}
  }

  /**
   * Extract car info and related loan info saved in this.props.location.state.allInfo
   * Save them in a array as state variable for rendering
   */
  parseLoans() {

    let obj = this.state.allInfo[8]; //loans
    let tempList = [];
    for (var i = 0; i < obj.length; i++) {
      tempList.push(obj[i]);
    }

    let tempList2 = [];

    for (var i = 0; i < tempList.length; i++) {
      // for each loan (object) in list
      for (var idx in tempList[i]) {
        // that fucking extra index number of no use
        tempList2.push(tempList[i][idx]);
      }
    }

    let tempLoan = [];
    for (var i = 0; i < tempList2.length; i++) {
      // for each loan array
      tempLoan.push(tempList2[i][0]); // save term
      tempLoan.push(tempList2[i][1]); // save likelihood
      for (var key in tempList2[i][2]) {
        tempLoan.push(tempList2[i][2][key]);
      }
      // now tempLoan has saved everything
      //console.log(tempLoan);
      this.state.loanList.push(tempLoan);
      tempLoan = [];
    }
    //console.log(this.state.loanList);
  }

  render() {
    let x = this.props.location.state;
    if (this.state.fromBrowse) {
      return (
        <div>
          <h1 class="main">{x.allInfo[1]}</h1>

          <div className="cards__item">
            <div className="whole-list">
              <h1>Car Details:</h1>
              <div className="cards__container">
                <div class="box ">
                  <h2 class="boxname">Model Year:</h2>{" "}
                  <p class="information">{x.allInfo[0]}</p>
                </div>
                <div class="box  ">
                  <h2 class="boxname">Car Type:</h2>{" "}
                  <p class="information">{x.allInfo[2]}</p>
                </div>
                <div class="box ">
                  <h2 class="boxname">Price:</h2>{" "}
                  <p class="information">{x.allInfo[3]}</p>
                </div>
                <div class="box  ">
                  <h2 class="boxname ">Mileage:</h2>{" "}
                  <p class="information">{x.allInfo[6]}</p>
                </div>
                <div class="box availability">
                  <h2 class="boxname available">Available at:</h2>{" "}
                  <p class="information">{x.allInfo[4]}</p>
                </div>
              </div>
            </div>
            <img
              className="cards__item__img"
              alt="Car Image"
              src={x.allInfo[7]}
            />
          </div>

          <div>
            <h1 class="main">Possible loans for you:</h1>

            {this.state.loanList.map((loan) => (
              <div className="element">
                <div class="box predicted">
                  <h2 class="boxname">Predicted likelihood:</h2>
                  <p class="likelihood"> {loan[1]} </p>
                </div>
                <div class="box border-left">
                  <h2 class="informationheader">Term:</h2>{" "}
                  <p class="informationloan">{loan[0]} months</p>
                </div>
                <div class="box border-left border-right">
                  <h2 class="informationheader">Capital:</h2>{" "}
                  <p class="informationloan">${loan[2]}</p>
                </div>
                <div class="box border-left">
                  <h2 class="informationheader">Interest:</h2>{" "}
                  <p class="informationloan">${loan[3]}</p>
                </div>
                <div class="box border-left border-right">
                  <h2 class="informationheader">Installment:</h2>{" "}
                  <p class="informationloan">${loan[4]}</p>
                </div>
                <div class="box border-left ">
                  <h2 class="informationheader">Remain:</h2>{" "}
                  <p class="informationloan">${loan[5]}</p>
                </div>
                <div class="box border-left border-right">
                  <h2 class="informationheader">Interest sum:</h2>{" "}
                  <p class="informationloan">${loan[6]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Please sign in / sign up first!</h1>
        </div>
      );
    }
  }
}

export default withRouter(Loans);
