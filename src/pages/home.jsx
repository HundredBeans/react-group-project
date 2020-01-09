import React from 'react';
import logo from '../logo.svg';
import Header from "../component/header"

class Home extends React.Component{
    render(){
        return(
            <div className="App">
                <Header>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                </Header>
            </div>
        )
    }
}
export default Home;