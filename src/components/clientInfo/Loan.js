import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import './Cars.css';

class Loans extends Component {
    constructor(props) {
        super(props);
        try{
            this.state = {
                fromBrowse: this.props.location.state.fromBrowse,
                allInfo: this.props.location.state.allInfo,
                loanList: []
            }
        }catch (e){
            this.state = {
                fromBrowse: false,
                allInfo: '',
                loanList:[]
            }
        }
       // console.log(JSON.stringify(this.state.loans))
        this.parseLoans = this.parseLoans.bind(this)
        this.parseLoans()
    }

    parseLoans(){
        let obj = this.state.allInfo[8] //loans
        let tempList = []
        for (var i = 0; i < obj.length; i++) {
            tempList.push(obj[i])
        }
        console.log(tempList) // list of loan objects

        let tempList2 = []

        for (var i = 0; i < tempList.length; i++){ // for each loan (object) in list
            for(var idx in tempList[i]){ // that fucking extra index number of no use
                tempList2.push(tempList[i][idx])
            }
        }
        console.log(tempList2) // list of (array of each loan)

        let tempLoan = []
        for (var i = 0; i < tempList2.length; i++){ // for each loan array
            tempLoan.push(tempList2[i][0]) // save term
            tempLoan.push(tempList2[i][1]) // save likelihood
            for(var key in tempList2[i][2]){
                tempLoan.push(tempList2[i][2][key])
            }
            // now tempLoan has saved everything
            console.log(tempLoan)
            this.state.loanList.push(tempLoan)
            tempLoan = []
        }
        console.log(this.state.loanList)
    }

    render(){
        let x = this.props.location.state
            if (this.state.fromBrowse){
                return(
                    <div>
                        <h1>{x.allInfo[1]}</h1>

                        <div className='cards__item'>
                            <div className='cards__item__pic-wrap'>
                                <img className='cards__item__img'
                                    alt='Car Image'
                                    src={x.allInfo[7]}
                                    //style={{ alignSelf: 'center' }}
                                />

                            </div>
                        </div>

                        <div>
                            <h1>Car Details:</h1>
                            <ul className='cards__container'>
                                <p>Model Year: {x.allInfo[0]}</p>
                                <p>Car Type: {x.allInfo[2]}</p>
                                <p>Price: {x.allInfo[3]}</p>
                                <p>Mileage: {x.allInfo[5]}</p>
                                <p>Available at: {x.allInfo[4]}</p>
                            </ul>
                        </div>

                        <div>
                            <h1>Possible loans for you:</h1>

                            {/*<ul>*/}
                            {/*    <p>{JSON.stringify(x.allInfo[8])}</p>*/}
                            {/*</ul>*/}

                            {this.state.loanList.map(loan => <ul className='cards__container'>
                                <li><p>Term: {loan[0]} months</p></li>
                                <li><p>Predicted likelihood: {loan[1]} </p></li>
                                <li><p>Capital: ${loan[2]}</p></li>
                                <li><p>Interest: ${loan[3]}</p></li>
                                <li><p>Installment: ${loan[4]}</p></li>
                                <li><p>Remain: ${loan[5]}</p></li>
                                <li><p>Interest sum: ${loan[6]}</p></li>
                            </ul>)}

                        </div>
                    </div>
                )
            } else {
                return(
                    <div>
                        <h1>Please sign in / sign up first!</h1>
                    </div>
                )
            }
    }


}


export default withRouter(Loans)