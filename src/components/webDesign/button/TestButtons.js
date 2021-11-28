import React, {Component} from "react";

/**
 * Remember for phase 0 the 'senso' and 'database' button?
 * yepppppp here's the class of codes for rendering and onclick actions
 */
class TestButtons extends Component{
    constructor() {
        super();
        this.state = {
            databasee: '',
            senso:'',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickk = this.handleClickk.bind(this)
    }
    handleClick () {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
            this.setState({senso: xhr.responseText})
        })
        xhr.open('GET', 'https://cors-everywhere.herokuapp.com/http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/senso')
        xhr.send()
    }

    handleClickk () {
        var db = new XMLHttpRequest()
        db.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(db.responseText)
            this.setState({databasee: db.responseText})
        })
        db.open('GET', 'https://cors-everywhere.herokuapp.com/http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/database')
        db.send()
    }

    render(){
        return(
            <div>
                <button className='button' onClick={this.handleClick}>Senso</button>
                <button className='button' onClick={this.handleClickk}>Database</button>
                <p>{this.state.senso}</p>
                <p>{this.state.databasee}</p>
            </div>
        )
    }
}

export default TestButtons