// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Component} from "react";
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/*<p>*/}
//         {/*  Edit <code>src/App.js</code> and save to reload.*/}
//         {/*</p>*/}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    // var xhr = new XMLHttpRequest()
    // xhr.addEventListener('load', () => {
    //   // update the state of the component with the result here
    //   console.log(xhr.responseText)
    // })
    // xhr.open('GET', 'https:////cors-anywhere.herokuapp.com/https://66wy5dn7i7.execute-api.us-east-2.amazonaws.com/test/helloworld?name=John&city=Seattle')
    // xhr.send()
    // this.setState({username: xhr.responseText})

    // axios.get('https:////cors-anywhere.herokuapp.com/http://ec2-3-144-10-133.us-east-2.compute.amazonaws.com/')
    //     .then(response => this.setState({username: response.data.name}))

    // axios.get('https:////cors-anywhere.herokuapp.com/https://github.com/Sophieeeeeeeee')
    //     .then(response => this.setState({username: response.data.name}))
    // works!

    axios.get('https:////cors-anywhere.herokuapp.com/https://ge3dewpamf.execute-api.us-east-2.amazonaws.com/test/helloworld?name=John&city=Seattle')
        .then(response => this.setState({username: response.data.name}))


    // axios.get('http://ec2-3-144-10-133.us-east-2.compute.amazonaws.com/')
    //        .then(response => console.log(response))



  }

  render () {
    return (
        <div className='button__container'>
          <button className='button' onClick={this.handleClick}>Click Me</button>
          <p>{this.state.username}</p>
        </div>
    )
  }
}
export default App


