import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import './Tiles.css';


class Navbar extends Component {
    
    render() {
        return (
           
            <div className="Navbar">
     <ReactBootstrap.Navbar  expand="lg">
     <h5>Conferences-List</h5>
     <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
     <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
       <div className="Text">  
     <ReactBootstrap.Form inline>
     <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
     <ReactBootstrap.Button variant="outline-danger">Search</ReactBootstrap.Button>
     </ReactBootstrap.Form></div>
     </ReactBootstrap.Navbar.Collapse>
     </ReactBootstrap.Navbar>
     </div>
           
        )
    }

   
}

export default Navbar;