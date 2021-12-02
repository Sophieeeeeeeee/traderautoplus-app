import React, {Component} from "react";
import '../../app/App.css';
import './UserInput.css';
import {withRouter} from "react-router-dom";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: 'Paul',
            password: '123',
            response: ''}
        this.handleSignin = this.handleSignin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSignin(event){
        event.preventDefault()
        const {username, password} = this.state
        alert(`____Your Details____\n
          Username : ${username}
          Password: ${password}
        `)

        // send request to backend
        let post = {}
        const user = this.state
        post = {
            "name": user.username,
            "password": user.password
        }

        console.log(JSON.stringify(post))

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        };

        fetch("https://cors-everywhere.herokuapp.com/http://ec2-18-118-19-97.us-east-2.compute.amazonaws.com:8080/signin", requestOptions)
        //fetch("http://localhost:8080/signin", requestOptions)
            .then(response => response.json())
            .then(response => this.setState({response: response}))
            .then(response => console.log(this.state.response))
            .then(response => this.checkAccount())

    }

    checkAccount(){
        //this.setState({response: {'Authentication}': 'Successful'}})

        // if (this.state.response['Authentication'] === 'Unsuccessful'){
        //     console.log('before?')
        //     alert(`Sorry Log in unsuccessful, please try again.`)
        // } else{
        //     // this.props.history.push({
        //     //     pathname: '/browse'
        //     // })
        //     window.open("/browse");
        // }
        window.open("/browse");
    }


    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return(
                <div className='form-container'>
                    <div className='form-content'>
                        <form onSubmit={this.handleSignin} className='form'>
                            <h1>
                                Already have an account? Sign in NOW!
                            </h1>

                            <div className='form-inputs'>
                                <label className='form-label'> Username:</label>
                                <input className='form-input'
                                       name = "username"
                                       type="text"
                                       placeholder='Enter your username'
                                       value={this.username}
                                       onChange={this.handleChange}/>
                            </div>

                            <div className='form-inputs'>
                                <label className='form-label'> Password:</label>
                                <input className='form-input'
                                       name = "password"
                                       type="text"
                                       placeholder='Enter your password'
                                       value={this.password}
                                       onChange={this.handleChange}/>
                            </div>

                            <button className='form-input-btn' type='submit'>
                                {/*<a href='http://localhost:3000/browse'>Submit</a>*/}
                                Sign in
                            </button>

                            {/*            /!*<button className='form-input-btn' onClick={props.sendPost}>Post</button>*!/*/}
                            {/*            /!*<p>{this.props.postRequest}</p>*!/*/}

                            {/*            /!*                <span className='form-input-login'>*!/*/}
                            {/*            /!*  Already have an account? Login <a href='#'>here</a>*!/*/}
                            {/*            /!*</span>*!/*/}
                        </form>
                    </div>
                </div>
        )


    }
}

export default Signin


