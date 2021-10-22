//import axios from "axios";
import React, {Component} from "react";
import XMLParser from 'react-xml-parser';
import {parse} from "fast-xml-parser";

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            message: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        var xhr = new XMLHttpRequest()
        var xmlDoc;
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          console.log(xhr.responseText)
            xmlDoc = parse(xhr.responseText);
        })
        xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/senso')
        xhr.send()

        this.setState({message: xmlDoc})

        // axios.get('https:////cors-anywhere.herokuapp.com/https://ge3dewpamf.execute-api.us-east-2.amazonaws.com/test/helloworld?name=John&city=Seattle')
        //     .then(response => this.setState({username: response.data.name}))

    }

    render () {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>Click Me</button>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}
export default App


