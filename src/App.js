import './App.css';
// import axios from "axios";
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
            databasee: '',
            senso:''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
            this.setState({senso: xhr.responseText})
        })
        xhr.open('GET', 'http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/senso')
        xhr.send()
    }
    
     handleClickk () {
        var db = new XMLHttpRequest()
        db.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(db.responseText)
            this.setState({databasee: db.responseText})
        })
        db.open('GET', 'http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/database')
        db.send()
    }

    render () {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>Senso</button>
                <button className='button' onClick={this.handleClickk}>Database</button>
                <p>{this.state.senso}</p>
                <p>{this.state.databasee}</p>


            </div>
        )
    }
}
export default App
