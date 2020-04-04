import React, {Component} from 'react';
import './App.css'
import * as ReactBootstrap from "react-bootstrap";
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'

class App extends Component {
    render() {
        return (
           <div className="App" >

            <Navbar /> 
            <Tabs />
           </div>
        )
    }

   
}

export default App;