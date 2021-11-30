import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import CardItem from './CarItem';

class Loans extends Component {
    constructor(props) {
        super(props);
        try{
            this.state = {
                fromBrowse: this.props.location.state.fromBrowse,
                allInfo: this.props.location.state.allInfo
            }
        }catch (e){
            this.state = {
                fromBrowse: false,
                allInfo: ''
            }
        }
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
                            <ul>
                                <p>Model Year: {x.allInfo[0]}</p>
                                <p>Car Type: {x.allInfo[2]}</p>
                                <p>Price: {x.allInfo[3]}</p>
                                <p>Mileage: {x.allInfo[5]}</p>
                                <p>Available at: {x.allInfo[4]}</p>
                            </ul>
                        </div>

                        <div>
                            <h1>Possible loans for you:</h1>
                            <ul>
                                <p>{JSON.stringify(x.allInfo[8])}</p>
                            </ul>

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