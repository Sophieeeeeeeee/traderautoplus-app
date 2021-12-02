import React, {Component} from "react";
import './Cars.css';
import CardItem from './CarItem';
import CarFilter from './CarFilter'

/**
 * Renders browse page, calls and provide props to CarFilter, CarItem, Cars
 * @props  {String} carColor
 * @props  {String} carType
 * @props  {String} carBrand
 * @props  {String} carAge
 * @props  {function} handleCarFilter
 * @props  {function} sendPost
 */
class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eachCar: '',
            carInfo: [],
            loans: ''
        }
        this.sendIDRequest = this.sendIDRequest.bind(this);
    }

    async sendIDRequest() {
        console.log('test')
        console.log(this.props.postResponse)

        let obj = this.props.postResponse

        for (var key in obj) {
            //console.log(key)
            let post = {key};
            console.log(JSON.stringify(post))
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(post)
            };

            const IDresponse = await fetch("https://cors-everywhere.herokuapp.com/http://ec2-18-118-19-97.us-east-2.compute.amazonaws.com:8080/database", requestOptions)
                //fetch("http://localhost:8080/database", requestOptions)
                .then(response => response.json())
                .then(response => this.setState({eachCar: response}))
                .then(response => console.log(this.state.eachCar))

            console.log(typeof this.state.eachCar)

            let temp2 = obj[key]
            this.setState({loans: temp2})

            //let temp = this.state.eachCar['Model Year']
            //console.log(temp)
            let temp = [this.state.eachCar['Model Year'],
                this.state.eachCar['Car'],
                this.state.eachCar['Car Type'],
                this.state.eachCar['Cost'],
                this.state.eachCar['Dealership'],
                this.state.eachCar['ID'],
                this.state.eachCar['Mileage'],
                this.state.eachCar['Photo'],
                this.state.loans]

            console.log(temp)

            // Object.keys(this.state.eachCar).forEach(function(key) {
            //     console.log('Key : ' + key + ', Value : ' + this.state.eachCar[key])
            // })

            console.log('hye')

            // for (var i = 0; i <  this.state.carInfo.length; i++) {  //Iterate through arrays in array
            //     if (this.state.carInfo[i].indexOf(temp[1]) != -1) {
            //         this.state.carInfo.push(temp)
            //     }
            // }

            this.state.carInfo.push(temp)

            console.log(this.state.carInfo)


            // var temp = JSON.parse(JSON.stringify(this.state.carInfo))
            // console.log(this.state.eachCar[1])
            //
            // temp.push(JSON.parse(JSON.stringify(this.state.eachCar)))
            // this.setState({carInfo: temp})


            //this.state.carInfo.push(JSON.parse(JSON.stringify(this.state.eachCar)))
            //console.log(this.state.carInfo)
            //let tempmap = []
            //let info = ''
            // for (var x in this.state.eachCar) {
            //     console.log('hello')
            //
            //     info = JSON.parse(JSON.stringify(this.state.eachCar[x]))
            //     console.log(info)
            //
            //     tempmap.push(JSON.parse(info))
            //     console.log(tempmap)
            //
            //     //this.state.carInfo.push(JSON.parse(JSON(tempmap)))
            //     //tempmap.set(x, this.state.eachCar[x])
            //     //console.log(tempmap)
            //     //this.state.carInfo.push(tempmap)
            //     //console.log(this.state.carInfo)
            //  }
            //this.state.carInfo.push(idobj)
            //console.log(this.state.carInfo)
        }
    }

    render() {
        if (this.props.currentStep === -1){
            return(
            <div>
                <h1>Please sign in / sign up first!</h1>
            </div>)
        }else {
            return (
                <div className='cards'>

                    <CarFilter
                        color={this.props.carColor}
                        type={this.props.carType}
                        brand={this.props.carBrand}
                        age={this.props.carAge}
                        handleCarFilter={this.props.handleCarFilter}
                        sendPost={this.props.sendPost}
                    />

                    {/*<button className='filter-btn' onClick={this.props.sendPost}>Filter</button>*/}
                    <button className='filter-btn' onClick={this.sendIDRequest}>Filter</button>

                    <h1>Check out these cars recommended to you!</h1>
                    <h1>Apply filter to find the one for you!</h1>
                    {/*{this.props.postResponse && Array.from(this.props.postResponse[4]).map(x => <p>{JSON.stringify(x)}</p>)}*/}

                    {/*cars rendered below should be based on car filter (and sign up info from before)*/}

                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            {this.state.carInfo.map(car => <ul className='cards__items'><CardItem
                                src={car[7]}
                                text={car[1]}
                                label={car[2]}
                                path={car[1]}
                                allInfo={car}
                                loans={car[8]}/></ul>)}
                        </div>
                    </div>

                </div>

            )
        }
    }
}



export default Cars