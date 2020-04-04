import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import Postlistf from './Postlistfree'
import Postlistp from './Postlistpaid'


class Tabs extends Component {
    render() {
        return (
           <div className="Tabs">
             <ReactBootstrap.Tabs defaultActiveKey="Free" id="uncontrolled-tab-example">
             <ReactBootstrap.Tab eventKey="Free" title="Free">
  <Postlistf />
  </ReactBootstrap.Tab>
  <ReactBootstrap.Tab eventKey="Paid" title="Paid">
    <Postlistp />
  </ReactBootstrap.Tab>

  
</ReactBootstrap.Tabs>
           </div>
        )
    }

   
}

export default Tabs;