import React, { Component } from "react";
import "./Cars.css";
import CardItem from "./CarItem";
import CarFilter from "./CarFilter";

/**
 * Renders browse page, calls and provide props to CarFilter, CarItem,
 * contains filter button that when clicked sends request to backend and display cars based on the response
 * @props  {String} carColor
 * @props  {String} carType
 * @props  {String} carBrand
 * @props  {String} carAge
 * @props  {String} carAge
 * @props {String} currentStep
 * @props  {function} handleCarFilter
 * @props  {function} sendPost
 *
 * @state {String} eachCar stores response for each car ID fetch request
 * @state {carInfo} carInfo stores extracted form of car info from backend response
 * @state {loans} loans stores loan for each car ID fetch request
 */
class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eachCar: "",
      carInfo: [],
      loans: "",
    };
    this.sendIDRequest = this.sendIDRequest.bind(this);
  }

  /**
   * Sends request of each car ID from prop.postResponse to ID endpoint,
   * which sends back car details of each car associated with the ID
   * Save each response to state variable carInfo
   */
  async sendIDRequest() {
    let obj = this.props.postResponse;

    for (var key in obj) {
      let post = { key };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      };

      const IDresponse = await fetch(
        "https://cors-everywhere.herokuapp.com/http://ec2-18-118-19-97.us-east-2.compute.amazonaws.com:8080/database",
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => this.setState({ eachCar: response }))


      let temp2 = obj[key];
      this.setState({ loans: temp2 });

      let temp = [
        this.state.eachCar["Model Year"],
        this.state.eachCar["Car"],
        this.state.eachCar["Car Type"],
        this.state.eachCar["Cost"],
        this.state.eachCar["Dealership"],
        this.state.eachCar["ID"],
        this.state.eachCar["Mileage"],
        this.state.eachCar["Photo"],
        this.state.loans,
      ];


      this.state.carInfo.push(temp);

    }
  }

  render() {
    if (this.props.currentStep === -1) {
      return (
        <div>
          <h1>Please sign in / sign up first!</h1>
        </div>
      );
    } else {
      return (
        <div className="cards_car">
          <CarFilter
            color={this.props.carColor}
            type={this.props.carType}
            brand={this.props.carBrand}
            age={this.props.carAge}
            handleCarFilter={this.props.handleCarFilter}
            sendPost={this.props.sendPost}
          />

          <button className="filter-btn" onClick={this.sendIDRequest}>
            Filter
          </button>

          <h1>Check out these cars recommended to you!</h1>
          <h1>Apply filter to find the one for you!</h1>

          <div className="cards__container_car">
            <div className="cards__wrapper_car">
              {this.state.carInfo.map((car) => (
                <ul className="cards__items_car">
                  <CardItem
                    src={car[7]}
                    text={car[1]}
                    label={car[2]}
                    path={car[1]}
                    allInfo={car}
                    loans={car[8]}
                  />
                </ul>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cars;
